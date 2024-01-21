import cookieParser from "cookie-parser";
import express from "express";
import cors from 'cors'
import morgan from "morgan";
import { URI_FRONT_END } from "./config.js";
import authRoutes from './routes/auth.routes.js'
import courseRoutes from './routes/course.routes.js'
import tasksRoutes from './routes/tasks.routes.js'


const app = express()

app.use(cors(
    {
    origin:  [`${URI_FRONT_END}`],
    credentials: true
}
))
app.use(cookieParser())
app.use(express.json())
app.use(morgan('dev'))


app.use('/api', authRoutes)
app.use('/api', courseRoutes)
app.use('/api', tasksRoutes)


export default app