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
  this.route('admin-route', function() {
    this.route('about-sections', function() {
      this.route('history');
      this.route('why-us');
      this.route('awards');
    });
    this.route('product-sections', function() {
      this.route('categories', function() {});
      this.route('products');

      this.route('category', { path: '/category/:product-category_id' }, function() {
        this.route('products');
      });
    });
  });

  this.route('product-sections', function() {});
});

export default Router;
