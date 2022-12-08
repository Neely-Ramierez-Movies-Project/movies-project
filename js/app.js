(() => {
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

  // TODO: When the initial AJAX request comes back, remove the "loading..." message and replace it with HTML generated from the json response your code receives

  $(document).ready(function () {
    $(`.page-load`).html(`Loading`);
    $.get(url, function (data) {
      $(`.page-load`).html(``);
      data.forEach(function (movie) {
        $(`.container-movies`).append(`${html.divO}${html.h1TitleO}${movie.title}${html.h1TitleC}${html.spanDirectorO}${movie.director}${html.spanDirectorC}${html.spanIdO}${movie.id}${html.spanIdC}${html.spanGenreO}${movie.genre}${html.spanGenreC}${html.spanRatingO}${movie.rating}${html.spanRatingC}${html.divC}`);
      });
      $(`.page-load`).html(`My First Movies App`);
      // * Allow users to add new movies

      // * Create a form for adding a new movie that has fields for the movie's title and rating

      // TODO: When the form is submitted, the page should not reload / refresh, instead, your javascript should make a POST request to /movies with the information the user put into the form

      $(`#submit-movie`).submit(function (event) {
        event.preventDefault();
        const newMovie = {
          title: $(`.title`).val(),
          rating: $(`.rating`).val(),
          id: $(`#id`).val(),
        };
        $.post(url, newMovie, function (data) {
          $(`.container-movies`).append(`${html.divO}${html.h1TitleO}${data.title}${html.h1TitleC}${html.spanDirectorO}${data.director}${html.spanDirectorC}${html.spanIdO}${data.id}${html.spanIdC}${html.spanGenreO}${data.genre}${html.spanGenreC}${html.spanRatingO}${data.rating}${html.spanRatingC}${html.divC}`);
        });
      });
    });
  });
})();
