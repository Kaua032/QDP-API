const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  "db_quinta_do_ypua",
  "aluno_medio",
  "@lunoSenai23.",
  {
    host: "localhost",
    dialect: "mysql",
  }
);


module.exports = sequelize;