import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import Movie from '../models/movie';
import MovieView from './movie_view';

let MovieDetailsView = Backbone.View.extend({
  initialize: function(params) {
    this.template = params.template;
    this.listenTo(this.model, 'change', this.render);
  },
  render: function() {
    let compiledTemplate = this.template(this.model.toJSON());
    this.$('#movie-library').html(compiledTemplate);
  },

});

export default MovieDetailsView;
