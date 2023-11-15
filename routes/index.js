const { Router } = require("express");
const UserRouter = require("./user.route");
const RoomsRouter = require("./room.route");
const ReservesRouter = require("./reserve");
const router = Router();

router.use("/user", UserRouter);
router.use("/hotel", RoomsRouter);
router.use("/hotel", ReservesRouter);

module.exports = router;
