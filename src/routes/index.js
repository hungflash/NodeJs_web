const Newrouter = require('./news');
const Siterouter = require('./sites');
function routes(app) {
    app.use('/', Siterouter);
    app.use('/news', Newrouter);
    app.use('/search', Siterouter);
}
module.exports = routes;
