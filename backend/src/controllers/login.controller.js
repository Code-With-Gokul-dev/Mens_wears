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
            return res.status(401).json({
                message: "Invalid credentials"
            })
        }

        // check password 
        const isMatch = await bcrypt.compareSync(password, user.passwordHash)

        // Password doesnt match return the invalid crendential acknownlegement
        if (!isMatch) {
            return res.status(401).json({
                message: "Invalid crendentials"
            });
        }

        //  Create the Jwt Token secure api access with role based
        const secretKey = process.env.JWT_SECRET_KEY;
        const token = jwt.sign(
            {
                id: user._id, role: user.role
            },
            secretKey,
            {
                expiresIn: "1h"
            }
        )

        //  If user crendential is correct send acknownlegement
        return res.status(200).json({
            message: "login successfull",
            token: token
        })

    } catch (e) {
        console.log(e);
        return res.status(500).json({
            message: "Login error"

        })
    }






}