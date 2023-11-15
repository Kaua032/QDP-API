const { Router } = require("express");
const router = Router();

router.use("/user" UserRouter);
router.use("/hotel", RoomsRouter);
router.use("/hotel", ReservesRouter);

module.exports = router;
