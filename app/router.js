import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('messages', function() {
    this.route('new');
    this.route('tab', { path: '/:id' });
  });
});

export default Router;
