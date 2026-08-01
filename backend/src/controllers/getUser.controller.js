import User from "../models/user.model.js";

const getUser = async (req, res) => {

    try {

        const user = req.user;

        if (!user) {
            return res.status(404).json({
                message: "user credential not found"
            })
        }
        const userData = await User.findOne(
            { _id: user.id }, "-password"
        )

        if (!userData) {
            return res.status(404).json({
                message: "User not found"
            })
        }

        res.status(200).json(userData)
    } catch (e) {
        res.status(500).json({
            message: "Failed to fetch user"

        })
    }
}


export default getUser;