import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),

  // isHistory: true,
  // isWhyUs: false,
  // isAwards: false,
  awardShowing: false,
  selectedContent: [],

  actions: {
    showSelectedContent: function(selection){
      this.set('awardShowing', false);
      this.set('selectedContent', selection);
    },
    showAwards(){
      this.set('awardShowing', true);
    }
    // toggleSubLinks: function(subLink, subLink2, subLink3){
    //   this.set(subLink2, false);
    //   this.set(subLink3, false);
    //   this.set(subLink, true);
    //   console.log(subLink);
    // },
  }
});
