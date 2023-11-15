const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  "db_quinta_do_ypua",
  "root",
  "88124927kaua",
  {
    host: "localhost",
    dialect: "mysql",
  }
);


module.exports = sequelize;