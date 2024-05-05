import { Router } from "express";
import AuthController from "../controllers/auth.controller";

const user = Router();

user.use("/user", AuthController);

export default user;
