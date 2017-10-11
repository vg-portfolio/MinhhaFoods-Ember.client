import DS from 'ember-data';

export default DS.Model.extend({
  catType: DS.attr('string'),
  description: DS.attr('string'),
  categorizableType: DS.attr(),
  productSection: DS.belongsTo('product-section', { inverse: 'categories' }),
  chefSection: DS.belongsTo('chef-section', { inverse: 'categories'}),
  products: DS.hasMany('product', { embedded: 'always' }),
  dishes: DS.hasMany('dish', { embedded: 'always' })
});
