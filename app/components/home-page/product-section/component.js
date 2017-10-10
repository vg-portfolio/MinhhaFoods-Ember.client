import Ember from 'ember';

export default Ember.Component.extend({
  productCat: [],
  selectedProducts: [],

//Sets up page by loadings array of categories and products
pageSetup:function(){
  this.loadCategories();
  this.defaultProducts();
}.on('init'),

//Loads an array of categories on load
  loadCategories: function(){
    this.get('categories').forEach((item) => {
      if (item.data.categorizableType === 'ProductSection') {
        this.get('productCat').pushObject(item);
      }
    });
  },

//Loads an array of products on load
  defaultProducts: function(){
    let categories = this.get('productCat');
    let defaultCategory = categories.get('firstObject');
    this.loadProducts(defaultCategory);
  },

//Logic that populates product array to be loaded
  loadProducts: function(category){
    this.get('selectedProducts').clear();
    category.get('products')
    .then((products) => {
      products.forEach((product) => {
        this.get('selectedProducts').pushObject(product);
      });
    });
  },

  actions: {
    showProducts(category){
      this.loadProducts(category);
    }//showProducts
  }
});
