const express = require("express");
const { getQuery } = require("../../database/query");

const router = express.Router();

router.get("/", async (request, response) => {
	try {
		const genres = await getQuery(`
			SELECT
				ID_Genero AS id,
				Genero AS Nombre
			FROM Generos
		`);

		return response.status(200).json({genres: genres});
	}
	catch (err) {
		return response.status(500).json({Error: err.message});
	}
});

module.exports = router;