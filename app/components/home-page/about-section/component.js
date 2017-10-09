import Ember from 'ember';

export default Ember.Component.extend({
  isHistory: true,
  isWhyUs: false,
  isAwards: false,


  actions: {
    toggleSubLinks: function(subLink, subLink2, subLink3){
      this.set(subLink2, false);
      this.set(subLink3, false)
      this.set(subLink, true);
      console.log(subLink);
    },


    toggleHistory(){
      this.toggleSubLinks('isHistory');
    },
    toggleWhyUs(){
      this.toggleProperty('isWhyUs');
      console.log("toggled why Us");
    },
    toggleAwards(){
      this.toggleProperty('isAwards');
      console.log("toggled awards");
    }
  }
});
