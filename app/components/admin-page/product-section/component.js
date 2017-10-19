import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    updateProSec(){
      this.sendAction('updateProductSec', this.get('productSection'));
    }
  }
});
