import Ember from 'ember';

export default Ember.Component.extend({
  chefCat: [],
  productCat: [],

  loadCategories: function(){
     this.get('categories').forEach((item) => {
      if (item.data.categorizableType === 'ChefSection') {
        this.get('chefCat').pushObject(item);
      } else {
        this.get('productCat').pushObject(item);
      }
    });
  }.on('init'),
});
