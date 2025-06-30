const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

//user datas
const user = new Schema({
    email: {type: String, unique: true},
    name: String,
    password: String
});

const userCourses = new Schema({
    email: String,
    courses: [{
        type: ObjectId
    }]
});

const courseData = new Schema({
    name: String,
    link: String
})

//admin datas
const admin = new Schema({
    email: {type: String, unique: true},
    name: String,
    password: String
});

const UserModel = mongoose.model("user", user);
const UserCoursesModel = mongoose.model("userCourses", userCourses);
const CourseDataModel = mongoose.model("courseData", courseData);
const AdminModel = mongoose.model("admin", admin);


module.exports = {
    UserModel, UserCoursesModel, CourseDataModel, AdminModel
};



//schema:
/*
users database:
name username password

user courses database:
userid courses array with course ids

courses databae:
name:
link:
*/