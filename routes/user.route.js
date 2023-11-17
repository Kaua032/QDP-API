const { Router } = require("express");
const {
  AddUserController,
  FindUserController,
} = require("../controllers/user.controller");
const UserRouter = Router();

UserRouter.post("/register", AddUserController);
UserRouter.get("login", FindUserController);

module.exports = UserRouter;
