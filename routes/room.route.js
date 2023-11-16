const { Router } = require("express");
const { AllRoomsController } = require("../controllers/rooms.controller");
const RoomsRouter = Router();

RoomsRouter.get("/rooms", AllRoomsController);
RoomsRouter.post("/reserve", AddReserveController)

module.exports = RoomsRouter;
