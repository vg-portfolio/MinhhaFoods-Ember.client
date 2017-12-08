import Ember from 'ember';

export default Ember.Component.extend({
    toggleLang: Ember.inject.service(),
    showViet: false,

    actions: {
      toggleViet(lang){
        this.toggleProperty('showViet');
        this.sendAction('toggleViet');
      }
    }
});
