import express from "express";
import { registerUser } from "../controllers/register.controller.js";


const register = express.Router();

register.post("/", registerUser);

export default register;