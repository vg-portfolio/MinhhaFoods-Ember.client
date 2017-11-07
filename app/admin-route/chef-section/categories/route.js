import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findAll('chef-category');
  },

  actions: {
    updateCat(data){
      return data.save()
      .then(() => {
        return Materialize.toast('Update success', 4000, 'teal');
      })
      .catch(() => {
        return Materialize.toast('Error', 4000, 'red');
      });
    },
    newCat(data){
      let newCat = this.store.createRecord('chefCategory', data);
      return newCat.save()
      .then(() => {
        return Materialize.toast('Update success', 4000, 'teal');
      })
      .catch(() => {
        return Materialize.toast('Error', 4000, 'red');
      });
    },

    deleteCat(data){
      return data.destroyRecord().
      then(() => {
        this.store.reloadAll();
      })
      .then(() => {
        return Materialize.toast('Update success', 4000, 'teal');
      })
      .catch(() => {
        return Materialize.toast('Error', 4000, 'red');
      });
    },

  }
});
