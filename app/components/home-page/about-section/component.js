import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  toggleLang: Ember.inject.service(),
  // isHistory: true,
  // isWhyUs: false,
  // isAwards: false,
  awardShowing: false,
  selectedContent: [],

  // ready: function(){
  //   Ember.$('.carousel').carousel();
  // }.on('didInsertElement'),

  actions: {
    showSelectedContent: function(selection){
      this.set('awardShowing', false);
      this.set('selectedContent', selection);
    },
    showAwards(){
      this.set('awardShowing', true);
      Ember.$('body').css('overflow-y', 'hidden');
    },
    closeModal(){
      this.set('awardShowing', false);
      Ember.$('body').css('overflow-y', 'scroll');
    }
  }
});
