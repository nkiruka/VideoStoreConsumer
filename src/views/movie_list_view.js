import Backbone from 'backbone';
import _ from 'underscore';

import MovieView from './movie_view';
import Movie from '../models/movie';



const MovieListView = Backbone.View.extend({

  initialize(params) {

  },

  render(){
    console.log("In Movie List render function");

    return this
  },



}); // end movie list view

export default MovieListView;
