import express from "express";
import { memoryUpload } from "../config/upload.config.js";
import { uploadConntroller } from "../controllers/upload.controller.js";

export const uploadRoute = express.Router();

uploadRoute.post("/", memoryUpload.single('file'), uploadConntroller);
