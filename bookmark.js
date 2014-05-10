var mongoose = require('mongoose');

var mongoUri = process.env.MONGOLAB_URI || 'mongodb://localhost/test'

mongoose.connect(mongoUri);

var bookmarkSchema = mongoose.Schema({
    title: String,
    description: String,
    url: String,
    tags: Array    
});

var Bookmark = mongoose.model('Bookmark', bookmarkSchema);

exports.Bookmark = Bookmark;