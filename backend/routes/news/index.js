const express = require("express");
const router = express.Router();

const { getQuery } = require("../../database/query");
const { verifyUser } = require("../../middlewares/verifyUser");
const { verifyAdmin } = require("../../middlewares/verifyAdmin");
const { validateObjectValues } = require("../../Utils/Validate/validateObjectValues");
const { compressImage } = require("../../Utils/Images/compressImage");


router.get("/", async (request, response) => {
	try {
		const query = `
			SELECT
				n.ID_Noticia,
				n.Titulo,
				n.SubTitulo,
				n.Fecha_Publicacion,
				n.Imagen,

				tn.Nombre AS Tipo_Noticia,

				cs.Nombre AS Categoria_Servicio

			FROM Noticias n

			JOIN Tipo_Noticia tn ON n.ID_Tipo_Noticia = tn.ID_Tipo_Noticia
			JOIN Categorias_Servicios cs ON n.ID_Categoria_Servicios = cs.ID_Categoria
		`;

		const news = await getQuery(query)

		const newsList = news.map((item) => ({
			...item,
			Imagen: item.Imagen ? {
				src: `data:image/png;base64,${item.Imagen.toString("base64")}`
			}
			:
			item.Imagen
		}))

		return response.json({news: newsList})
	}
	catch (err) {
		return response.json({Error: err.message})
	}
});


router.post("/", verifyUser, verifyAdmin, async (request, response) => {
	try {
		validateObjectValues(request.body, "No pueden haber campos vacios", ["Imagen", "Fuente"])

		const {
			Titulo,
			SubTitulo,
			Cuerpo_Noticia,
			Imagen,
			Fuente,
			ID_Tipo_Noticia,
			ID_Usuario,
			ID_Categoria_Servicios
		} = request.body;

		const compressedImage = await compressImage(Imagen);

		const query = `
			INSERT INTO Noticias (Titulo, SubTitulo, Cuerpo_Noticia, Imagen, Fuente, ID_Tipo_Noticia, ID_Usuario, ID_Categoria_Servicios)
			VALUES
			('${Titulo}','${SubTitulo}', '${Cuerpo_Noticia}', 0x${compressedImage}, '${Fuente}', ${ID_Tipo_Noticia}, ${ID_Usuario}, ${ID_Categoria_Servicios})
		`;

		await getQuery(query);

		return response.json({Status: "Success", message: "Noticia creada correctamente"});

	}
	catch (err) {
		return response.json({Error: err.message})
	}

})


router.get("/details/:ID_Noticia", async (request, response) => {
	try {
		const { ID_Noticia } = request.params;

		const query = `
			SELECT
				n.ID_Noticia,
				n.Titulo,
				n.SubTitulo,
				n.Cuerpo_Noticia,
				n.Imagen,
				n.Fuente,
				n.Fecha_Publicacion,

				tn.Nombre AS Tipo_Noticia,

				u.Nombre AS Nombre_Autor,
				u.Apellidos AS Apellidos_Autor,
				u.Correo AS Correo_Autor,
				u.Imagen AS Imagen_Autor,

				cs.Nombre AS Categoria_Servicio

			FROM Noticias n

			JOIN Tipo_Noticia tn ON n.ID_Tipo_Noticia = tn.ID_Tipo_Noticia
			JOIN Usuarios u ON n.ID_Usuario = u.Cedula_Usuario
			JOIN Categorias_Servicios cs ON n.ID_Categoria_Servicios = cs.ID_Categoria

			WHERE n.ID_Noticia = ${ID_Noticia}
		`;

		const newsDetail = await getQuery(query)

		return response.json({newsDetail: {
			...newsDetail[0],
			Imagen: newsDetail[0].Imagen ? {
				src: `data:image/png;base64,${newsDetail[0].Imagen.toString("base64")}`,
				Imagen: newsDetail[0].Imagen.toString("base64"),
				mimeType: 'image/png'
			}
			:
			newsDetail[0].Imagen,

			Imagen_Autor: newsDetail[0].Imagen_Autor ? {
				src: `data:image/png;base64,${newsDetail[0].Imagen_Autor.toString("base64")}`,
				Imagen: newsDetail[0].Imagen_Autor.toString("base64"),
				mimeType: 'image/png'
			}
			:
			newsDetail[0].Imagen_Autor
		}})

	}
	catch (err) {
		return response.json({Error: err.message})
	}
});


router.get("/types", verifyUser, verifyAdmin, async (request, response) => {
	try {
		const query = `
			SELECT
				ID_Tipo_Noticia AS id,
				Nombre

			FROM Tipo_Noticia
		`;

		const newsTypes = await getQuery(query)

		return response.json({newsTypes: newsTypes})
	}
	catch (err) {
		return response.json({Error: err.message})
	}
});

module.exports = router;