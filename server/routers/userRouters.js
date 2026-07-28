import { Router } from "express";
import upload from "../middlewares/multerMiddleware.js";

import { register } from "../controllers/userController.js";

const userRouter = Router();

userRouter.post('/register', upload.single('avatar'), register);

export default userRouter;