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
      })
      .then(() => {
        return Materialize.toast('Update success', 4000, 'teal');
      });
    },
    updatePro(data){
      return data.save()
      .then(() => {
        return Materialize.toast('Update success', 4000, 'teal');
      })
      .catch(() => {
        return Materialize.toast('Error', 4000, 'red');
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
      .then(() => {
        return Materialize.toast('Update success', 4000, 'teal');
      })
      .catch(() => {
        return Materialize.toast('Error', 4000, 'red');
      });
    },
  }
});
