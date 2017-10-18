import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    update(){
      this.sendAction('update', this.get('aboutSection'));
    },
    updateHis(){
      this.sendAction('updateHisWhy', this.get('history'), this.get('whyU'));
    },

  }
});
