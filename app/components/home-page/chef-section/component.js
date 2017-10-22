import Ember from 'ember';

export default Ember.Component.extend({

  selectedCat: null,

  selectedContent: Ember.computed.filter('dishes', function(item) {
    if (this.get('selectedCat') === null) {
      return true;
    }
    return item.get('chefCategory').content.data.catType === this.get('selectedCat');
  }).property('selectedCat'),

    actions: {
      showSelectedContent(category){
        this.set('selectedCat', category);
      }//showProducts
    }
});
