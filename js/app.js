(() => {
  $(document).ready(() => {
    pageLoad();
    $.get(url, (data) => {
      console.log(data);
      data.forEach((movie) => {
        $.get(`${moviePosterUrl}t=${movie.title}`, (data) => {
          function movieInfo() {
            const posterInfo = () => {
              if (data.Response === `False`) {
                data.Poster = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjQk5myChutYz0rHuGWaDlhcGMzOCABLt_LA&usqp=CAU`;
              }
            };

            const movieTitle = () => {
              if (movie.title === undefined || movie.title === null || movie.title === ``) {
                movie.title = `N/A`;
              }
            };

            const directorInfo = () => {
              if (movie.director === undefined) {
                movie.director = `N/A`;
              }
            };
            const genreInfo = () => {
              if (movie.genre === undefined || movie.genre === null || movie.genre === ``) {
                movie.genre = `N/A`;
              }
            };
            const movieRating = () => {
              if (movie.rating === 1) {
                movie.rating = rating.one;
              } else if (movie.rating === 2) {
                movie.rating = rating.two;
              } else if (movie.rating === 3) {
                movie.rating = rating.three;
              } else if (movie.rating === 4) {
                movie.rating = rating.four;
              } else if (movie.rating === 5) {
                movie.rating = rating.five;
              } else {
                movie.rating = `N/A`;
              }
            };
            posterInfo();
            movieTitle();
            directorInfo();
            genreInfo();
            movieRating();
          }
          movieInfo();
          $(`.container-movies`).append(`
          ${html.divO}${html.posterO}${data.Poster}${html.posterC}
          ${html.titleO}${movie.title}${html.titleC}
          ${html.idO}${movie.id}${html.idC}${html.directorO}${movie.director}${html.directorC}${html.genreO}${movie.genre}${html.genreC}${html.ratingO}${movie.rating}${html.ratingC}
          ${html.buttons}${html.divC}
          `);
          // * This is safe. Only shows the image for the movie poster that was clicked on
          $(`.poster`).click(() => {
            window.open(`${data.Poster}`, `_blank`);
          });
        });
      });
      $(`.page-load`).html(`The Movies App`);
      $(`.container-add`).show();
      $(`.hidden`).removeClass(`hidden`);
      // ! below is not safe due to glitch server issues
      // * Allow users to add new movies
      // * Create a form for adding a new movie that has fields for the movie's title and rating
      // TODO: When the form is submitted, the page should not reload / refresh, instead, your javascript should make a POST request to /movies with the information the user put into the form
      // $(`#submit-movie`).submit(function (event) {
      //   event.preventDefault();
      //   const newMovie = {
      //     title: $(`.title`).val(),
      //     rating: $(`.rating`).val(),
      //     id: $(`#id`).val(),
      //   };
      //   $.post(url, newMovie, function (data) {
      //     $(`.container-movies`).append(`${html.divO}${html.titleO}${data.title}${html.titleC}${html.directorO}${data.director}${html.directorC}${html.idO}${data.id}${html.idC}${html.genreO}${data.genre}${html.genreC}${html.ratingO}${data.rating}${html.ratingC}${html.divC}`);
      //   });
      // });
      // * Allow users to delete movies
      // $(`#delete`).click(() => {
      //   const id = $(this).data(`id`);
      //   $.ajax({
      //     url: `${url}/${id}`,
      //     type: `DELETE`,
      //     success: (result) => {
      //       console.log(`Deleted movie with id ${id}`);
      //     },
      //   });
      // });
    });
  });
  // TODO: add movie
  $(document).ready(() => {
    // * search feature
    $(`.form-control`).on(`keyup`, function () {
      const value = $(this).val().toLowerCase();
      const filterMovies = () => {
        $(`.container-movies div`).filter(function () {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
          $(`.movie-buttons`).show();
        });
      };
      filterMovies();
    });
  });
})();




