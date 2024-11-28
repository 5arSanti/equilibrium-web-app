const express = require("express");

const PropertiesReader = require('properties-reader');
const properties = PropertiesReader('./app.properties.ini');


const usersRouter = require("./users/index.js")

const authRouter = require("./auth")

const versionRouter = require("./version/index.js");

const servicesRouter = require("./services/index.js");

const associatesRouter = require("./associates/index.js");

const entidadesRouter = require("./entidades/index.js");

const genresRouter = require("./genres/index.js");

const schedulesRouter = require("./schedules/index.js");

const appointmentRouter = require("./appointment/index.js");

const newsRouter = require("./news/index.js");

const serviceCategoryRouter = require("./service-category/index.js");

const routerApi = (app) => {
	const router = express.Router();
	app.use(`/${process.env.API_STRUCTURE}/v1`, router);

	// Routes
	router.use("/users", usersRouter);
	router.use("/auth", authRouter);

	router.use("/version", versionRouter);

	router.use("/services", servicesRouter);

	router.use("/associates", associatesRouter);

	router.use("/entidades", entidadesRouter);

	router.use("/genres", genresRouter);

	router.use("/schedules", schedulesRouter)

	router.use("/appointment", appointmentRouter)

	router.use("/news", newsRouter)

	router.use("/service-category", serviceCategoryRouter)
}

module.exports = routerApi;