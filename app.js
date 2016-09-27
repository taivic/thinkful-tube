$(document).ready(function(){
	$('#resultsButton').hide();	

	$('#searchForm').submit(function(event){
	  	event.preventDefault();
	    var searchTerm = $('#searchYoutube').val();
	    getRequest(searchTerm);
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

	function showResults(results){
		var html = "";
		$.each(results, function(index,value){
	    	html += '<p>' + value.snippet.title + '</p>';
	    	//show thumbnails, make images clickable
	    	html += '<a target="_blank" href="https://www.youtube.com/embed/' + 
	    		value.id.videoId + '"><img src= "' + value.snippet.thumbnails.medium.url + '"></a>';
	  	});
		$('#searchResults').html(html);
		$('#resultsButton').show();
	}

});