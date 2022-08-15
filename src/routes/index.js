import { Router } from "express";
import userController from "../controllers/userController";
import Validator from "../middlewares/validator";
import Datachecker from "../middlewares/datachecker";
import verifyAccess from "../middlewares/verifyaccess";
import verifyToken from "../middlewares/verifytoken";
const route = Router();

route.post(
  "/user/create",
  Validator.newAccountRules(),
  Validator.validateInput,
  Datachecker.validateEmailDuplication,
  userController.signUpUser
);
route.get("/user/getall", userController.getUsers);
route.post("/user/login", userController.loginuserController);
route.patch("/user/update/id",userController.updateUsers);
export default route;
