import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement(){
    Ember.$('.carousel').carousel({
      numVisible: 3
    });
  },

  actions: {
    scrollLeft(){
      Ember.$('.carousel').carousel('prev', 1);
    },
    scrollRight(){
      Ember.$('.carousel').carousel('next', 1);
    },
    closeModal(){
      this.sendAction('closeModal');
    }
  }
});
