import Ember from 'ember';

export default Ember.Component.extend({
  toggleLang: Ember.inject.service(),

  selectedCat: null,
  modalIsOpen: false,
  displayedObject: {},

  sortedSelected: Ember.computed.sort('products', 'sortProperty'),
  sortProperty: ['title:asc'],

  selectedContent: Ember.computed.filter('sortedSelected', function(item) {
    if (this.get('selectedCat') === null) {
      return true;
    }
    return item.get('productCategory.id') === this.get('selectedCat');
  }).property('selectedCat'),

  actions: {
    showSelectedContent(category){
      if (category) {
        this.set('selectedCat', category.id);
      } else {
        this.set('selectedCat', null);
      }
    },//showProducts
    showModal(object){
      this.set('modalIsOpen', true);
      this.set('displayedObject', object);
      Ember.$('body').css('overflow-y', 'hidden');
    },
    closeModal(){
      this.set('modalIsOpen', false);
      Ember.$('body').css('overflow-y', 'scroll');
    }
  }
});
