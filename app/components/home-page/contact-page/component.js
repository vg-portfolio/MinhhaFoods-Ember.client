import Ember from 'ember';

export default Ember.Component.extend({
  router: Ember.inject.service(),

  actions: {
    scrollTo(section, transition, model){
      if (section === null) {
        this.get('router').transitionTo(transition, model)
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
