$(document).ready(function(){
	$('#searchForm').submit(function(event){
	  	event.preventDefault();
	    var searchTerm = $('#searchYoutube').val();
	    getRequest(searchTerm);
	    //display button more results next page
	    $('#moreResults').append("<p>" + "<button type='button' id='resultsButton'>" + "Show More Results" + "</button>" + "</p>");
 	});

	function getRequest(searchTerm){
		var params = {
	    	part: "snippet",
	    	q: searchTerm,
	    	key: "AIzaSyBYaw5N9mjCqSTIcUsxcOwQJB7z-VZ6zHc",
	    	maxResults: 10
	    }
	    $.getJSON('https://www.googleapis.com/youtube/v3/search',params, function(data){
		    console.log(data);
		    showResults(data.items);
		});
	}

	/*//show more results
	$(document).on("click", ".resultsButton", function() {
		$('#searchResults').append()
	})*/

	function showResults(results){
		var html = "";
		$.each(results, function(index,value){
	    	html += '<p>' + value.snippet.title + '</p>';
	    	console.log(value.snippet.title);
	    	//show thumbnails, make images clickable
	    	html += '<img src= value.snippet.thumbnails.medium.url>';
	    	//<a href="'www.youtube.com/embed/' + value.id.videoID">
	  	});
		$('#searchResults').html(html);
	}

});