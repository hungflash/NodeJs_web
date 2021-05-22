const mongoose = require('mongoose');

function connect() {
    try {
        mongoose.connect('mongodb://localhost:27017/f8-test', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('connect successfully');
    } catch (error) {
        console.log('failed:', error);
    }
}
module.exports = { connect };
