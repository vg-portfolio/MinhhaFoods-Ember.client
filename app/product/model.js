import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  titleVn: DS.attr('string'),
  volume: DS.attr('string'),
  metric: DS.attr('string'),
  imageUrl: DS.attr('string'),
  details: DS.attr('string'),
  detailsVn: DS.attr('string'),
  // productCategoryId: DS.attr('string'),
  productCategory: DS.belongsTo('productCategory')
});
