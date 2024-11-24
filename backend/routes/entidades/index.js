const express = require("express");
const { getQuery } = require("../../database/query");

const router = express.Router();

router.get("/", async (request, response) => {
	try {
		const entidades = await getQuery(`
			SELECT
				ID_Entidad AS id,
				Nombre
			FROM Entidades
		`);

		return response.status(200).json({ entidades });
	}
	catch (err) {
		return response.status(500).json({Error: err.message});
	}
});

module.exports = router;