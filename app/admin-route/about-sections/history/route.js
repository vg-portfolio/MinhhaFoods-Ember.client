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
        return Materialize.toast('Update success', 4000, 'teal');
      })
      .catch(() => {
        return Materialize.toast('Error', 4000, 'red');
      });
    },
  }
});
