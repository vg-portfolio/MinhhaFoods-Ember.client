import Ember from 'ember';

export default Ember.Component.extend({
  newObject: {},
  isCatFormShown: false,
  isFormShown: false,
  isAwardFormShown: false,
  // showForm: null,

  actions: {
    save(){
      this.sendAction('save', this.get('newObject'));
      this.set('newObject', {});
      this.set('isFormShown', false);
    },
    update(data){
      this.sendAction('update', data)
    },
    new(){
      let whichForm = this.get('whichForm');
      this.set('isFormShown', true);
      // this.set('showForm', whichForm);
    },
    closeForm(){
      this.set('isFormShown', false);
      this.set('newObject', {});
    },
    delete(data){
      this.sendAction('delete', data);
    }
  }
});
