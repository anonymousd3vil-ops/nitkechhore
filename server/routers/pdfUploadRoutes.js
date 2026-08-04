import { Router } from "express";
import { uploadPdf } from "../middlewares/multerMiddleware.js";
import { getSem1Notes, uploadNote } from "../controllers/pdfUploadController.js";
import { authorizedRole, isLoggedin } from "../middlewares/userAuthMiddleware.js";

const notesUploadRougter = Router();

notesUploadRougter.post("/upload", isLoggedin, authorizedRole('ADMIN'), uploadPdf.single('pdf'), uploadNote);

notesUploadRougter.get("/sem1", isLoggedin, getSem1Notes);

export default notesUploadRougter;