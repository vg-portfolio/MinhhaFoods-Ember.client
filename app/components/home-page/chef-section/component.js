import Ember from 'ember';

export default Ember.Component.extend({
  chefCat: [],
  selectedDishes: [],

  loadCategories: function(){
    this.get('categories').forEach((item) => {
      if (item.data.categorizableType === 'ChefSection') {
        this.get('chefCat').pushObject(item);
      }
    });
  }.on('init'),

  actions: {
    showDishes(category){
      this.get('selectedDishes').clear();
      category.get('dishes')
      .then((dishes) => {
        dishes.forEach((dish) => {
          this.get('selectedDishes').pushObject(dish);
        });
      });
    }//showDishes
  }
});
