import Ember from 'ember';

export default Ember.Component.extend({
    toggleLang: Ember.inject.service(),
    showViet: false,

    // didInsertElement(){
    //   this.$('.banner-image').hide().fadeIn(2000);
    // },

    actions: {
      toggleViet(lang){
        this.toggleProperty('showViet');
        this.sendAction('toggleViet');
      }
    }
});
