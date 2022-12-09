(() => {
  const url = "https://codeup-json-server.glitch.me/movies";

  const html = {
    divO: `<div class="movie">`,
    titleO: `<h1 class="title">`,
    titleC: `</h1>`,
    directorO: `<span class="director">`,
    directorC: `</span>`,
    idO: `<span class="id">`,
    idC: `</span>`,
    genreO: `<span class="genre">`,
    genreC: `</span>`,
    ratingO: `<span class="rating">`,
    ratingC: `</span>`,
    buttons: `<div class="movie-buttons"><button class="edit-movie">Edit</button><button class="delete-movie">Delete</button></div>`,
    divC: `</div>`,
  };

  // TODO: When the initial AJAX request comes back, remove the "loading..." message and replace it with HTML generated from the json response your code receives

  $(document).ready(function () {
    $(`.page-load`).html(`Loading`);
    $.get(url, function (data) {
      console.log(data);
      // make is to where the movies image is the shown from the name of the movie

      data.forEach(function (movie) {
        $(`.container-movies`).append(`${html.divO}${html.titleO}${movie.title}${html.titleC}${html.directorO}${movie.director}${html.directorC}${html.idO}${movie.id}${html.idC}${html.genreO}${movie.genre}${html.genreC}${html.ratingO}${movie.rating}${html.ratingC}${html.buttons}${html.divC}`);
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
          $(`.container-movies`).append(`${html.divO}${html.titleO}${data.title}${html.titleC}${html.directorO}${data.director}${html.directorC}${html.idO}${data.id}${html.idC}${html.genreO}${data.genre}${html.genreC}${html.ratingO}${data.rating}${html.ratingC}${html.divC}`);
        });
      });
    });
  });
})();

// ! {DELETE MOVIE} modal use "toggle between modals"

// document.getElementById(`submit-movie`).addEventListener(`click`, function (event) {});

// $(`#submit-movie`).hover((event) => {});