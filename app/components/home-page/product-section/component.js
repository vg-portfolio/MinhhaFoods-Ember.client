import Ember from 'ember';

export default Ember.Component.extend({
  productCat: [],
  selectedProducts: [],

  loadCategories: function(){
    this.get('categories').forEach((item) => {
      if (item.data.categorizableType === 'ProductSection') {
        this.get('productCat').pushObject(item);
      }
    });
  }.on('init'),

  actions: {
    showProducts(category){
      this.get('selectedProducts').clear();
      category.get('products')
      .then((products) => {
        products.forEach((product) => {
          this.get('selectedProducts').pushObject(product);
        });
      });
    }//showProducts
  }
});
