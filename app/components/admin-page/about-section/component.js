import Ember from 'ember';

export default Ember.Component.extend({
  isformShown: false,
  newAward: {},

  actions: {
    showForm(){
      this.set('isformShown', true);
    },
    cancel(){
      this.set('isformShown', false);
    },
    update(){
      this.sendAction('update', this.get('aboutSection'));
    },
    updateHis(){
      this.sendAction('updateHisWhy', this.get('history'), this.get('whyU'));
    },
    create(data){
      this.sendAction('create', data);
      this.set('newAward', {});
      this.set('isformShown', false);
    },

  }
});
