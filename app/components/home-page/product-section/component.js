import Ember from 'ember';
import InViewportMixin from 'ember-in-viewport';

export default Ember.Component.extend(InViewportMixin, {
  toggleLang: Ember.inject.service(),

  selectedCat: null,
  modalIsOpen: false,
  displayedObject: {},

  sortedSelected: Ember.computed.sort('products', 'sortProperty'),
  sortProperty: ['title:asc'],

  didEnterViewport(){
    this.$('.product-section-container').toggle(1000);
    this.$('.product-section').toggle(1500);
  },

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
