import Ember from 'ember';

export default Ember.Route.extend({

  model(){
    return Ember.RSVP.hash({
      products: this.store.findAll('product'),
      categories: this.store.findAll('product-category'),
    });
  },

  setupController(controller, models) {
    controller.setProperties(models);
  },

  actions: {
    deletePro(data){
      return data.destroyRecord()
      .then(() => {
        return this.store.reloadAll();
        console.log("destroyed");
      });
    },
    updatePro(data){
      return data.save()
      .then(() => {
        console.log("update success");
      });
    },
    newPro(data){
      console.log(data);
      // let category = this.store.findRecord('productCategory', data.productCategoryId);
      let newPro = this.store.createRecord('product', data);
      // return this.store.findRecord('productCategory', data.productCategoryId)
      return newPro.save()
      // .then((category) => {
      //   return newPro.set('productCategory', category)
      // })
      .then((cate) => {
        // return cate.save();
        console.log("create success");
      });
    },
  }
});
