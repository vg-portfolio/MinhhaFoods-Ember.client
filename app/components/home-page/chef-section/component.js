import Ember from 'ember';

export default Ember.Component.extend({
  chefCat: [],

  loadCategories: function(){
    this.get('categories').forEach((item) => {
      if (item.data.categorizableType === 'ChefSection') {
        this.get('chefCat').pushObject(item);
      }
    });
  }.on('init'),
});
