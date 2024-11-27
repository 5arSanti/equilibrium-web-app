const express = require("express");
const { getQuery } = require("../../database/query");
const { compressImage } = require("../../Utils/Images/compressImage");
const { validateObjectValues } = require("../../Utils/Validate/validateObjectValues");
const { verifyUser } = require("../../middlewares/verifyUser");
const { verifyAdmin } = require("../../middlewares/verifyAdmin");

const router = express.Router();

router.get("/", async (request, response) => {
	try {
		const mainServices = await getQuery(`
			SELECT
				sp.ID_Servicio_Principal AS id,
				UPPER(sp.Nombre) AS Nombre,
				sp.Descripcion,
				sp.Icono,
				sp.Imagen,
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

router.post("/", verifyUser, verifyAdmin, async (request, response) => {
	try {
		validateObjectValues(request.body, "No pueden haber campos vacios", ["Imagen"])

		const {
			Nombre,
			Descripcion,
			Icono,
			Imagen,
			ID_Entidad,
		} = request.body;

		const compressedImage = await compressImage(Imagen);

		const query = `
			INSERT INTO Servicios_Principales (Nombre, Descripcion, Icono, Imagen, ID_Entidad)
			VALUES
			('${Nombre}','${Descripcion}', '${Icono}', 0x${compressedImage}, ${ID_Entidad})
		`;

		await getQuery(query);

		return response.json({Status: "Success", message: "Servicio creado correctamente"});

	}
	catch (err) {
		return response.json({Error: err.message})
	}

})

router.get("/:ID_Service", async (request, response) => {

	const { ID_Service } = request.params;

	try {
		const mainService = await getQuery(`
			SELECT
				sp.ID_Servicio_Principal AS id,
				UPPER(sp.Nombre) AS Nombre,
				sp.Descripcion,
				sp.Icono,
				sp.Imagen,
				e.Nombre AS Entidad

			FROM Servicios_Principales sp
			JOIN Entidades e ON sp.ID_Entidad = e.ID_Entidad

			WHERE sp.ID_Servicio_Principal = ${ID_Service}
		`);


		return response.status(200).json({
			mainService: {
				...mainService[0],
				Imagen: mainService[0].Imagen ? `data:image/png;base64,${mainService[0].Imagen.toString("base64")}` : null,
			}
		});
	}
	catch (err) {
		return response.status(500).json({Error: err.message});
	}
});

router.get("/:ID_Service/associates", async (request, response) => {
	try {
		const { ID_Service } = request.params;

		const associateServices = await getQuery(`
			SELECT
				sa.ID_Servicio_Asociado AS id,
				UPPER(sa.Nombre) AS Nombre,
				sa.Descripcion,
				sa.Imagen,
				sa.Precio,
				cs.Nombre AS Categoria

			FROM Detalles_Servicios_Principales_Servicios_Asociados dspsa

			JOIN Servicios_Asociados sa ON dspsa.ID_Servicio_Asociado = sa.ID_Servicio_Asociado
			JOIN Categorias_Servicios cs ON sa.ID_Categoria = cs.ID_Categoria

			WHERE dspsa.ID_Servicio_Principal = ${ID_Service}
		`);

		const newsList = associateServices.map((item) => ({
			...item,
			Imagen: item.Imagen ? `data:image/png;base64,${item.Imagen.toString("base64")}` : null
		}))


		return response.status(200).json({
			associateServices: newsList,
		});
	}
	catch (err) {
		return response.status(500).json({Error: err.message});
	}
});


module.exports = router;