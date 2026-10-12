import { processAndSaveFile } from "../config/upload.config.js";

export const uploadConntroller = async (req, res, next) => {
    try {

        if (!req.file) {
            return res.status(400).json({
                error: 'No file provided.'
            });

        }
        const savedFile = await processAndSaveFile(req.file.buffer, req.file.originalname);

        return res.status(201).json({
            message: 'File strictly verified and saved securely. ',
            file: savedFile.fileName
        });

    } catch (e) {

        return res.status(400).json({
            error: e.message
        });
    }
}