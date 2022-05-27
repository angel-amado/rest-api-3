const getConnection = require("../getConnection");

const putDataTable = async (programmingLanguages, id) => {
  let connection;

  try {
    connection = await getConnection();

    const result = await connection.query(
      `UPDATE programming_languages 
        SET name="${programmingLanguages.name}", released_year=${programmingLanguages.released_year}, githut_rank=${programmingLanguages.githut_rank}
        WHERE id=${id}`
    );

    let message;
    if (result.affectedRows) {
      message = "Programming language updated successfully";
    }

    console.log(message);

    return { message };
  } finally {
    if (connection) connection.release();
  }
};

module.exports = putDataTable;
