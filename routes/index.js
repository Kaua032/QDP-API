const { Router } = require("express");
const UserRouter = require("./user.route");
const RoomsRouter = require("./room.route");
const {
  PageLoginController,
  PageRegisterController,
  PageShowCheckoutsController,
} = require("../controllers/pages.controller");
const router = Router();

router.use("/hotel", RoomsRouter);
router.use("/user", UserRouter);
router.get("/", PageLoginController);
router.get("/register", PageRegisterController);
router.get("/checkouts", PageShowCheckoutsController);

module.exports = router;
