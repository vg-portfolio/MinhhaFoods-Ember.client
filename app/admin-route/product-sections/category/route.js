import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.store.findRecord('product-category', params.product_category_id);
  }
});
