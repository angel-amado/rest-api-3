require("dotenv").config();

const mysql = require("mysql2/promise");

const { MYSQL_HOST, MYSQL_USER, MYSQL_PASSWORD, MYSQL_DB } = process.env;

// Variable que almacenará un pool de conexiones.
let pool;

const getConnection = async () => {
  try {
    // Si no hay un grupo de conexiones lo creamos.
    if (!pool) {
      pool = mysql.createPool({
        connectionLimit: 10,
        host: MYSQL_HOST,
        user: MYSQL_USER,
        password: MYSQL_PASSWORD,
        database: MYSQL_DB,
        timezone: "Z",
        //listPerPage: 10,
      });
    }

    // Retornamos una conexión libre.
    return await pool.getConnection();
  } catch (error) {
    throw new Error(
      "Error al conectar con MySQL o base de datos no encontrada"
    );
  }
};

module.exports = getConnection;
