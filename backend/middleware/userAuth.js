const jwt = require("jsonwebtoken");
const JWT_SECRET = "thisismyproject";
const { UserModel, UserCoursesModel, CourseDataModel } = require('../models/db');

async function userAuth(req, res, next){

    try { 
        const token = req.headers.token;
        const decoded = jwt.verify(token, JWT_SECRET);
        req.email = decoded.email;
        const user = await UserModel.findOne({ email: req.email });
        req.name = user.name;

        next();
    } catch (err) {
        return res.status(401).json({ message: "Unauthorized" });
    }

}

module.exports = userAuth;