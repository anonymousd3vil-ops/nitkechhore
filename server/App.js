/* eslint-disable no-undef */

//libraries
import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors'


//comonents
import userRouter from './routers/userRouters.js';
import errorMiddleware from './middlewares/errorMiddleware.js';
import contactRouter from './routers/contactusRouter.js';

dotenv.config()

const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true })); //it decodes to get query params
app.use(cookieParser())
app.use(cors({
    origin: [process.env.FRONTEND_URL],
    credentials: true
}))

app.use('/api/user', userRouter);
app.use('/api/contact', contactRouter);

app.use('/ping', (req, res) => {
    res.send('Ping Pong Server is Running!!');
});

app.all('/{*splat}', (req, res) => {
    res.status(404).send("OOPS!!, Error 404, Page Not Found!!");
});

app.use(errorMiddleware);

export default app;