import Ember from 'ember';

export default Ember.Component.extend({

  selectedCat: null,

  modalIsOpen: false,

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
    showModal(){
      this.set('modalIsOpen', true);
      Ember.$('body').css('overflow-y', 'hidden');
      console.log(this.get('modalIsOpen'));
    },
    closeModal(){
      this.set('modalIsOpen', false);
      Ember.$('body').css('overflow-y', 'scroll');
    }
  }
});
