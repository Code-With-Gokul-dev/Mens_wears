import express from "express";
import { loginController } from "../controllers/login.controller.js";
import { loginSchema } from "../schema/login.schema.js";
import validateBody from "../middlewares/zod.validator.js";

const login = express.Router();

login.post("/", validateBody(loginSchema), loginController);

export default login;
