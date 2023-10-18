var expressFunction = require("express");
const router = expressFunction.Router();
const auth = require("../config/authorize");
let courses = require("../data/course_data");
const authorization = require("../config/authorize");

router.get('/course', authorization, async (req, res) => {
    res.send(courses)
})

router.post('/course', authorization, async (req, res) => {
    const course = {
        course_id: req.body.course_id,
        name: req.body.name,
        credit: req.body.credit,
        instructor:req.body.instructor 
    }
    courses.push(course)
    console.log(courses);

    res.status(200).json({message: "Add course successfully", courses})
})

router.delete('/course', authorization, async (req, res) => {
    const { index } = req.body
    console.log(courses)

    courses.splice(index, 1)
    console.log(courses)

    res.status(200).json({message: "Delete course successfully" , courses})
})


module.exports = router;
