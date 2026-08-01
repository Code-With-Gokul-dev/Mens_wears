import User from "../models/user.model.js";
import bcrypt, { hashSync } from "bcrypt"
import jwt from "jsonwebtoken"


export const loginController = async (req, res) => {

    const { email, password } = req.body;

    // Verify the input 
    if (!email || !password) {
        return res.status(401).json({
            message: "email and password are required"
        });

    }


    //  find email address in db
    try {
        const normalizedEmail = email.toLowerCase().trim();
        const user = await User.findOne({ email: normalizedEmail }).lean();

        // Verfiy the email existing in db
        if (!user) {
            return res.status(404).json({
                message: "User not found"
            })
        }

        // check password 
        const isMatch = await bcrypt.compare(password, user.password)

        // Password doesnt match return the invalid crendential acknownlegement
        if (!isMatch) {
            return res.status(401).json({
                message: "Invalid credentials"
            });
        }

        // Check the secret is exist ??
        const secretKey = process.env.JWT_SECRET_KEY;
        if (!secretKey) {
            return res.status(500).json({
                message: "Internal configuration error"
            })
        }

        //  Create the Jwt Token secure api access with role based
        const token = jwt.sign(
            {
                id: user._id, role: user.role
            },
            secretKey,
            {
                expiresIn: "1h"
            }
        )

        // Send jwt token through cookies 

        res.cookie("auth_token", token, {
            httpOnly: true,
            sameSite: process.env.NODE_ENV ? "lax" : "none",
            secure: process.env.NODE_ENV === "production",
            maxAge: 3600000

        })

        //  If user crendential is correct send acknownlegement
        return res.status(200).json({
            message: "login successfull",

        })

    } catch (e) {
        return res.status(500).json({
            message: "Internal Server Error"

        })
    }






}