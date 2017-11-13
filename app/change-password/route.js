import Ember from 'ember';

export default Ember.Route.extend({
  auth: Ember.inject.service(),
  flashMessages: Ember.inject.service(),

  actions: {
    changePassword (passwords) {
      this.get('auth').changePassword(passwords)
      .then(() => {
        Materialize.toast('Your password has been changed', 3000, 'blue');
      })
      .then(() => {
        Materialize.toast('Please sign back in', 3000, 'blue');
      })
      .then(() => this.get('auth').signOut())
      .then(() => this.transitionTo('sign-in'))
      .catch((err) => {
        Materialize.toast(err, 5000, 'red');
      });
    },
  },
});
