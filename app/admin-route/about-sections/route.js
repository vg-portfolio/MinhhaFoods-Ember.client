import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findAll('about-section')
    .then((about) => {
      return about.get('firstObject');
    });
  },

  newModel: {},

  actions: {
    saveAbout(m){
      return m.save()
      .then(() => {
        Materialize.toast('Update success', 4000, 'teal');
      })
      .catch(() => {
        Materialize.toast('Error', 4000, 'red');
      });
      // newAbout.save()
      // .then(() => {
      //   return console.log("save success");
      // });
    },

  }
});
