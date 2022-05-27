const getDataTable = require("../models/userQueries/getDataTable");

const getData = async (req, res, next) => {
  try {
    const data = await getDataTable();

    res.send({
      status: "ok",
      list: {
        data,
      },
    });
  } catch (err) {
    next(err);
  }
};

module.exports = getData;
