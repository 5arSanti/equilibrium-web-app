const express = require("express");

const PropertiesReader = require('properties-reader');
const properties = PropertiesReader('./app.properties.ini');


const usersRouter = require("./users/index.js")

const authRouter = require("./auth")

const versionRouter = require("./version/index.js");

const servicesRouter = require("./services/index.js");

const associatesRouter = require("./associates/index.js");

const entidadesRouter = require("./entidades/index.js");


const routerApi = (app) => {
	const router = express.Router();
	app.use(`/${properties.get("app.api.structure")}/v1`, router);

	// Routes
	router.use("/users", usersRouter);
	router.use("/auth", authRouter);

	router.use("/version", versionRouter);

	router.use("/services", servicesRouter);

	router.use("/associates", associatesRouter);


	router.use("/entidades", entidadesRouter);
}

module.exports = routerApi;