const express = require("express");
const cors = require("cors");

const cookieParser = require("cookie-parser");

const routerApi = require("./routes");

const app = express();
const port = 3080;

const whiteList = [
    // Local
	"http://localhost:5173",

    // DEV Y QA

	// PROD
	"https://equilibrium-eges.vercel.app",
	"https://equilibrium-eges.vercel.app/",
	"https://equilibrium-eges-santiago-arias-projects.vercel.app",
	"https://equilibrium-eges-santiago-arias-projects.vercel.app/",
];

const options = {
	origin: function (origin, callback) {
		if (whiteList.indexOf(origin) !== -1 || !origin) {
		  	callback(null, true)
		} else {
		  	callback(new Error("Acceso denegado, CORS Error"));
		}
	},
	methods: ["POST", "GET", "DELETE", "PATCH"],
	credentials: true,
}
app.use(cors(options));

app.use(express.json());
app.use(cookieParser());


routerApi(app);

app.listen(port, () => {
    console.log("Escuchando en el puerto: " + port);
})