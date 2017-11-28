import Ember from 'ember';

export default Ember.Component.extend({

  selectedCat: null,
  modalIsOpen: false,
  displayedObject: {},

  selectedContent: Ember.computed.filter('products', function(item) {
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
