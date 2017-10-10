import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  titleVn: DS.attr('string'),
  description: DS.attr('string'),
  descriptionVn: DS.attr('string'),
  companyName: DS.attr('string'),
  companyNameVn: DS.attr('string'),
  tel: DS.attr('string'),
  fax: DS.attr('string'),
  hotline: DS.attr('string'),
  address: DS.attr('string'),
  fbLink: DS.attr('string'),
});
