import jwt from "jsonwebtoken";


const auth = (req, res, next) => {
    // Get the token in header
    const authHeader = req.headers.Authorization || req.headers.authorization;
    const bearerToken = authHeader?.startsWith("Bearer ") ? authHeader.split(" ")[1] : null;

    // Access the token in cookies
    const cookieToken = req.cookies?.auth_token;

    const token = bearerToken || cookieToken;

    // validate the token is exist
    if (!token) {

        return res.status(401).json({
            message: "Access denied, No token Provided."
        })
    }

    try {

        const verfiyToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
        req.user = verfiyToken;

        next();
    } catch (e) {

        return res.status(403).json({
            message: "Invalid or Expired Token."
        })
    }


}


export default auth;