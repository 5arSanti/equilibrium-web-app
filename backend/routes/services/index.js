const express = require("express");
const { getQuery } = require("../../database/query");

const router = express.Router();

router.get("/", async (request, response) => {
	try {
		const mainServices = await getQuery(`
			SELECT
				sp.ID_Servicio_Principal AS id,
				UPPER(sp.Nombre) AS Nombre_Servicio,
				sp.Descripcion,
				sp.Icono,
				sp.Enlace,
				e.Nombre AS Entidad
			FROM Servicios_Principales sp

			JOIN Entidades e ON sp.ID_Entidad = e.ID_Entidad
		`);

		return response.status(200).json({Status: "Success", mainServices: mainServices});
	}
	catch (err) {
		return response.status(500).json({Error: err.message});
	}
});


module.exports = router;