(() => {
  const url = "https://flawless-north-caution.glitch.me/movies";
  const moviePosterUrl = `http://www.omdbapi.com/?apikey=${movieKey}&`;
  const rating = {
    one: `
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
  </svg>
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
  </svg>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
  </svg>
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
  </svg>
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
  </svg>`,
    two: `
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
  </svg>
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
  </svg>
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
  </svg>
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
  </svg>
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
  </svg>`,
    three: `
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
  </svg>
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
  </svg>
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
  </svg>
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
  </svg>
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
  </svg>`,
    four: `
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
  </svg>
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
  </svg>
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
  </svg>
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
  </svg>
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
  </svg>`,
    five: `
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
  </svg>
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
  </svg>
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
  </svg>
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
  </svg>
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
  </svg>`,
  };
  const icon = {
    edit: `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
      <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
      <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
    </svg>`,
    delete: `
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
        <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
      </svg>`,
  };
  const html = {
    divO: `<div class="movie" id="movie">`,
    posterO: `<img class="poster" src="`,
    posterC: `">`,
    titleO: `<h1 class="title">`,
    titleC: `</h1>`,
    directorO: `<div class="director"><strong class="strong">Director:</strong>&nbsp;`,
    directorC: `</div>`,
    idO: `<div class="movie-id"><span class="strong">ID:</span></span>&nbsp;<span class="id-number">`,
    idC: `</span></div>`,
    genreO: `<div class="genre"><strong>Genre:&nbsp;</strong>`,
    genreC: `</div>`,
    ratingO: `<div class="rating"><strong>Rating:</strong>&nbsp;`,
    ratingC: `</div>`,
    buttons: `
    <div class="movie-buttons">
      <button class="edit-movie" data-bs-toggle="modal" data-bs-target="#editMovieModal">Edit&nbsp&nbsp&nbsp&nbsp${icon.edit}</button>
      <button class="delete-movie" data-bs-toggle="modal" data-bs-target="#deleteMovieModal">Delete&nbsp&nbsp&nbsp${icon.delete}</button>
    </div>`,
    divC: `</div>`,
  };
  const pageLoad = () => {
    $(`.page-load`).html(`Loading`);
    $(`.container-movies`).html(`
    <div class="container-svg-loading">
    <svg width="600" height="600">
    <filter id="inset-shadow" x="-50%" y="-50%" width="200%" height="200%">
     <feComponentTransfer in=SourceAlpha>
       <feFuncA type="table" tableValues="1 0" />
     </feComponentTransfer>
     <feGaussianBlur stdDeviation="4"/>
     <feOffset dx="0" dy="5" result="offsetblur"/>
     <feFlood flood-color="rgb(0, 0, 0)" result="color"/>
     <feComposite in2="offsetblur" operator="in"/>
     <feComposite in2="SourceAlpha" operator="in" />
     <feMerge>
       <feMergeNode in="SourceGraphic" />
       <feMergeNode />
     </feMerge>
   </filter>
   <circle class="svg-circle-1" cx=50% cy=50% r=295 fill=#A5A5A5 filter="url(#inset-shadow)" />
   <circle class="svg-circle-1" cx=50% cy=50% r=265 fill=#999999 filter="url(#inset-shadow)" />
   <circle class="svg-circle-1" cx=50% cy=50% r=236 fill=#8C8C8C filter="url(#inset-shadow)" />
   <circle class="svg-circle-1" cx=50% cy=50% r=208 fill=#7F7F7F filter="url(#inset-shadow)" />
   <circle class="svg-circle-1" cx=50% cy=50% r=181 fill=#727272 filter="url(#inset-shadow)" />
   <circle class="svg-circle-1" cx=50% cy=50% r=155 fill=#666666 filter="url(#inset-shadow)" />
   <circle class="svg-circle-1" cx=50% cy=50% r=130 fill=#595959 filter="url(#inset-shadow)" />
   <circle class="svg-circle-1" cx=50% cy=50% r=106 fill=#4C4C4C filter="url(#inset-shadow)" />
   <circle class="svg-circle-1" cx=50% cy=50% r=83 fill=#3F3F3F filter="url(#inset-shadow)" />
   <circle class="svg-circle-1" cx=50% cy=50% r=61 fill=#333333 filter="url(#inset-shadow)" />
   <circle class="svg-circle-1" cx=50% cy=50% r=40 fill=#262626 filter="url(#inset-shadow)" />
   <circle class="svg-circle-1" cx=50% cy=50% r=20 fill=#191919 filter="url(#inset-shadow)" />
 </svg>
    </div>
    `);
    $(`.container-add`).hide();
    $(`#addMovieModal`).append(addMovieModal);
  };
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
            if (movie.rating === `1`) {
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
          ${html.buttons}${html.divC}`);
      });
    });
    $(`.container-movies`).empty();
    $(`.page-load`).html(`The Movies App`);
    $(`.container-add`).show();
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
  $(document).ready(() => {
    $(`#form-control`).on(`keyup`, function () {
      const value = $(this).val().toLowerCase();
      $(`#container-movies #movie`).filter(function () {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
      });
    });
    $(`.container-movies`).click((e) => {
      if ($(e.target).hasClass(`poster`)) {
        const movieId = $(e.target).parent().find(`img`).attr(`src`);
        window.open(movieId, `_blank`);
      }
    });
  });
  function getMovieData() {
    $.get(url, (data) => {
      console.log(data);
      $(".container-movies").html("");
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
              if (movie.rating === `1`) {
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
    if ($(e.target).hasClass(`edit-movie`)) {
      let movieID = $(e.target).parent().parent().find(`.id-number`).text();
      let movieTitle = $(e.target).parent().parent().find(`.title`).text();
      $(`.modal-title`).text(`Edit ${movieTitle}`);
      console.log(`Title: ${movieTitle}`);
      console.log(`ID: ${movieID}`);
      fetch(`${url}/${movieID}`)
        .then((r) => r.json())
        .then((data) => {
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
    fetch(`${url}/${movie.id}`, {
      method: `PUT`,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(movie),
    })
      .then((r) => r.json())
      .then((result) => {
        $(`.container-movies`).html(``);
        getMovieData();
      });
  });
  $(`.container-movies`).click((e) => {
    if ($(e.target).hasClass(`delete-movie`)) {
      let movieID = $(e.target).parent().parent().find(`.id-number`).text();
      console.log(movieID);
      $(`#delete-movie`).click(() => {
        $.ajax({
          url: `${url}/${movieID}`,
          type: `DELETE`,
          success: (result) => {
            console.log(`Deleted successfully`);
          },
        });
        $(e.target).parent().parent().remove();
      });
    }
  });
  $(`.modal`).on(`shown.bs.modal`, function () {
    $(`.container-movies`).addClass(`blur`);
  });
  $(`.modal`).on(`hidden.bs.modal`, function () {
    $(`.container-movies`).removeClass(`blur`);
  });
})();
