import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  titleVn: DS.attr('string'),
  description: DS.attr('string'),
  descriptionVn: DS.attr('string'),
  history: DS.belongsTo('history'),
  whyU: DS.belongsTo('why-u'),
  awards: DS.hasMany('award')
});
