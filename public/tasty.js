var renderBookmarks = function(data){
	for (var i=0; i < data.length; i++){
		var bookmark = data[i];
		var bookmarkHtml = '<a href="' + bookmark.url + '">' + bookmark.title + "</a>";
		bookmarkHtml += "<br /><p>" + bookmark.description + "</p>";
		$("#bookmarks").append(bookmarkHtml);
	}
};

jQuery(document).ready(function(){
	jQuery.get("/bookmarks.json", function(data){
		renderBookmarks(data);
	});

	jQuery("#search").keyup(function(e){
		jQuery.get("/bookmarks.json", {searchTerm: $("#search").val()}, function(data){
			$("#bookmarks").html("");
			renderBookmarks(data);
		});
	})
});
