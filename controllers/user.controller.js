const User = require("../models/User.js");

const FindUserController = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ where: { email } });

  console.log(user);

  if (user && bcrypt.compareSync(password, user.password)) {
   return res.render("mapReserves")
  }
};

  const AddUserController = async (req, res) => {
    const { username, email, password } = req.body;

    const userCreated = User.create({ username, email, password });

    req.session.userId = userCreated.dataValues.id;

    const userFindid = userCreated.dataValues;

    res.render("mapReserves", )
  };

module.exports = { FindUserController, AddUserController };
