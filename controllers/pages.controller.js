const Room = require("../models/Room.js");
const User = require("../models/User.js");
const Reserve = require("../models/Reserve.js");

const PageLoginController = async (req, res) => {
  if (req.session.userId) {
    const rooms = await Room.findAll();
    const id = req.session.userId;
    const user = await User.findOne({ where: { id } });
    const userFindid = user.dataValues;

    res.render("mapReserves", { rooms, userFindid });
  } else {
    res.render("login");
  }
};

const PageRegisterController = async (req, res) => {
  res.render("register");
};

const PageShowCheckoutsController = async (req, res) => {
  const reserves = await Reserve.findAll();

  res.render("checkOut", { reserves });
};

module.exports = {
  PageLoginController,
  PageRegisterController,
  PageShowCheckoutsController,
};
