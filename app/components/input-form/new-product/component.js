import Ember from 'ember';

export default Ember.Component.extend({
  category: null,

  actions: {
    chooseCategory(category) {
      this.set('category', category);
      this.set('newObject.productCategory', category);
      console.log(category.id);
      // this.calculateRoute();
      // this.updatePrice();
    }
  }
});
