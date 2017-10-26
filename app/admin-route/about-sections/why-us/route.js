import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findAll('why-u')
    .then((why) => {
      return why.get('firstObject');
    });
  },

  actions: {
    saveWhy(data){
      return data.save()
      .then(() => {
        console.log("why saved");
      });
    }
  }
});
