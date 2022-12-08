const url = "https://codeup-json-server.glitch.me/movies";

const html = {
  divO: `<div class="movie">`,
  h1TitleO: `<h1 class="title">`,
  h1TitleC: `</h1>`,
  spanDirectorO: `<span class="director">`,
  spanDirectorC: `</span>`,
  spanIdO: `<span class="id">`,
  spanIdC: `</span>`,
  spanGenreO: `<span class="genre">`,
  spanGenreC: `</span>`,
  spanRatingO: `<span class="rating">`,
  spanRatingC: `</span>`,
  divC: `</div>`,
};

// On page load:

// Display a "loading..." message
// Make an AJAX request to get a listing of all the movies
// When the initial AJAX request comes back, remove the "loading..." message and replace it with HTML generated from the json response your code receives

$(document).ready(function () {
  $(`.page-load`).html(`Loading`);
  $.get(url, function (data) {
    $(`.page-load`).html(``);
    data.forEach(function (movie) {
      $(`.container-movies`).append(`${html.divO}${html.h1TitleO}${movie.title}${html.h1TitleC}${html.spanDirectorO}${movie.director}${html.spanDirectorC}${html.spanIdO}${movie.id}${html.spanIdC}${html.spanGenreO}${movie.genre}${html.spanGenreC}${html.spanRatingO}${movie.rating}${html.spanRatingC}${html.divC}`);
    });
    $(`.page-load`).html(`My First Movies App`);
  });
});
