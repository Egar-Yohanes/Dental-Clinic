import { tokenVerifier } from "../helpers/jwt";

const authentication = (req, res, next) => {
    console.log(`Authentication`);
    const access_token = req.headers.access_token;

    if (access_token) {
        console.log("Token ada");
        try {
            const verifyToken = tokenVerifier(access_token);
            req.userData = verifyToken;
        } catch (err) {
            res.status(403).json({
                message: "Access token not authenticated",
            });
        }
        next();
    } else {
        res.status(404).json({
            message: "Access token not found.",
        });
    }
};

export default authentication;