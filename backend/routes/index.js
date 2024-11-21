const express = require("express");

const PropertiesReader = require('properties-reader');
const properties = PropertiesReader('./app.properties.ini');


const usersRouter = require("./users/index.js")

const authRouter = require("./auth")

const columnsRouter = require("./columns/index.js")

const versionRouter = require("./version/index.js");



const routerApi = (app) => {
	const router = express.Router();
	app.use(`/${properties.get("app.api.structure")}/v1`, router);

	// Routes
	router.use("/users", usersRouter);
	router.use("/auth", authRouter);



	router.use("/columns", columnsRouter);

	router.use("/version", versionRouter);

}

module.exports = routerApi;