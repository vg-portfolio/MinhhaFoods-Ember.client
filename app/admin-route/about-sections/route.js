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
      m.save();
      console.log("save action in route");
      console.log(m);
      // newAbout.save()
      // .then(() => {
      //   return console.log("save success");
      // });
    },

  }
});
