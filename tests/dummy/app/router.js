import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
    this.route('ember-easy-orm', function(){
      this.route('form');
      this.route('store');
    });
});

export default Router;
