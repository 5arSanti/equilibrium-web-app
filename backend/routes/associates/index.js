const express = require("express");
const { getQuery } = require("../../database/query");

const router = express.Router();

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
			associateService: associateService[0],
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