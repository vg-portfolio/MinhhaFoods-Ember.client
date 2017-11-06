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
        return Materialize.toast('Update success', 4000, 'teal');
      })
      .catch(() => {
        return Materialize.toast('Error', 4000, 'red');
      });
    }
  }
});
