import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findAll('history')
    .then((item) => {
      return item.get('firstObject');
    });
  },

  actions: {
    saveHistory(history){
      history.save()
      .then(() => {
        console.log("history saved");
      });
    },
  }
});
