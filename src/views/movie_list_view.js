import Backbone from 'backbone';

import MovieView from './movie_view';
import Movie from '../models/movie';

const MovieListView = Backbone.View.extend ({

  initialize(params) {
    this.template = params.template;
    this.listenTo(this.model, 'change', this.render);
  },

  render() {
    this.$('#library-movies').empty();
    this.model.each((movie) => {
      const movieView = new MovieView ({
        model: movie,
        template: this.template,
        tagName: 'li',
        className: 'movie',
      });

      this.$('#library-movies').append(movieView.render().$el);

    });
    return this;
  }


}); // end movie list view

export default MovieListView;
