import Ember from 'ember';

export default Ember.Component.extend({
  auth: Ember.inject.service(),
  isAuthenticated: Ember.computed.alias('auth.isAuthenticated'),

  router: Ember.inject.service(),

  isAdminModal: false,

  actions: {
    signOut () {
      this.get('auth').signOut()
        // .then(() => this.get('store').unloadAll())
        .then(() => {
          return this.set('isAdminModal', false);
        })
        .then(() => {
          return Materialize.toast('You are signed out', 3000, 'blue');
        })
        .then(() => {
          return this.get('router').transitionTo('index');
        })
        .then(() => {
          return Ember.$('body').css('overflow-y', 'scroll');
        })
        .catch(() => {
          return Materialize.toast('Error', 3000, 'red');
        });
    },
    goDashboard(){
      return this.get('router').transitionTo('admin-route')
      .then(() => {
        return this.set('isAdminModal', false);
      })
      .then(() => {
        Ember.$('body').css('overflow-y', 'scroll');
      });
    },
    goReset(){
      return this.get('router').transitionTo('change-password')
      .then(() => {
        return this.set('isAdminModal', false);
      })
      .then(() => {
        Ember.$('body').css('overflow-y', 'scroll');
      });
    },
    goIndex(){
      return this.get('router').transitionTo('index')
      .then(() => {
        return this.set('isAdminModal', false);
      })
      .then(() => {
        Ember.$('body').css('overflow-y', 'scroll');
      });
    },
    adminModal(){
      this.set('isAdminModal', true);
      Ember.$('body').css('overflow-y', 'hidden');
    },
    closeModal(){
      Ember.$('body').css('overflow-y', 'scroll');
      this.set('isAdminModal', false);
    }
  }
});
