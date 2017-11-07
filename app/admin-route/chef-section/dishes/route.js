import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return Ember.RSVP.hash({
      dishes: this.store.findAll('dish'),
      categories: this.store.findAll('chef-category'),
    });
  },
  setupController(controller, models) {
    controller.setProperties(models);
  },

  actions: {
    deleteDish(data){
      return data.destroyRecord()
      .then(() => {
        return this.store.reloadAll();
      })
      .then(() => {
        return Materialize.toast('Update success', 4000, 'teal');
      });
    },
    updateDish(data){
      return data.save()
      .then(() => {
        return Materialize.toast('Update success', 4000, 'teal');
      })
      .catch(() => {
        return Materialize.toast('Error', 4000, 'red');
      });
    },
    newDish(data){
      console.log(data);
      // let category = this.store.findRecord('productCategory', data.productCategoryId);
      let newPro = this.store.createRecord('dish', data);
      // return this.store.findRecord('productCategory', data.productCategoryId)
      return newPro.save()
      // .then((category) => {
      //   return newPro.set('productCategory', category)
      // })
      .then(() => {
        return Materialize.toast('Update success', 4000, 'teal');
      })
      .catch((err) => {
        return Materialize.toast(err, 4000, 'red');
      });
    },
  }

});
