jQuery(document).ready(function(){
	jQuery.get("/bookmarks.json", function(data){
		for (var i=0; i < data.length; i++){
			var bookmark = data[i];
			console.log("BOOKMARK", bookmark);
			var bookmarkHtml = '<a href="' + bookmark.url + '">' + bookmark.title + "</a>";
			bookmarkHtml += "<br /><p>" + bookmark.description + "</p>";
			$("#bookmarks").append(bookmarkHtml);
		}
	});
});