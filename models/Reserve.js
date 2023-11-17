const { DataTypes } = require("sequelize");

const db = require("../config/conn.js");

const Reserve = db.define("Reserve", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    require: true,
  },
  cpf: {
    type: DataTypes.STRING(14),
    unique: false,
    allowNull: false,
    require: true,
  },
  numberPhone: {
    type: DataTypes.STRING,
    allowNull: false,
    require: true,
  },
  number: {
    type: DataTypes.INTEGER,
    allowNull: false,
    require: true,
  },
  floor: {
    type: DataTypes.INTEGER,
    allowNull: false,
    require: true,
  },
  checkin: {
    type: DataTypes.DATE,
    allowNull: false,
    require: true,
  },
  checkout: {
    type: DataTypes.DATE,
    allowNull: false,
    require: true,
  },
  totalPrice: {
    type: DataTypes.DECIMAL,
    allowNull: false,
    require: true,
  },
});

module.exports = Reserve;
