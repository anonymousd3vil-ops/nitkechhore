import { Router } from "express";
import { uploadPdf } from "../middlewares/multerMiddleware.js";
import { uploadNote } from "../controllers/pdfUploadController.js";

const notesUploadRougter = Router();

notesUploadRougter.post("/upload", uploadPdf.single('pdf'), uploadNote);

export default notesUploadRougter;