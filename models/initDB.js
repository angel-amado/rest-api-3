const getConnection = require("./getConnection");

async function main() {
  // Variable que almacenará una conexión libre de la base de datos.
  let connection;

  try {
    // Obtenemos una conexión libre.
    connection = await getConnection();

    console.log("Borrando tabla pre-existente...");

    await connection.query(`DROP TABLE
     IF EXISTS programming_languages`);

    console.log("Creando nueva tabla...");

    await connection.query(`
            CREATE TABLE programming_languages (
                id INT PRIMARY KEY AUTO_INCREMENT,
                name VARCHAR(200) UNIQUE NOT NULL,
                released_year INT NOT NULL,
                githut_rank INT NULL,
                pypl_rank INT NULL,
                tiobe_rank INT NULL,
                createdAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
                modifiedAt DATETIME ON UPDATE CURRENT_TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
            )
        `);

    console.log("¡Tabla creada!");
  } catch (err) {
    console.error(err);
  } finally {
    // Si existe una conexión la liberamos.
    if (connection) connection.release();

    // Cerramos el proceso actual.
    process.exit();
  }
}

// Llamamos a la función principal.
main();
