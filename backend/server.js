import express from 'express';
import chalk from 'chalk'
import connectDatabase from './config/db.js';
import { registerUser } from './controller/userController.js';
import userRouter from './routes/user.js';
import postRouter from './routes/post.js';
import cookieParser from 'cookie-parser';

const app=express();

app.use(express.json());
app.use(cookieParser());

app.use('/api/user',userRouter);
app.use('/api/post',postRouter);
const PORT=9000;


connectDatabase();


app.listen(PORT,()=>{
    console.log(`listening Port on ${chalk.green.bold(PORT)}`)
})