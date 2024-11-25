const express = require("express");
const { getQuery } = require("../../database/query");

const router = express.Router();

router.get("/states", async (request, response) => {
	try {
		const schedulesStates = await getQuery(`
			SELECT
				ID_Estado_Cita AS id,
				Estado AS Nombre
			FROM Estado_Cita
		`);

		return response.status(200).json({ schedulesStates });
	}
	catch (err) {
		return response.status(500).json({Error: err.message});
	}
});

module.exports = router;