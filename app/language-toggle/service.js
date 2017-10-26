import Ember from 'ember';

export default Ember.Service.extend({
  viet: null,

  init() {
  this._super(...arguments);
  this.set('viet', false);
},
  toggleLang(){
    this.set('viet', true);
    console.log('language toggled');
  }
});
