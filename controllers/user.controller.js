const User = require("../models/User.js");

const FindUserController = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ where: { email } });

  console.log(user);

  if (user && bcrypt.compareSync(password, user.password)) {
    return res.send({ user });
  }
};

const AddUserController = async (req, res) => {
  const { username, email, password } = req.body;

  const userCreated = User.create({ username, email, password });

  return res.send({ userCreated });
};

module.exports = { FindUserController, AddUserController };
