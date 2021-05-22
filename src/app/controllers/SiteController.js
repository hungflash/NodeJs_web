const { json } = require('express');
const Course = require('../models/Course');
const { multiplemongoosetoolobject } = require('../../util/mongoose');
class SiteController {
    //[GET] /
    index(req, res, next) {
        Course.find({})
            .then((courses) => {
                courses = courses.map((cour) => cour.toObject());
                // courses: multiplemongoosetoolobject(courses),
                res.render('home', { courses });
            })
            .catch(next);
    }
    //[GET] /search
    Search(req, res) {
        res.render('search');
    }
}
module.exports = new SiteController();
