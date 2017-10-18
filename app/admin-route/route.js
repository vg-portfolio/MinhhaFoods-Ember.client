import Ember from 'ember';

export default Ember.Route.extend({
  auth: Ember.inject.service(),
  isAuthenticated: Ember.computed.alias('auth.isAuthenticated'),

//Checks to see if user is logged in before tranisitoning to admin route
//Create mixin for this
  beforeModel(){
    if (this.get('isAuthenticated')) {
      this.transitionTo('admin-route');
    } else{
      this.transitionTo('sign-in');
    }
  },

  model() {
    return Ember.RSVP.hash({
      aboutSection: this.store.findAll('about-section')
      .then((about) => {
        return about.get('firstObject');
      }),
      history: this.store.findAll('history')
      .then((history) => {
        return history.get('firstObject');
      }),
      whyU: this.store.findAll('why-u')
      .then((why) => {
        return why.get('firstObject');
      }),
      awards: this.store.findAll('award'),
      productSection: this.store.findAll('product-section')
      .then((productSection) => {
        return productSection.get('firstObject');
      }),
      categories: this.store.findAll('category'),
      products: this.store.findAll('product'),
      chefSection: this.store.findAll('chef-section')
      .then((chefSection) => {
        return chefSection.get('firstObject');
      }),
      dishes: this.store.findAll('dish'),
      newsSection: this.store.findAll('news-section')
      .then((section) => {
        return section.get('firstObject');
      }),
      newsPosts: this.store.findAll('news-post'),
      contact: this.store.findRecord('contact', 1)
    })
    .catch((error) => {
      console.log(error);
    });
  },

  setupController(controller, models) {
    // controller.set('aboutSection', models.aboutSection);
    // controller.set('history', models.history);
    // controller.set('whyU', models.whyU);
    // controller.set('awards', models.awards)
    // controller.set('productSection', models.productSection);
    // or, more concisely:
    controller.setProperties(models);
  },

  actions: {
    updateAboutSec(data){
      return data.save()
      .then((updatedData) => {
        console.log(updatedData);
      });
    },
    //updateHistory(){}
    updateHistory(history, whyU){
      history.save()
      .then(() =>{
        console.log("history Success");
      })
      .catch((err) => {
        console.log(err);
      });
      whyU.save()
      .then(() =>{
        console.log("why us Success");
      })
      .catch((err) => {
        console.log(err);
      });
    },

    createAwards(data){
      let newAward = this.get('store').createRecord('award', data);
      newAward.save()
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
    },

    //updateAwards(){},
  }

});
