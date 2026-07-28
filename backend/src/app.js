import express from "express"
import login from "./routes/login.route.js";
import base from "./routes/base.route.js";
import cors from "cors"

// Initialize the express server
const app = express();
app.use(express.json());

const allowedOrigins = (process.env.FRONTEND_URL || "http://localhost:3000")
    .split(",")
    .map((o) => o.trim());
app.use(cors({
    origin: (origin, callback) => {

        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true)
        } else {
            callback(new Error(`CORS blocked for origin: ${origin}`))
        }
    },
    credentials: true,
}))


app.use("/login", login)
app.use("/", base)

export default app;