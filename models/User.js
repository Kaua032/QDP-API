const { DataTypes } = require("sequelize");
const bcrypt = require('bcryptjs')

const db = require("../config/conn.js");

const User = db.define("User", {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    require: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    require: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    require: true,
  },
});

User.addHook("beforeCreate", async (user) => {
  const salt = await bcrypt.genSalt();
  user.password = await bcrypt.hash(user.password, salt);
});

module.exports = User;
