import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.store.findRecord('chef-category', params.chef-category_id);
  }
});