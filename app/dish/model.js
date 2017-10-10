import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  titleVn: DS.attr('string'),
  youtubeLink: DS.attr('string'),
  dishDate: DS.attr('string'),
  category: DS.belongsTo('category')
});
