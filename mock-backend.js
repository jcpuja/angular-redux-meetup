const restify = require('restify');

const server = restify.createServer({
    name: 'myapp',
    version: '1.0.0'
});

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

server.use(
    function crossOrigin(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        return next();
    }
);

server.get('/enterprise-random/', function (req, res, next) {
    setTimeout(function () {
        res.send({
            enterpriseRandomNumber: Math.round(Math.random() * 100 - 50)
        });
        return next();
    }, 1000);
});

server.listen(8080, function () {
    console.log('%s listening at %s', server.name, server.url);
});
