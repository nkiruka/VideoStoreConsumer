import Backbone from 'backbone';
import Movie from '../models/movie';

const MovieView = Backbone.View.extend({

  initialize(params){
    this.template = params.template;
    this.listenTo(this.model, 'change', this.render);

  },

  render() {
    const compiledTemplate = this.template(this.model.toJSON());
    this.$el.html(compiledTemplate);

    return this;
  }, //render

  events: {
    'click button.btn-add': 'add',
  },

}); // end of movie view

export default MovieView;
