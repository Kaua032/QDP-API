const { DataTypes } = require("sequelize");

const db = require("../config/conn.js");

const Reserve =
  ("Reserve",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      require: true,
    },
    cpf: {
      type: DataTypes.INTEGER(14),
      unique: true,
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
