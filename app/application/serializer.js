import DS from 'ember-data';
import Ember from 'ember';
import {ActiveModelSerializer} from 'active-model-adapter';
const { underscore } = Ember.String;

export default ActiveModelSerializer.extend({
  // modelNameFromPayloadKey(modelName) {
  //   return singularize(modelName);
  // }
  // keyForAttribute: function(attr) {
  //   return underscore(attr);
  // },
  //
  // keyForRelationship: function(rawKey) {
  //   return underscore(rawKey);
  // }

  // keyForAttribute: function(attr) {
  //   return Ember.string.underscore(attr);
  // },

  // keyForRelationship: function(rawKey) {
  //   return underscore(rawKey);
  // }

});
