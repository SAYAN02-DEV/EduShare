const express = require('express');
const router = express.Router();
const jwt = require("jsonwebtoken");
const userAuth = require('../middleware/userAuth');
const { UserModel, UserCoursesModel, CourseDataModel } = require('../models/db');
const JWT_SECRET = "thisismyproject";

// signup
router.post('/signup', async (req, res) => {
    const name  = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    try {
        await UserModel.create({ email, name, password });
        res.json({ message: "You are signed up!" });
    } catch (err) {
        return res.status(400).json({ message: "User already exists!" });
    }
});

// signin
router.post('/signin', async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const user = await UserModel.findOne({ email, password });
    if (user) {
        const token = jwt.sign({ email: user.email }, JWT_SECRET);
        res.json({ token, msg: "you are signed in!" });
    } else {
        res.status(403).json({ message: "Invalid Credentials!" });
    }
});

// protected routes

router.get('/mycourses', userAuth, async (req, res) => {
    try {
        const userCourses = await UserCoursesModel.findOne({ email: req.email });

        const parsedUser = {
            name: req.name,
            email: req.email,
            purchasedCourses: []
        };

        if (userCourses && userCourses.courses.length > 0) {
            // Fetch detailed course info
            const detailedCourses = await CourseDataModel.find({
                _id: { $in: userCourses.courses }
            });

            // Format them for frontend
            parsedUser.purchasedCourses = detailedCourses.map(course => ({
                id: course._id,
                name: course.name,
                image: course.image || 'https://via.placeholder.com/80'
            }));
        }

        res.status(200).json(parsedUser);

    } catch (err) {
        res.status(500).json({ message: "Something went wrong", error: err.message });
    }
});


router.post('/purchase', userAuth, async (req, res) => {
    const { courseId } = req.body;
    try {
        const course = await CourseDataModel.findById(courseId);
        if (!course) {
            return res.status(404).json({ message: "Course not found" });
        }

        let userCourses = await UserCoursesModel.findOne({ email: req.email });
        if (!userCourses) {
            userCourses = new UserCoursesModel({ email: req.email, courses: [courseId] });
        } else {
            if (userCourses.courses.includes(courseId)) { 
                return res.status(409).json({ message: "Course already purchased" });
            }
            userCourses.courses.push(courseId);
        }

        await userCourses.save();
        res.json({ message: "Course purchased successfully", courseId });
    } catch (err) {
        res.status(500).json({ message: "Something went wrong", error: err.message });
    }
});

//test route
router.get('/test', (req, res) => {
    res.send("Deployed sucessfully!")
})
module.exports = router;
