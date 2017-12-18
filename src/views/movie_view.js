import Backbone from 'backbone';
import Movie from '../models/movie';

const MovieView - Backbone.View.extend({

  initialize(params){

  },

  render() {
    console.log("in movie render function");
    return this;
  }



}); // end of movie view

export default MovieView;
