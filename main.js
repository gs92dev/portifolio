const tmdbKey = "880f351eb68cd06831acb03fc03e3625";
const tmdbBaseUrl = "https://api.themoviedb.org/3";
//const playBtn = document.getElementById("playBtn");

const getGenres = async () => {
  const genreRequestEndpoint = "/genre/movie/list";
  const requestParams = `?api_key=${tmdbKey}`;
  const urlToFetch = `${tmdbBaseUrl}${genreRequestEndpoint}${requestParams}` ;
  try {
  const response = await fetch(urlToFetch);
  if(response.ok){
    const jsonResponse = await response.json();
     console.log(jsonResponse);
     const genres = jsonResponse.genres;
  }
  } catch (error) {
    console.log(error);
  };
};
getGenres();
/*const getMovies = () => {
  const selectedGenre = getSelectedGenre();
};

const getMovieInfo = () => {};

// Gets a list of movies and ultimately displays the info of a random movie from the list
const showRandomMovie = () => {
  const movieInfo = document.getElementById("movieInfo");
  if (movieInfo.childNodes.length > 0) {
    clearCurrentMovie();
  }
};

getGenres().then(populateGenreDropdown);
playBtn.onclick = showRandomMovie;*/
