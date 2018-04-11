import Ember from 'ember';
// import InViewportMixin from 'ember-in-viewport';

export default Ember.Component.extend({
  toggleLang: Ember.inject.service(),
  newsObject: {},

  actions: {
    showModal(object){
      console.log("show modal");
      this.set('modalIsOpen', true);
      this.set('newsObject', object);
      Ember.$('body').css('overflow-y', 'hidden');
    },
    closeModal(){
      this.set('modalIsOpen', false);
      Ember.$('body').css('overflow-y', 'scroll');
    }
  }
});
