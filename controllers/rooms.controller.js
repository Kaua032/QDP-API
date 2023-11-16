const Room = require("../models/Room.js");

const AllRoomsController = async (req, res) => {
  const rooms = await Room.findAll();
  console.log(rooms);

  return res.send({ rooms });
};

module.exports = { AllRoomsController };
