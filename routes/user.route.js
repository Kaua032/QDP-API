const { Router } = require("express");
const {
  AddUserController,
  FindUserController,
} = require("../controllers/user.controller");
const UserRouter = Router();

UserRouter.get("/login", FindUserController);
UserRouter.post("/register", AddUserController);

module.exports = UserRouter;
