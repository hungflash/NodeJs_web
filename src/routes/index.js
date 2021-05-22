const Newrouter = require('./news');
const Siterouter = require('./sites');
const Courserouter = require('./course');
function routes(app) {
    // app.use('/news', Newrouter);
    app.use('/course', Courserouter);
    // app.use('/search', Siterouter);
    app.use('/', Siterouter);
}
module.exports = routes;
