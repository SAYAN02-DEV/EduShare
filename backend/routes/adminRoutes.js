const express = require('express');
const router = express.Router();
const jwt = require("jsonwebtoken");
const adminAuth = require('../middleware/adminAuth');
const { AdminModel, CourseDataModel } = require('../models/db');
const JWT_SECRET = "thisismyproject";

// signup
router.post('/signup', async (req, res) => {
    const name  = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    try {
        await AdminModel.create({ email, name, password });
        res.json({ message: "You are signed up!" });
    } catch (err) {
        return res.status(400).json({ message: "Admin already exists!" });
    }
});

// signin
router.post('/signin', async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const admin = await AdminModel.findOne({ email, password });
    if (admin) {
        const token = jwt.sign({ email: admin.email }, JWT_SECRET);
        res.json({ token, msg: "you are signed in!" });
    } else {
        res.status(403).json({ message: "Invalid Credentials!" });
    }
});

// add course (protected)
router.post('/addcourses', adminAuth, async (req, res) => {
    const { name, link } = req.body;
    try {
        const existing = await CourseDataModel.findOne({ link });
        if (existing) {
            return res.status(409).json({ message: "Course already present" });
        }

        await CourseDataModel.create({ name, link });
        res.json({ message: "Course added successfully" });
    } catch (err) {
        return res.status(500).json({ message: "Something went wrong!" });
    }
});

module.exports = router;
