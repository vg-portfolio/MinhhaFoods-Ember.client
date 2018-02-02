import Ember from 'ember';
import InViewportMixin from 'ember-in-viewport';

export default Ember.Component.extend(InViewportMixin, {
  router: Ember.inject.service(),

  didEnterViewport(){
    this.$('.contact-section').toggle(2000);
  },

  actions: {
    scrollTo(section, transition, model){
      if (section === null) {
        this.get('router').transitionTo(transition, model);
      } else {
        let target = Ember.$(section);
        console.log(target);
        event.preventDefault();
        Ember.$('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
        console.log("done");
      }
      }
  }
  // chefCat: [],
  // productCat: [],
  //
  // loadCategories: function(){
  //    this.get('categories').forEach((item) => {
  //     if (item.data.categorizableType === 'ChefSection') {
  //       this.get('chefCat').pushObject(item);
  //     } else {
  //       this.get('productCat').pushObject(item);
  //     }
  //   });
  // }.on('init'),
});
