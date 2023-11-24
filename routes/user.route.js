const { Router } = require("express");
const {
  AddUserController,
  FindUserController,
  SingOutUserController,
} = require("../controllers/user.controller");
const UserRouter = Router();

UserRouter.post("/login", FindUserController);
UserRouter.post("/register", AddUserController);
UserRouter.post("/singout", SingOutUserController);

module.exports = UserRouter;
