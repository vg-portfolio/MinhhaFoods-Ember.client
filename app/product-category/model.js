import DS from 'ember-data';

export default DS.Model.extend({
  catType: DS.attr('string'),
  description: DS.attr('string'),
  productSection: DS.belongsTo('product-section'),
  products: DS.hasMany('product')
});
