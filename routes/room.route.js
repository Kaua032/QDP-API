const { Router } = require("express");
const {
  AllRoomsController,
  AddReserveController,
  AddRoomController,
} = require("../controllers/rooms.controller");
const RoomsRouter = Router();

RoomsRouter.get("/rooms", AllRoomsController);
RoomsRouter.post("/rooms", AddRoomController);
RoomsRouter.post("/reserve/:id", AddReserveController);

module.exports = RoomsRouter;
