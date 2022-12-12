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
      $(`#modal-submit-movie`).click(() => {
        // when the user clicks on the submit button, the movie should be added to the database
        const movie = {
          title: $(`#title`).val(),
          director: $(`#director`).val(),
          genre: $(`#genre`).val(),
          rating: $(`#rating`).val(),
        };
        $.post(url, movie, (data) => {
          console.log(data);
          $(`.container-movies`).append(`
          ${html.divO}${html.posterO}${data.Poster}${html.posterC}
          ${html.titleO}${movie.title}${html.titleC}
          ${html.idO}${movie.id}${html.idC}${html.directorO}${movie.director}${html.directorC}${html.genreO}${movie.genre}${html.genreC}${html.ratingO}${movie.rating}${html.ratingC}
          ${html.buttons}${html.divC}
          `);
        });
      });
      // * Allow users to delete movies
    });
  });
  $(document).ready(() => {
    // * search feature
    // when the user types into .form-control, movies should be filtered to only show movies that match the text the user typed
    $(`#form-control`).on(`keyup`, function () {
      const value = $(this).val().toLowerCase();
      $(`#container-movies #movie`).filter(function () {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
      });
    });
  });
})();
