import User from "../models/user.model.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export const registerUser = async (req, res) => {
    // 1. Safe parsing for double-serialized frontend strings
    let userData = req.body;
    if (typeof userData === 'string') {
        try {
            userData = JSON.parse(userData);
        } catch (e) {
            return res.status(400).json({ message: "Malformed JSON payload from client." });
        }
    }

    const { email, password } = userData;

    // 2. Validate that required data actually exists
    if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required." });
    }

    try {
        const existUser = await User.findOne({ email });
        if (existUser) {
            return res.status(400).json({ message: "User already exists" });
        }
        // Hashing the password 
        const passwordHash = bcrypt.hashSync(password, 10);
        const sanitizeData = { ...userData, password: passwordHash };
        console.log(sanitizeData);

        const addUser = await User.create(sanitizeData);
        console.log(addUser);

        if (addUser) {
            const secretKey = process.env.JWT_SECRET_KEY;
            if (!secretKey) {
                res.send("Internal configuration error")
            }
            const token = jwt.sign({
                id: addUser._id,
                role: addUser.role
            }, secretKey,
                {
                    expiresIn: "1h"
                });

            // auth token send to cookie via server
            res.cookie("auth_token", token, {
                httpOnly: true,
                sameSite: process.env.NODE_ENV ? "lax" : "none",
                secure: process.env.NODE_ENV === "production",
                maxAge: 3600000
            })

            return res.status(201).json({ message: "User registered successfully" });
        }

    } catch (e) {
        console.error("Registration database error:", e);
        return res.status(500).json({ message: "Internal server error" });
    }
}
