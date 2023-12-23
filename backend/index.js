//npm i express mysql2 sequelize argon2 cors dotenv
//argon- per hash tek password

import express from "express";
import cors from "cors";
import session from "express-session";
import dotenv from "dotenv";
dotenv.config();

app.use(session({
    secret: process.env.SESS_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: 'auto'
    }
}));

const app = express();
app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}));
app.use(express.json());
app.listen(process.env.APP_PORT, ()=> {
    console.log('Server up and running...');
});