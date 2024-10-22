import express, {Request, Response} from "express";
import cors from 'cors'
import "dotenv/config"
import mongoose from "mongoose";
import myUserRoutes from './routes/MyUserRoute'

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string).then(()=> console.log('connected to DB')).catch(err => console.error('DB connection error:', err));

const app = express()

app.use(express.json())
app.use(cors())

//  /api/my/user
app.use('/api/my/user', myUserRoutes);

app.listen(3000, ()=>{
    console.log("server started on localhost:3000");
});
