var express = require('express');
var app = express();
var serveStatic = require('serve-static');
var bodyParser = require('body-parser');

var Bookmark = require('./bookmark').Bookmark;

app.use(serveStatic("public"));
app.use(bodyParser());

app.get('/hello.txt', function(req, res){
  res.send('Hello World');
});

app.get("/bookmarks.json", function(req, res){
	var mongoSelector = {};
	if (req.query.searchTerm){
		mongoSelector = {title: new RegExp(req.query.searchTerm, "i")};
	}
	Bookmark.find(mongoSelector, function(err, bookmarks){
		res.send(200, bookmarks);
	});
});

app.post('/bookmark', function(req, res){
	var bookmark = new Bookmark();
	bookmark.title = req.body.title;
	bookmark.description = req.body.description;
	bookmark.url = req.body.url;
	bookmark.save(function(err){
		if (err){
			console.error("ERROR", err);
			res.send(500, "ERROR");
		}
		else {
			console.log("successfully saved bookmark", bookmark);
			res.redirect("/");
		}
	});
})

var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});