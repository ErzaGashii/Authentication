//npm i express mysql2 sequelize argon2 cors dotenv
//argon- per hash tek password

import express from "express";
import cors from "cors";
import session from "express-session";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.listen(process.env.APP_PORT, ()=> {
    console.log('Server up and running...');
});