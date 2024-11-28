const express = require("express");
const { getQuery } = require("../../database/query");
const { verifyUser } = require("../../middlewares/verifyUser");
const { verifyAdmin } = require("../../middlewares/verifyAdmin");
const { validateObjectValues } = require("../../Utils/Validate/validateObjectValues");
const { compressImage } = require("../../Utils/Images/compressImage");

const router = express.Router();

router.post("/", verifyUser, verifyAdmin, async (request, response) => {
	try {
		validateObjectValues(request.body, "No pueden haber campos vacios", ["Imagen"])

		const {
			Nombre,
			Descripcion,
			Imagen,
			Precio,
			ID_Categoria,
			ID_Servicio_Principal,
		} = request.body;

		const compressedImage = await compressImage(Imagen);


		await getQuery(`
			INSERT INTO Servicios_Asociados (Nombre, Descripcion, Imagen, Precio, ID_Categoria)
			VALUES
			('${Nombre}','${Descripcion}', 0x${compressedImage}, ${Precio}, ${ID_Categoria})
		`);

		const newAssociateService = await getQuery(`
			SELECT
				ID_Servicio_Asociado

			FROM Servicios_Asociados
			WHERE
				Nombre = '${Nombre}' AND
				Precio = ${Precio} AND
				ID_Categoria = ${ID_Categoria}
		`)

		await getQuery(`
			INSERT INTO Detalles_Servicios_Principales_Servicios_Asociados
			(ID_Servicio_Principal, ID_Servicio_Asociado)

			VALUES
			(${ID_Servicio_Principal}, ${newAssociateService[0].ID_Servicio_Asociado})
		`);

		await getQuery(`
		INSERT INTO Servicios_Horarios (ID_Servicio_Asociado, ID_Dia, ID_Horario, ID_Estado_Horario)
			SELECT
				sa.ID_Servicio_Asociado,
				ds.ID_Dia,
				h.ID_Horario,
				1
			FROM Servicios_Asociados sa
			CROSS JOIN Dias_Semana ds
			CROSS JOIN Horarios h

			WHERE sa.ID_Servicio_Asociado = ${newAssociateService[0].ID_Servicio_Asociado}
		`)

		return response.json({Status: "Success", message: "Servicio asociado creado correctamente"});

	}
	catch (err) {
		return response.json({Error: err.message})
	}

})

router.get("/:Associate_ID", async (request, response) => {
	try {
		const { Associate_ID } = request.params;

		const associateService = await getQuery(`
			SELECT
				sa.ID_Servicio_Asociado AS id,
				UPPER(sa.Nombre) AS Nombre,
				sa.Descripcion,
				sa.Imagen,
				sa.Precio,
				cs.Nombre AS Categoria

			FROM Servicios_Asociados sa
			JOIN Categorias_Servicios cs ON sa.ID_Categoria = cs.ID_Categoria

			WHERE sa.ID_Servicio_Asociado = ${Associate_ID}
		`);


		return response.status(200).json({
			associateService: {
				...associateService[0],
				Imagen: associateService[0].Imagen ? `data:image/png;base64, ${associateService[0].Imagen.toString("base64")}` : null
			},
		});
	}
	catch (err) {
		return response.status(500).json({Error: err.message});
	}
});

router.get("/:Associate_ID/schedules", async (request, response) => {
	try {
		const { Associate_ID } = request.params;

		const associateSchedules = await getQuery(`
			SELECT
				sh.ID_Servicio_Horario AS id,
				ds.Nombre AS Dia,
				FORMAT(h.Hora_Inicio, 'hh\\:mm') AS Hora_Inicio,
				FORMAT(h.Hora_Fin, 'hh\\:mm') AS Hora_Fin,
				eh.ID_Estado_Horario,
				eh.Estado

			FROM Servicios_Horarios sh

			JOIN Dias_Semana ds ON sh.ID_Dia = ds.ID_Dia
			JOIN Horarios h ON sh.ID_Horario = h.ID_Horario
			JOIN Estado_Horario eh ON sh.ID_Estado_Horario = eh.ID_Estado_Horario

			WHERE sh.ID_Servicio_Asociado = ${Associate_ID}
		`);

		const schedulesByDay = associateSchedules.reduce((acc, schedule) => {
			if (!acc[schedule.Dia]) {
				acc[schedule.Dia] = [];
			}
			acc[schedule.Dia].push({
				id: schedule.id,
				Hora_Inicio: schedule.Hora_Inicio,
				Hora_Fin: schedule.Hora_Fin,
				ID_Estado_Horario: schedule.ID_Estado_Horario,
				Estado: schedule.Estado
			});
			return acc;
		}, {});


		return response.status(200).json({
			associateSchedules: schedulesByDay,
		});
	}
	catch (err) {
		return response.status(500).json({Error: err.message});
	}
});

module.exports = router;