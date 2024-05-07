import express from "express";
import {PORT} from "./config.js"
import {DB} from "./models/db.js"
import usersRouter from "./router/users.routers.js"
import morgan from "morgan";

DB()
const app = express();

app.use(morgan(`dev`))

// Middlewares
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//router user
app.use(usersRouter)    

app.listen(3000)
console.log(`Server run ${PORT}`);
