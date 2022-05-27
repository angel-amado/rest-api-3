const putDataTable = require("../models/userQueries/putDataTable");

const putData = async (req, res, next) => {
  try {
    const { message } = await putDataTable(req.body, req.params.id);

    res.send({
      status: "ok",
      message,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = putData;
