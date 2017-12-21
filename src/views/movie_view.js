import $ from 'jquery';
import _ from 'underscore';

import Backbone from 'backbone';
import Movie from '../models/movie';
import MovieDetailsView from './movie_details_view';

const MovieView = Backbone.View.extend({
  initialize(params) {
    this.template = params.template;
    this.listenTo(this.model, 'change', this.render);
  },

  render() {
    const compiledTemplate = this.template(this.model.toJSON());
    this.$el.html(compiledTemplate);

    console.log("in movie render function");
    return this;
  },

  events: {
    'click button.btn-add': 'add',
    'click #titleLink': 'showDetails'
  },

  add(event) {
    console.log('New rentals for $5!');
    this.model.save();
  },

  showDetails: function () {

    const movieDetailsView = new MovieDetailsView ({
      model: this.model,
      template: _.template($('#movie-details').html()),
      el: 'main',
    });

    movieDetailsView.render();
  }

}); // end of movie view

export default MovieView;
