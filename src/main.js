import app from "./app.js";
import { PORT_BACK_END } from "./config.js";
import { connectDB } from "./db.js";


connectDB()


app.listen(PORT_BACK_END, ()=> console.log(`server on port ${PORT_BACK_END}`))
