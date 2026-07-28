//libraries
import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';


//comonents
import userRouter from './routers/userRouters.js';

dotenv.config()

const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true })); //it decodes to get query params

app.use('/api/user', userRouter);

app.use('/ping', (req, res) => {
    res.send('Ping Pong Server is Running!!');
});

app.all('/{*splat}', (req, res) => {
    res.status(404).send("OOPS!!, Error 404, Page Not Found!!");
});

export default app;