import { Router } from "express";
import {upload} from "../middlewares/multerMiddleware.js";

import { login, logout, register, getProfile } from "../controllers/userController.js";
import { isLoggedin } from "../middlewares/userAuthMiddleware.js";

const userRouter = Router();

userRouter.post('/register', upload.single('avatar'), register);
userRouter.post('/login', login);
userRouter.get('/logout', logout);
userRouter.get('/me', isLoggedin, getProfile);

export default userRouter;