import Ember from 'ember';

export default Ember.Component.extend({
  productCat: [],

  loadCategories: function(){
    this.get('categories').forEach((item) => {
      if (item.data.categorizableType === 'ProductSection') {
        this.get('productCat').pushObject(item);
      }
    });
  }.on('init'),

  actions: {
  }
});
