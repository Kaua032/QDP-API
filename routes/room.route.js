const { Router } = require("express");
const { AllRoomsController } = require("../controllers/rooms.controller");
const RoomsRouter = Router();

RoomsRouter.get("/rooms", AllRoomsController);

module.exports = RoomsRouter;
