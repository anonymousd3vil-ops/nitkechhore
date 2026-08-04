import express from "express";
import { executeCode } from "../controllers/compilerController.js";
import { isLoggedin } from "../middlewares/userAuthMiddleware.js";

const router = express.Router();

router.post("/execute", isLoggedin, executeCode);

export default router;