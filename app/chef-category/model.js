import DS from 'ember-data';

export default DS.Model.extend({
  catType: DS.attr('string'),
  catTypeVn: DS.attr('string'),
  description: DS.attr('string'),
  descriptionVn: DS.attr('string'),
  chefSection: DS.belongsTo('chef-section'),
  imageUrl: DS.attr('string'),
  dishes: DS.hasMany('dish')
});
