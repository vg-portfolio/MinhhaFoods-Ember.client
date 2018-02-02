import Ember from 'ember';
import InViewportMixin from 'ember-in-viewport';

export default Ember.Component.extend(InViewportMixin, {
  cat: [],
  // selectedCat: null,
  toggleLang: Ember.inject.service(),

  selectedContent: Ember.computed.filter('cat', function(item) {
    // if (this.get('selectedCat') === null) {
    //   return true;
    // }
    console.log(item);
    return item;
  }).property('cat'),

    actions: {
      showSelectedContent(category){
        let dishes = category.get('dishes');
        this.set('cat', dishes);
      }//showProducts
    }
});
