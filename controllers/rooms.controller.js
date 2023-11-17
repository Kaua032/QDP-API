const Room = require("../models/Room.js");
const Reserve = require("../models/Reserve.js");

const AllRoomsController = async (req, res) => {
  const rooms = await Room.findAll();
  console.log(rooms);

  return res.send({ rooms });
};

const AddRoomController = async (req, res) => {
  const { number, floor, price } = req.body;

  const createdRoom = await Room.create({ number, floor, price });

  return res.send({ createdRoom });
};

const AddReserveController = async (req, res) => {
  const { id } = req.params;
  const {
    name,
    cpf,
    numberPhone,
    number,
    floor,
    checkin,
    checkout,
    totalPrice,
  } = req.body;

  const createdReserve = await Reserve.create({
    name,
    cpf,
    numberPhone,
    number,
    floor,
    checkin,
    checkout,
    totalPrice,
  });
  const room = await Room.update({ busy: 1 }, { where: { id } });

  return res.send({ room });
};

module.exports = {
  AllRoomsController,
  AddReserveController,
  AddRoomController,
};
