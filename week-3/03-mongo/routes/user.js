const { Router } = require("express");
const { User, Course } = require("../db");
const router = Router();
const userMiddleware = require("../middleware/user");

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;

    const user = await User.findOne({ username: username });
    if (user) {
        res.json({
            msg: "User already exists"
        })
    } else {
        User.create({
            username,
            password
        })
        res.json({
            message: "User created successfully"
        })
    }


});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const courses = await Course.find({})
    res.json({
        courses: courses
    })
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const id = req.params.courseId;
    const username = req.headers.username;
    try {
        await User.updateOne({
            username: username
        }, {
            "$push": {
                purchasedCourses: id
            }
        })
    } catch (e) {
        console.log(e);
    }

    res.json({
        message: "Purchase completed"
    })

});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const user = await User.findOne({
        username: req.headers.username
    })
    console.log(user.purchasedCourses)
    const courses = await Course.find({
        _id: {
            "$in": user.purchasedCourses
        }
    })
    res.json({
        courses: courses
    })
});

module.exports = router