import { Router } from "express";
import upload from "../middlewares/multerMiddleware.js";

import { login, logout, register } from "../controllers/userController.js";

const userRouter = Router();

userRouter.post('/register', upload.single('avatar'), register);
userRouter.post('/login', login);
userRouter.get('/logout', logout);

export default userRouter;