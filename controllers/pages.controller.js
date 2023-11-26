const Room = require("../models/Room.js");
const User = require("../models/User.js");
const Reserve = require("../models/Reserve.js");
const { Op } = require("sequelize");

const PageLoginController = async (req, res) => {
  if (req.session.userId) {
    const id = req.session.userId;
    const user = await User.findOne({ where: { id } });
    const userFindid = user.dataValues;

    const reserve = await Reserve.findAll({
      where: {
        checkout: {
          [Op.lt]: new Date(),
        },
      },
    });

    for (let i = 0; i < reserve.length; i++) {
      const roomNumberReserve = reserve[i].dataValues.number;
      await Room.update({ busy: 0 }, { where: { number: roomNumberReserve } });
    }

    const rooms = await Room.findAll();

    res.render("mapReserves", { rooms, userFindid });
  } else {
    res.render("login");
  }
};

const PageRegisterController = async (req, res) => {
  res.render("register");
};

const PageShowCheckoutsController = async (req, res) => {
  if (req.session.userId) {
    const reserves = await Reserve.findAll();
    const id = req.session.userId;
    const user = await User.findOne({ where: { id } });
    const userFindid = user.dataValues;

    res.render("checkOut", { reserves, userFindid });
  } else {
    res.redirect("/");
  }
};

module.exports = {
  PageLoginController,
  PageRegisterController,
  PageShowCheckoutsController,
};
