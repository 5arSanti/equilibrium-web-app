const express = require("express");
const { getQuery, valuesQuery } = require("../../database/query");

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

router.get("/:ID_Service", async (request, response) => {
	const { ID_Service } = request.params;

	try {
		const mainServices = await valuesQuery(`
			SELECT
				sp.ID_Servicio_Principal AS id,
				UPPER(sp.Nombre) AS Nombre_Servicio,
				sp.Descripcion,
				sp.Icono,
				sp.Enlace,
				e.Nombre AS Entidad
			FROM Servicios_Principales sp

			JOIN Entidades e ON sp.ID_Entidad = e.ID_Entidad

			WHERE sp.ID_Servicio_Principal = @ID_Service
		`, [ID_Service]);

		const asociateServices = await valuesQuery(`
			SELECT
				sa.ID_Servicio_Asociado AS id,
				UPPER(sa.Nombre) AS Nombre_Servicio,
				sa.Descripcion,
				sa.Imagen,
				sa.Precio,
				cs.Nombre AS Categoria

			FROM Detalles_Servicios_Principales_Serivicos_Asociados dspsa

			JOIN Servicios_Asociados sa ON dspsa.ID_Servicio_Asociado = sa.ID_Servicio_Asociado
			JOIN Categorias_Servicios cs ON sa.ID_Categoria = sc.ID_Categoria

			WHERE dspsa.ID_Servicio_Principal = @ID_Service

		`, [ID_Service])


		return response.status(200).json({Status: "Success", mainServices: mainServices});
	}
	catch (err) {
		return response.status(500).json({Error: err.message});
	}
});


module.exports = router;