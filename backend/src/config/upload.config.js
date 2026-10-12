import multer from "multer";
import { fileTypeFromBuffer } from "file-type";
import path from "path";
import fs from "fs/promises";
import crypto from "crypto";

// File upload Path 
const UPLOAD_DIR = path.resolve("./uploads");

// set file size
const MAX_SIZE = 5 * 1024 * 1024;

// set the file types
const ALLOWED_FILE_TYPES = ["image/jpeg", "image/png"];

export const memoryUpload = multer({
    storage: multer.memoryStorage(),
    limits: { fileSize: MAX_SIZE },
});

export const processAndSaveFile = async (fileBuffer, originalName) => {
    // Read actual bytes
    const detectedType = await fileTypeFromBuffer(fileBuffer);

    if (!detectedType || !ALLOWED_FILE_TYPES.includes(detectedType.mime)) {
        throw new Error('Security Alert: File content mismatch. Malicious file suspected.')
    };

    await fs.mkdir(UPLOAD_DIR, { recursive: true });

    const secureFileName = `${crypto.randomUUID()} ${path.extname(originalName).toLowerCase()}`;
    const secureFilePath = path.join(UPLOAD_DIR, secureFileName);

    await fs.writeFile(secureFilePath, fileBuffer);

    return {
        fileName: secureFileName,
        filePath: secureFilePath,
        mimeType: detectedType.mime
    };
};
