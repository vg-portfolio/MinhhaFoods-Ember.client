import Ember from 'ember';

export default Ember.Service.extend({
  showViet: false,

  init() {
    this._super(...arguments);
  },

  toggleViet() {
    this.toggleProperty('showViet');
    console.log(this.get('showViet'));
  },

});
