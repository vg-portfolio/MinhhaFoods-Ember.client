import Ember from 'ember';

export default Ember.Component.extend({
  auth: Ember.inject.service(),

  user: Ember.computed.alias('auth.credentials.email'),
  isAuthenticated: Ember.computed.alias('auth.isAuthenticated'),

  language: Ember.inject.service('language-toggle'),
  router: Ember.inject.service(),

  actions: {
    signOut () {
      this.sendAction('signOut');
    },
    linkToIndex() {
      this.get('router').transitionTo('application');
    },
    toggleLang(){
      this.get('language').toggleLang();
    },

    scrollTo(section){
      let target = Ember.$(section);
      console.log(target);
      event.preventDefault();
      Ember.$('html, body').stop().animate({
          scrollTop: target.offset().top
      }, 1000);
      console.log("done");
    }

  },
});
