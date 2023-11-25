const User = require("../models/User.js");
const bcrypt = require("bcryptjs");

const FindUserController = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ where: { email } });

  if (user && bcrypt.compareSync(password, user.dataValues.password)) {
    req.session.userId = user.dataValues.id;
    return res.redirect("/");
  }
};

const AddUserController = async (req, res) => {
  const { username, email, password } = req.body;

  const userCreated = await User.create({ username, email, password });

  req.session.userId = userCreated.dataValues.id;

  res.redirect("/");
};

const SingOutUserController = async (req, res) => {
  req.session.destroy(function (err) {
    if (err) {
      console.log(err);
    }
  });

  return res.redirect("/");
};

module.exports = {
  FindUserController,
  AddUserController,
  SingOutUserController,
};
