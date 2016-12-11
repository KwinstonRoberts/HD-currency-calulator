var express = require('express');

var app = express();
//app.use(wwwhisper())
app.use(express.static(__dirname + "/public"));
app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.all('/*', function (req, res, next) {
    res.sendFile('/app/index.html', { root: __dirname });
});

console.log('Connection established on port 8000');
app.listen(process.env.PORT || 8000);
