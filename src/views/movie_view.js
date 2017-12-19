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

    console.log("in movie render function");
    return this;
  },

  // events: {
  //
  // }



}); // end of movie view

export default MovieView;
