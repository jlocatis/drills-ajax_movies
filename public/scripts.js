window.addEventListener("load", function() {
	document.getElementById("get_movies").addEventListener("click", getMovies);
});

function getMovies() {
	var movie = document.getElementById("query").value
	var xhr = new XMLHttpRequest();
	xhr.open('GET', '/results?query=' + movie);
	xhr.onload = function() {
		var response = xhr.responseText;
		response = JSON.parse(response);
		postMovieInfo(response);
	}
	xhr.send();
}

var counter = 0

function postMovieInfo(response) {
	counter = 0;
	var remove = document.getElementById("show_me_stuff");
	remove.innerHTML = "";
	var html = "Title: " + response["Search"][counter]["Title"] + "<br>Year: " + response["Search"][counter]["Year"] + "<br>IMDB Page: <a href=\"http://www.imdb.com/title/" + response["Search"][counter]["imdbID"] + "/\" target=\"blank\">Click Here!</a><br>Type: " + response["Search"][counter]["Type"] + "<br>Poster: <br><img src=\"" + response["Search"][counter]["Poster"] + "\" alt=\"" + response["Search"][counter]["Title"] + "\">"
	var div = document.getElementById("show_me_stuff");
	div.insertAdjacentHTML("afterbegin", html);

	var nav = document.getElementById("nav");
	nav.style.display = "block"
	document.getElementById("prev").addEventListener("click", function() { previousItem(response); });
	document.getElementById("next").addEventListener("click", function() { nextItem(response); });
}

function previousItem(response) {
	counter -= 1
	var remove = document.getElementById("show_me_stuff");
	remove.innerHTML = "";
	var html = "Title: " + response["Search"][counter]["Title"] + "<br>Year: " + response["Search"][counter]["Year"] + "<br>IMDB Page: <a href=\"http://www.imdb.com/title/" + response["Search"][counter]["imdbID"] + "/\" target=\"blank\">Click Here!</a><br>Type: " + response["Search"][counter]["Type"] + "<br>Poster: <br><img src=\"" + response["Search"][counter]["Poster"] + "\" alt=\"" + response["Search"][counter]["Title"] + "\">"
	var div = document.getElementById("show_me_stuff");
	div.insertAdjacentHTML("afterbegin", html);
}

function nextItem(response) {
	counter += 1
	var remove = document.getElementById("show_me_stuff");
	remove.innerHTML = "";
	var html = "Title: " + response["Search"][counter]["Title"] + "<br>Year: " + response["Search"][counter]["Year"] + "<br>IMDB Page: <a href=\"http://www.imdb.com/title/" + response["Search"][counter]["imdbID"] + "/\" target=\"blank\">Click Here!</a><br>Type: " + response["Search"][counter]["Type"] + "<br>Poster: <br><img src=\"" + response["Search"][counter]["Poster"] + "\" alt=\"" + response["Search"][counter]["Title"] + "\">"
	var div = document.getElementById("show_me_stuff");
	div.insertAdjacentHTML("afterbegin", html);
}