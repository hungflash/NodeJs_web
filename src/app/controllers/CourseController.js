const Course = require('../models/Course');
const { mongooseTOobject } = require('../../util/mongoose');

class CourseController {
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then((course) => {
                res.render('courses/show', {
                    course: mongooseTOobject(course),
                });
            })
            .catch(next);
    }
}
module.exports = new CourseController();
