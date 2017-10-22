import DS from 'ember-data';

export default DS.Model.extend({
  catType: DS.attr('string'),
  description: DS.attr('string'),
  chefSection: DS.belongsTo('chef-section'),
  dishes: DS.hasMany('dish')
});
