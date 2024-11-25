const express = require("express");
const { getQuery } = require("../../database/query");

const router = express.Router();

router.get("/:ID_Servicio_Horario", async (request, response) => {
	try {
		const { ID_Servicio_Horario } = request.params;

		const schedule = await getQuery(`
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

			WHERE sh.ID_Servicio_Horario = ${ID_Servicio_Horario}
		`);

		return response.status(200).json({ schedule: schedule[0] });
	}
	catch (err) {
		return response.status(500).json({Error: err.message});
	}
});

module.exports = router;