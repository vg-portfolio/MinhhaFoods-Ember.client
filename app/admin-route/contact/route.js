import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findAll('contact')
    .then((record) => {
      return record.get('firstObject');
    });
  },

  actions: {
    save(contact){
      return contact.save()
      .then(() => {
        Materialize.toast('Update success', 4000, 'teal');
      })
      .catch(() => {
        Materialize.toast('Error', 4000, 'red');
      });
    },
  }
});
