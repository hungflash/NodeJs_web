const mongoose = require('mongoose');
const schema = mongoose.Schema;
const Course = new schema({
    name: { type: String, minlength: 1, maxlength: 255 },
    description: { type: String, maxlength: 255 },
    image: { type: String, minlength: 1, maxlength: 255 },
    createAt: { type: Date, default: Date.now },
    UpdateAt: { type: Date, default: Date.now },
});
module.exports = mongoose.model('Course', Course);
