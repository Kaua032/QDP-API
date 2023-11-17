const { Router } = require("express");
const {
  AllRoomsController,
  AddReserveController,
  AddRoomController,
  AllReservesController,
} = require("../controllers/rooms.controller");
const RoomsRouter = Router();

RoomsRouter.get("/rooms", AllRoomsController);
RoomsRouter.post("/rooms", AddRoomController);

RoomsRouter.get("/reserves", AllReservesController);
RoomsRouter.post("/reserve/:id", AddReserveController);

module.exports = RoomsRouter;
