import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  titleVn: DS.attr('string'),
  youtubeLink: DS.attr('string'),
  details: DS.attr('string'),
  detailsVn: DS.attr('string'),
  // chefCategoryId: DS.attr('string'),
  chefCategory: DS.belongsTo('chefCategory')
});
