import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
});

Router.map(function () {
  this.route('sign-in');
  this.route('sign-up');
  this.route('users');
  this.route('change-password');
  this.route('about-sections');
});

export default Router;
