(() => {
  pageLoad();
  $.get(url, (data) => {
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
            } else if (movie.rating === `2`) {
              movie.rating = rating.two;
            } else if (movie.rating === `3`) {
              movie.rating = rating.three;
            } else if (movie.rating === `4`) {
              movie.rating = rating.four;
            } else if (movie.rating === `5`) {
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
          ${html.idO}${movie.id}${html.idC}
          ${html.directorO}${movie.director}${html.directorC}
          ${html.genreO}${movie.genre}${html.genreC}
          ${html.ratingO}${movie.rating}${html.ratingC}
          ${html.buttons}${html.divC}
          `);
      });
    });
    $(`.page-load`).html(`The Movies App`);
    $(`.container-add`).show();
    $(`.hidden`).removeClass(`hidden`);
    $(`#modal-submit-movie`).click((e) => {
      e.preventDefault();
      const movie = {
        title: $(`#title`).val(),
        id: $(`#id`).val(),
        director: $(`#director`).val(),
        genre: $(`#genre`).val(),
        rating: $(`#rating`).val(),
      };
      $.post(url, movie, (data) => {
        console.log(data);
        $(`.container-movies`).empty();
        getMovieData();
      });
    });
  });
  // });
  $(document).ready(() => {
    $(`#form-control`).on(`keyup`, function () {
      const value = $(this).val().toLowerCase();
      $(`#container-movies #movie`).filter(function () {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
      });
    });
  });
  function getMovieData() {
    $.get(url, (data) => {
      console.log(data);
      $('.container-movies').html('');
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
              } else if (movie.rating === `2`) {
                movie.rating = rating.two;
              } else if (movie.rating === `3`) {
                movie.rating = rating.three;
              } else if (movie.rating === `4`) {
                movie.rating = rating.four;
              } else if (movie.rating === `5`) {
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
          ${html.idO}${movie.id}${html.idC}
          ${html.directorO}${movie.director}${html.directorC}
          ${html.genreO}${movie.genre}${html.genreC}
          ${html.ratingO}${movie.rating}${html.ratingC}
          ${html.buttons}${html.divC}
          `);
        });
      });
    });
  }

  $(`.container-movies`).click((e) => {
    console.log(e.target);
    if ($(e.target).hasClass(`edit-movie`)) {
      let movieID = $(e.target).parent().parent().find(`.id-number`).text();
      let movieTitle = $(e.target).parent().parent().find(`.title`).text();
      $(`.modal-title`).text(`Edit ${movieTitle}`);
      console.log(`Title: ${movieTitle}`);
      console.log(`ID: ${movieID}`);
      fetch(`${url}/${movieID}`).then(r => r.json()).then( (data) => {
        $(`#edit-title`).val(data.title);
        $(`#edit-id`).val(data.id);
        $(`#edit-director`).val(data.director);
        $(`#edit-genre`).val(data.genre);
        $(`#edit-rating`).val(data.rating);
      });
    }
  });
  $(`#submit-edit`).click((e) => {
    e.preventDefault();
    const movie = {
      title: $(`#edit-title`).val(),
      director: $(`#edit-director`).val(),
      genre: $(`#edit-genre`).val(),
      rating: $(`#edit-rating`).val(),
      id: $(`#edit-id`).val(),
    };
    console.log(movie);
    fetch(`${url}/${movie.id}`,{
      method: `PUT`,
      headers:{
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(movie)}).then(r => r.json()).then(result => {
    $(`.container-movies`).html(``);
    getMovieData();
    });
  });
  $(`.container-movies`).click((e) => {
    if ($(e.target).hasClass(`delete-movie`)) {
      let movieID = $(e.target).parent().parent().find(`.id-number`).text();
      console.log(movieID);
      $.ajax({
        url: `${url}/${movieID}`,
        type: `DELETE`,
        success: (result) => {
          console.log(`Deleted successfully`);
        },
      });
      $(e.target).parent().parent().remove();
    }
  });

  $(`.modal`).on(`shown.bs.modal`, function () {
    $(`.container-movies`).addClass(`blur`);
  });
  $(`.modal`).on(`hidden.bs.modal`, function () {
    $(`.container-movies`).removeClass(`blur`);
  });
})();