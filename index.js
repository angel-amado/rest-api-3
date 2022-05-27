require("dotenv").config();

const { PORT } = process.env;

const morgan = require("morgan");

const express = require("express");

const app = express();

// Logger morgan.
app.use(morgan("dev"));

// Deserializamos el body.
app.use(express.json());

//app.use(express.urlencoded({ extended: true }));

/**
 * ########################
 * ## Endpoints Usuarios ##
 * ########################
 */

const getData = require("./controllers/getData");
const { application } = require("express");

app.get("/", (req, res) => {
  res.send({ message: "Everything is OK!" });
});

// Información almacenada en la base de datos.
app.get("/informacion", getData);

// Actualizar información almacenada en la base de datos.
const putData = require("./controllers/putData");
app.put("/:id", putData);

/**
 * ######################
 * ## Middleware Error ##
 * ######################
 */
app.use((err, req, res, next) => {
  console.error(err);

  res.status(err.statusCode || 500).send({
    status: "error",
    message: err.message,
  });
});

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
