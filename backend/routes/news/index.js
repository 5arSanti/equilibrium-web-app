const express = require("express");
const router = express.Router();

const { getQuery } = require("../../database/query");


router.get("/", async (request, response) => {
	try {
		const query = `
			SELECT
				n.ID_Noticia,
				n.Titulo,
				n.SubTitulo,
				n.Imagen,
				n.Fecha_Publicacion,

				tn.Nombre AS Tipo_Noticia

			FROM Noticias n

			JOIN Tipo_Noticia tn ON n.ID_Tipo_Noticia = tn.ID_Tipo_Noticia
		`;

		const news = await getQuery(query)

		return response.json({news: news})
	}
	catch (err) {
		return response.json({Error: err.message})
	}
});

router.get("/details", async (request, response) => {
	try {
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

				cs.Nombre AS Categoria_Servicio,

			FROM Noticias n

			JOIN Tipo_Noticia tn ON n.ID_Tipo_Noticia = tn.ID_Tipo_Noticia
			JOIN Usuarios u ON n.ID_Usuario = u.ID_Usuario
			JOIN Categorias_Servicios cs ON n.ID_Categoria_Servicio = cs.ID_Categoria_Servicio

		`;

		const newsDetails = await getQuery(query)

		return response.json({news: newsDetails})
	}
	catch (err) {
		return response.json({Error: err.message})
	}
});


router.get("/types", async (request, response) => {
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