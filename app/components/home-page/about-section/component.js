import Ember from 'ember';

export default Ember.Component.extend({
  isHistory: true,
  isWhyUs: false,
  isAwards: false,


  actions: {
    toggleSubLinks: function(subLink, subLink2, subLink3){
      this.set(subLink2, false);
      this.set(subLink3, false);
      this.set(subLink, true);
      console.log(subLink);
    },
  }
});
