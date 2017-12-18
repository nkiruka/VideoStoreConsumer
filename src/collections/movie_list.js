import Backbone from 'backbone';
import Movie from 'models/movie';

const MovieList = Backbone.Collection.extend({
  model: Movie,
  url: 'https://api.themoviedb.org/3/'
});

export default MovieList;



  // "https://api.themoviedb.org/3/" "search/movie?api_key=""_____&query="query"
