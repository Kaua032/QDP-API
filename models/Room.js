const { DataTypes } = require("sequelize");

const db = require("../config/conn.js");

const Room = db.define("Room", {
  number: {
    type: DataTypes.STRING,
    allowNull: false,
    require: true,
  },
  floor: {
    type: DataTypes.STRING,
    allowNull: false,
    require: true,
  },
  price: {
    type: DataTypes.DECIMAL,
    allowNull: false,
    require: true,
  },
  busy: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

module.exports = Room;
