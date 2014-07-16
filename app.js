var express = require('express'),
    http = require('http'),
    path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);

// development only
if ('development' == app.get('env')) {
    app.use(express.errorHandler());
}

app.get('/', function(req, res, next){

    var graphData = {
        label: "bar",
        data: [
            [0,0],
            [2,1],
            [4,2],
            [6,3]
        ]
    };

    res.render('index.ejs', {
        foo: true,
        graphData: graphData
    });

});

http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
});
