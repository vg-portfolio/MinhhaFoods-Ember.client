import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findAll('product-section')
    .then((product) => {
      return product.get('firstObject');
    });
  },

  actions: {
    saveProSection(model){
      return model.save()
      .then(() => {
        return Materialize.toast('Update success', 4000, 'teal');
      })
      .catch(() => {
        return Materialize.toast('Error', 4000, 'red');
      });
    },

  }
});
