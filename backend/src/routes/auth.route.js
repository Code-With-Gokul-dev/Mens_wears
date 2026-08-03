import express from "express";
import { loginController, logOutController } from "../controllers/login.controller.js";
import { loginSchema } from "../schema/login.schema.js";
import validateBody from "../middlewares/zod.validator.js";
import getUser from "../controllers/getUser.controller.js";
import auth from "../middlewares/auth.middleware.js";

const authRoutes = express.Router();

authRoutes.post("/login", validateBody(loginSchema), loginController);
authRoutes.get("/me", auth, getUser);
authRoutes.post("/logout", logOutController)


export default authRoutes;