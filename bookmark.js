var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var bookmarkSchema = mongoose.Schema({
    title: String,
    description: String,
    tags: Array    
});

var Bookmark = mongoose.model('Bookmark', bookmarkSchema);

exports.Bookmark = Bookmark;