class CourseController {
    show(req, res) {
        
        res.send('Course Details: '+req.params.slug);
    }
}
module.exports = new CourseController();
