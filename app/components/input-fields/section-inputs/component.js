import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    save(){
      this.sendAction('save', this.get('model'));
      console.log(this.get('model.data'));
    }
  }
});
