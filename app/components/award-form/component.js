import Ember from 'ember';

export default Ember.Component.extend({
  newAward: {},
  awardFormShown: false,

  actions: {
    save(){
      this.sendAction('save', this.get('newAward'));
      this.set('newAward', {});
      this.set('awardFormShown', false);
    },
    addNewAward(){
      this.set('awardFormShown', true);
    },
    closeForm(){
      this.set('awardFormShown', false);
      this.set('newAward', {});
    },
    delete(data){
      this.sendAction('delete', data);
    }
  }
});
