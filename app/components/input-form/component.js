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
      // console.log(data);
      this.sendAction('update', data);
      this.set('newObject', {});
    },
    new(){
      this.set('isFormShown', true);
      this.set('newObject', {});
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
