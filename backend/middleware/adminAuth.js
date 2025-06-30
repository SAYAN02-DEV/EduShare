const jwt = require("jsonwebtoken");
const JWT_SECRET = "thisismyproject";

function adminAuth(req, res, next) {
    try {
        const token = req.headers.token;
        const decoded = jwt.verify(token, JWT_SECRET);
        req.email = decoded.email;
        next();
    } catch (err) {
        return res.status(401).json({ message: "Unauthorized admin" });
    }
}

module.exports = adminAuth;
