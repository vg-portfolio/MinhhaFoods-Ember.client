import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findAll('news-section')
    .then((record) => {
      return record.get('firstObject');
    });
  },

  actions: {
    saveSection(model){
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
