import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findAll('award');
  },

  actions: {
    saveAward(award){
      return award.save()
      .then(() => {
        console.log("award saved!");
      });
    },

    newAward(data){
      let newAward = this.store.createRecord('award', data);
      return newAward.save()
      .then(() => {
        console.log("New award saved!");
      });
    },

    deleteAward(data){
      return data.destroyRecord()
      .then(() => {
        console.log("delete success");
      })
      .then(() => {
        this.store.reloadAll();
      });
    }


  }
});
