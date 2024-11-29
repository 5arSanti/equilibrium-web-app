const express = require("express");
const cors = require("cors");

const cookieParser = require("cookie-parser");

const routerApi = require("./routes");
const { handleErrors } = require("./middlewares/handleErrors");

const app = express();
const port = process.env.PORT || 3080;

const whiteList = [
    // Local
	"http://localhost:5173",
	"http://localhost:5173",

    // DEV Y QA

	// PROD
	"https://equilibrium-eges.vercel.app",
	"https://equilibrium-eges-santiago-arias-projects.vercel.app",
	"https://equilibrium-eges-n4uaajkdh-santiago-arias-projects.vercel.app",
];

const options = {
	origin: function (origin, callback) {
		if (whiteList.indexOf(origin) !== -1 || !origin) {
		  	callback(null, true)
		} else {
		  	callback(new Error("Acceso denegado, CORS Error"));
		}
	},
	methods: ["POST", "GET", "DELETE", "PATCH", "OPTIONS"],
	credentials: true,
	allowedHeaders: ["Content-Type", "Authorization", "Access-Control-Allow-Credentials"]
}
app.use(cors(options));

app.options("*", cors(options));

app.use(express.json());
app.use(cookieParser());


app.get("/", (request, response) => {
	console.log("Hola mundo desde mi servidor");

	return response.send("Hola mundo desde mi servidor");
})

routerApi(app);

app.use(handleErrors);

app.listen(port, () => {
    console.log("Escuchando en el puerto: " + port);
})
