import Ember from 'ember';

export default Ember.Component.extend({
  auth: Ember.inject.service(),

  user: Ember.computed.alias('auth.credentials.email'),
  isAuthenticated: Ember.computed.alias('auth.isAuthenticated'),
  router: Ember.inject.service(),
  language: Ember.inject.service('language-toggle'),

  didInsertElement(){
    this.$('#navbar').toggle(2500);
  },

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
//Main scroll to action
    scrollTo(section){
      this.get('router').transitionTo('index')
      .then(() => {
        let target = Ember.$(section);
        console.log(target);
        event.preventDefault();
        Ember.$('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
      });
    }
  },
});
