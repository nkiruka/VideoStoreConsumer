import $ from 'jquery';
import _ from 'underscore';
// CSS
import './css/foundation.css';
import 'css/_settings.css';
import './css/style.css';
// MODEL VIEW AND COLLECTION
import Movie from './models/movie';
import MovieView from './views/movie_view';
import MovieList from './collections/movie_list';
import MovieListView from './views/movie_list_view';




// const MOVIE_FIELDS = ['id', 'title', 'overview', 'release_date', 'image_url'];

// TEMPLATES

// let overviewTemplate;
// let createNewMovieTemplate;

// RENDER LIST OF TRIPS
// const loadMovies = function loadMovies(movieList) {
//   const moviesTableElement = $('#movie-list');
//   moviesTableElement.html('');
//
//   movieList.forEach((movie) => {
//     const generatedHTML = $(moviesTemplate(movie.attributes));
//     moviesTableElement.append(generatedHTML);
//   });
// };
let moviesTemplate;


// ready to go
$(document).ready(function() {
  // TEMPLATES
  moviesTemplate = _.template($('#movies-template').html());
  // overviewTemplate = _.template($('#movie-template').html());
  // createNewMovieTemplate = _.template($('#create-new-movie-template').html());
  const movies = new MovieList();
  console.log("Set up movieList");



  const movieListView = new MovieListView({
    model: movies,
    template: moviesTemplate,
    el: 'main',
  });
  console.log("before fetch");

  movies.fetch();

  $('#movie-search-form').on('submit', function(event) {
    event.preventDefault();
    let queryText = $('#query').val().trim();

    if (queryText.length > 0) {
      movies.fetch({
        reset: true,
        data: { query: queryText }
      });
    } else {
      movies.reset();
    }
  });

$('#movie-library').on('click', function(event) {
  movies.fetch({
    reset: true
  })
});
}); // end document ready

  // $('#show-movies').on('click', function() {
  //   console.log('show movies: clicked');
  //   $('#movie-create-new').hide();
  //   /// need clarification on this /////
  //   movieList.on('update', loadMovies);
  //   movieList.on('sort', loadMovies);
  //   movieList.fetch({
  //     success: () => {
  //       $('#movie-list-table').show();
  //       console.log('show list table: success');
  //       $('.hero').animate({height:'40vh'});
  //     },
  //   });
  // });
