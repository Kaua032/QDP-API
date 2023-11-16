const { Router } = require("express");
const UserRouter = require("./user.route");
const RoomsRouter = require("./room.route");
const router = Router();

router.use("/hotel", RoomsRouter);
router.use("/user", UserRouter);


module.exports = router;
