const { Router } = require("express");
const UserRouter = require("./user.route");
const RoomsRouter = require("./room.route");
const { PageLoginController } = require("../controllers/pages.controller");
const router = Router();

router.use("/hotel", RoomsRouter);
router.use("/user", UserRouter);
router.get("/", PageLoginController);

module.exports = router;
