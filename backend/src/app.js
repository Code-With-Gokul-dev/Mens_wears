import express from "express"
import base from "./routes/base.route.js";
import cors from "cors"
import cookieParser from "cookie-parser";
import register from "./routes/register.route.js";
import authRoutes from "./routes/auth.route.js";

// Initialize the express server
const app = express();
app.use(cookieParser());
app.use(express.json());


// Config the cors origin
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


app.use("/", authRoutes);
app.use("/", base);
app.use("/register", register)

export default app;