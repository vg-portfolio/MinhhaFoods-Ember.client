import Ember from 'ember';

export default Ember.Component.extend({

  selectedCat: null,

  selectedContent: Ember.computed.filter('products', function(item) {
    if (this.get('selectedCat') === null) {
      return true;
    }
    // console.log(item.data.productCategoryId);
    return item.data.productCategoryId === this.get('selectedCat');
  }).property('selectedCat'),

  actions: {
    showSelectedContent(category){
      if (category) {
        this.set('selectedCat', category.id);
      } else {
        this.set('selectedCat', null);
      }
    }//showProducts
  }
});
