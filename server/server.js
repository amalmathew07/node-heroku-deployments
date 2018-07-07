var express = require('express');
var port = process.env.PORT || 3000;

var app = express();

app.get('/',(req,res) => {
    res.send("Heroku Dev into Production --- PULL REQUEST TO NEW BRANCH");
});

app.listen(port);
