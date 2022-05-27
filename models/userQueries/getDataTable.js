const getConnection = require("../getConnection");

//const { generateError } = require('../../helpers');

const getDataTable = async () => {
  let connection;

  try {
    connection = await getConnection();

    const [data] = await connection.query(
      `SELECT * FROM programming_languages`
    );

    /* // Si no hay usuarios con ese id lanzamos un error.
    if (users.length < 1) {
      throw generateError("Datos no encontrados", 404);
    }
    */
    return data;
  } finally {
    if (connection) connection.release();
  }
};

module.exports = getDataTable;

/*
[
  //Primer array con objetos
  [{id:1,
    name:javascript,
    .....

  },
  {id:2,
    name:python,
    released_year:1991,
    .....

  
  },
  {

  },
  ],

  //Segundo array con objetos metadata
  [{ tiempo_ejecucion:5476,
    nombre_archivo: base_informacion,

  },
  {

  
  },
  {

  },
  ],

  //Tercer array con objetos metadata
  [{ tiempo_ejecucion:98766,
    nombre_archivo: base_informacion_actualizada,

  },
  {

  
  },
  {

  },
  ],

 
]

*/
