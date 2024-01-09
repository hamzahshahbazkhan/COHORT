const { Router } = require("express");
const { Admin, Course } = require("../db")
const adminMiddleware = require("../middleware/admin");
const router = Router();

// Admin Routes
router.post('/signup', (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    // check if the user already exists in the database
    Admin.findOne({
        username: username
    }).then((value) => {
        if (value) {
            res.status(403).json({
                msg: "User already exists"
            })
        } else {
            Admin.create({
                username,
                password
            }).then(() => {
                res.json({
                    message: "Admin created successfully"
                })
            }).catch((e) => {
                res.status(404).json({
                    message: "Error creating user"
                })
            })
        }
    })


});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price;

    // Ideally in real world we should use zod

    const newCourse = await Course.create({
        title,
        description,
        imageLink,
        price
    })
    console.log(newCourse);
    res.json({
        message: 'Course created successfully',
        courseId: newCourse._id
    })

});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    allCourses = await Course.find({

    })
    res.json(allCourses)
});

module.exports = router;