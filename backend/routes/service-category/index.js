const express = require("express");
const { getQuery } = require("../../database/query");
const { verifyUser } = require("../../middlewares/verifyUser");
const { verifyAdmin } = require("../../middlewares/verifyAdmin");

const router = express.Router();

router.get("/", verifyUser, verifyAdmin, async (request, response) => {
	try {
		const query = `
			SELECT
				ID_Categoria AS id,
				Nombre

			FROM Categorias_Servicios
		`;

		const servicesCategories = await getQuery(query)

		return response.json({servicesCategories: servicesCategories})
	}
	catch (err) {
		return response.json({Error: err.message})
	}
});


router.get("/services", verifyUser, verifyAdmin, async (request, response) => {
	try {
		const query = `
			SELECT
				ID_Servicio_Principal AS id,
				Nombre

			FROM Servicios_Principales
		`;

		const noDetailsServices = await getQuery(query)

		return response.json({noDetailsServices: noDetailsServices})
	}
	catch (err) {
		return response.json({Error: err.message})
	}
});

module.exports = router;