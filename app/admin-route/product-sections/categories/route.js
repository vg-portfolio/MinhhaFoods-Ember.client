import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findAll('product-category');
  },

  actions: {
    updateCat(data){
      return data.save()
      .then(() => {
        console.log("update product category success");
      });
    },
    newCat(data){
      let newCat = this.store.createRecord('productCategory', data);
      return newCat.save()
      .then(() => {
        console.log("New product category success");
      });
    },

    deleteCat(data){
      return data.destroyRecord().
      then(() => {
        this.store.reloadAll();
      })
      .then(() => {
        console.log("delete success");
      });
    },

  }
});
