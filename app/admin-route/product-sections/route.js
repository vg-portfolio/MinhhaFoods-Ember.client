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
        console.log("update product section success");
      });
    },

  }
});
