const tmdbKey = '9aca8284d110a355627657f9434a8994';
const tmdbBaseUrl = 'https://api.themoviedb.org/3';
const playBtn = document.getElementById('playBtn');

const getGenres = async () => {
  const genreRequestEndpoint = '/genre/movie/list';
  const requestParams = `?api_key=${tmdbKey}`;
  const urlToFetch = `${tmdbBaseUrl}${genreRequestEndpoint}${requestParams}`;
  
  try {
    const response = await fetch(urlToFetch);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const jsonResponse = await response.json();
    const genres = jsonResponse.genres;
    return genres;
  } catch (error) {
    console.error('Error fetching genres:', error);
  }
};


const getMovies = async () => {
  const selectedGenre = getSelectedGenre(); // Assuming this function is defined somewhere
  const discoverMovieEndpoint = '/discover/movie';
  const requestParams = `?api_key=${tmdbKey}&with_genres=${selectedGenre}`;
  const urlToFetch = `${tmdbBaseUrl}${discoverMovieEndpoint}${requestParams}`;
  
  try {
    const response = await fetch(urlToFetch);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const jsonResponse = await response.json();
    const movies = jsonResponse.results;
    return movies;
  } catch (error) {
    console.error('Error fetching movies:', error);
  }
};


const getMovieInfo = async (movie) => {
  const movieId = movie.id;
  const movieEndpoint = `/movie/${movieId}`;
  const requestParams = `?api_key=${tmdbKey}`;
  const urlToFetch = `${tmdbBaseUrl}${movieEndpoint}${requestParams}`;
  
  try {
    const response = await fetch(urlToFetch);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const movieInfo = await response.json();
    return movieInfo;
  } catch (error) {
    console.error('Error fetching movie info:', error);
  }
};


// Gets a list of movies and ultimately displays the info of a random movie from the list
const showRandomMovie = async () => {
  const movieInfoElement = document.getElementById('movieInfo');
  
  if (movieInfoElement.childNodes.length > 0) {
    clearCurrentMovie();
  }
  
  const movies = await getMovies();
  const randomMovie = getRandomMovie(movies); // Assuming getRandomMovie function is defined somewhere
  const info = await getMovieInfo(randomMovie);
  
  displayMovie(info); // Assuming displayMovie function is defined somewhere
};


getGenres().then(populateGenreDropdown);
playBtn.onclick = showRandomMovie;