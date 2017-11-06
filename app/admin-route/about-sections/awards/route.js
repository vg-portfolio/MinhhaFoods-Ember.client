import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findAll('award');
  },

  actions: {
    updateAward(award){
      return award.save()
      .then(() => {
        return Materialize.toast('Update success', 4000, 'teal');
      })
      .catch(() => {
        return Materialize.toast('Error', 4000, 'red');
      });
    },

    newAward(data){
      let newAward = this.store.createRecord('award', data);
      return newAward.save()
      .then(() => {
        return Materialize.toast('New award saved!', 4000, 'teal');
      })
      .catch(() => {
        return Materialize.toast('Error', 4000, 'red');
      });
    },

    deleteAward(data){
      return data.destroyRecord()
      .then(() => {
        return Materialize.toast('Delete success', 4000, 'teal');
      })
      .then(() => {
        this.get('store').reloadAll();
      });
    }


  }
});
