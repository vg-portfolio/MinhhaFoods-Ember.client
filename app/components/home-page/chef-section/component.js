import Ember from 'ember';

export default Ember.Component.extend({
  chefCat: [],
  selectedDishes: [],

  pageSetup: function(){
    this.loadCategories();
    this.defaultDishes();
  }.on('init'),

  loadCategories: function(){
     this.get('categories').forEach((item) => {
      if (item.data.categorizableType === 'ChefSection') {
        this.get('chefCat').pushObject(item);
      }
    });
  },

  defaultDishes: function(){
    let categories = this.get('chefCat');
    console.log(categories);
    let defaultCategory = categories.get('firstObject');
    this.loadDishes(defaultCategory);
  },

  loadDishes: function(category){
    this.get('selectedDishes').clear();
    category.get('dishes')
    .then((dishes) => {
      dishes.forEach((dish) => {
        this.get('selectedDishes').pushObject(dish);
      });
    });
  },

  actions: {
    showDishes(category){
      this.loadDishes(category);
    }//showDishes
  }
});
