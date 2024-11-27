const express = require('express');
const { verifyUser } = require('../../middlewares/verifyUser');
const { validateObjectValues } = require('../../Utils/Validate/validateObjectValues');
const { getQuery } = require('../../database/query');

const router = express.Router();

router.post("/", verifyUser, async (request, response) => {
	try {
		const { Observaciones, ID_Servicio_Horario, ID_Usuario, ID_Servicio, } = request.body;

		validateObjectValues(request.body, "No pueden haber campos vacios", ["Observaciones"]);

		const serviceSchedule = await getQuery(`
			SELECT
				ID_Servicio_Horario,
				ID_Estado_Horario
			FROM Servicios_Horarios WHERE ID_Servicio_Horario = ${ID_Servicio_Horario} AND ID_Estado_Horario = 1
		`)

		if (serviceSchedule.length === 0) {
			return response.status(400).json({ Error: "El horario seleccionado no esta disponible. Por favor seleccione otro horario" });
		}

		const query = `
			INSERT INTO Citas (Observaciones, ID_Estado_Cita, ID_Servicio_Horario, ID_Usuario, ID_Servicio) VALUES
			('${Observaciones}', 1, ${ID_Servicio_Horario}, ${ID_Usuario}, ${ID_Servicio});

			UPDATE Servicios_Horarios SET ID_Estado_Horario = 0 WHERE ID_Servicio_Horario = ${ID_Servicio_Horario};
		`;

		await getQuery(query);

		return response.status(201).json({ Status: "Success", message: "Cita agendada correctamente" });

	}
	catch (err) {
		return response.status(500).json({Error: err.message});
	}
})


router.get("/:Cedula_Usuario", verifyUser, async (request, response) => {
	try {
		const { Cedula_Usuario } = request.params;

		const appointmentsByUser = await getQuery(`
			SELECT
				c.ID_Cita AS id,
				c.Observaciones,
				c.Fecha_Creacion,

				ec.Estado AS Estado_Cita,

				sh.ID_Servicio_Horario,
				ds.Nombre AS Dia,
				FORMAT(h.Hora_Inicio, 'hh\\:mm') AS Hora_Inicio,
				FORMAT(h.Hora_Fin, 'hh\\:mm') AS Hora_Fin,

				sa.Nombre AS Servicio_Asociado,
				sa.Descripcion AS Servicio_Descripcion,
				sa.Precio,

				cs.Nombre AS Categoria

			FROM Citas c
			JOIN Estado_Cita ec ON c.ID_Estado_Cita = ec.ID_Estado_Cita

			JOIN Servicios_Horarios sh ON c.ID_Servicio_Horario = sh.ID_Servicio_Horario
			JOIN Dias_Semana ds ON sh.ID_Dia = ds.ID_Dia
			JOIN Horarios h ON sh.ID_Horario = h.ID_Horario

			JOIN Servicios_Asociados sa ON sh.ID_Servicio_Asociado = sa.ID_Servicio_Asociado
			JOIN Categorias_Servicios cs ON sa.ID_Categoria = cs.ID_Categoria

			WHERE c.ID_Usuario = ${Cedula_Usuario}
		`);

		return response.status(200).json({ appointmentsByUser: appointmentsByUser });

	}
	catch (err) {
		return response.status(500).json({Error: err.message});

	}
})


module.exports = router;