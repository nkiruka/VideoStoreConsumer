import $ from 'jquery';
import _ from 'underscore';
// CSS
import './css/foundation.css';
import 'css/_settings.css';
import './css/style.css';

const MOVIE_FIELDS = ['id', 'title', 'overview', 'release_date', 'image_url'];

// TEMPLATES
let moviesTemplate;
// let overviewTemplate;
// let createNewMovieTemplate;

const renderMovies = function renderMovies(movieList) {
  const moviesTableElement = $('#movie-list-table');
  moviesTableElement.html('');
}

// ready to go
$(document).ready(function() {
  // TEMPLATES
  moviesTemplate = _.template($('#movies-template').html());
  // overviewTemplate = _.template($('#movie-template').html());
  // createNewMovieTemplate = _.template($('#create-new-movie-template').html());

  $('#main-content').append('<p>Hello World!</p>');

});
