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


module.exports = router;