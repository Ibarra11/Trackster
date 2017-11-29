$( document ).ready(function() {
var Trackster = {};

/*
  Given an array of track data, create the HTML for a Bootstrap row for each.
  Append each "row" to the container in the body to display all tracks. 
*/
Trackster.renderTracks = function(tracks) {

};

/*
  Given a search term as a string, query the LastFM API.
  Render the tracks given in the API query response.
*/
Trackster.searchTracksByTitle = function(title) {
	$.ajax({
	url: "http://ws.audioscrobbler.com/2.0/?method=track.search&track=" + title + "&api_key="+ API_KEY + "&format=json",
	datatype: 'jsonp',
	success: function(){
		console.log("sucess");
	}
});
};

/*
	Adding some interativity to the button
 */
$('#search-button').click(function(){
	var $item = $('.music-search').val();
	Trackster.searchTracksByTitle($item);
})
const API_KEY = 'c5c83bce364f8f016a2400e48b06f348';



	
});