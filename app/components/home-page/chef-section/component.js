import Ember from 'ember';
// import InViewportMixin from 'ember-in-viewport';

export default Ember.Component.extend({
  toggleLang: Ember.inject.service(),

  actions: {
    showSelectedContent(category){
      let dishes = category.get('dishes');
      this.set('cat', dishes);
    }//showProducts
  }
});
