var express = require('express');
var fs = require('fs');

var app = express();

app.route('/')
    .get(function(req, res) {
		  res.send('<h1>Hello!</h1>');
    })
app.listen(process.env.PORT || 3000, () => {
  console.log("App listening on port");
});

