import express from "express";
import getUser from "../controllers/getUser.controller.js";
import auth from "../middlewares/auth.middleware.js";

export const me = express.Router();

me.get("/", auth, getUser);