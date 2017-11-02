import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save(data){
      this.sendAction('update', data);
    }
  }
});
