import ENV from 'minh-ha-foods/config/environment';
import ActiveModelAdapter from 'active-model-adapter';

import Ember from 'ember';

export default ActiveModelAdapter.extend({
  host: ENV.apiHost,

  auth: Ember.inject.service(),

  headers: Ember.computed('auth.credentials.token', {
    get () {
      let headers = {};
      const token = this.get('auth.credentials.token');
      if (token) {
        headers.Authorization = `Token token=${token}`;
      }

      return headers;
    },
  }),


  // allows the multiword paths in urls to be underscored
  // pathForType: function(type) {
  //   let underscored = Ember.String.underscore(type);
  //   return Ember.String.pluralize(underscored);
  // },

  // allows queries to be sent along with a findRecord
  // hopefully Ember / EmberData will soon have this built in
  // ember-data issue tracked here:
  // https://github.com/emberjs/data/issues/3596
  // urlForFindRecord(id, modelName, snapshot) {
  //   let url = this._super(...arguments);
  //   let query = Ember.get(snapshot, 'adapterOptions.query');
  //   if(query) {
  //     url += '?' + Ember.$.param(query);
  //   }
  //   return url;
  // }
});
