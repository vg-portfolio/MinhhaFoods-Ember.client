import Ember from 'ember';

export default Ember.Route.extend({
  auth: Ember.inject.service(),
  
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

      productCategories: this.store.findAll('product-category'),

      products: this.store.findAll('product'),

      chefSection: this.store.findAll('chef-section')
      .then((chefSection) => {
        return chefSection.get('firstObject');
      }),

      chefCategories: this.store.findAll('chef-category'),

      // dishes: this.store.findAll('dish'),

      newsSection: this.store.findAll('news-section')
      .then((section) => {
        return section.get('firstObject');
      }),
      newsPosts: this.store.findAll('news-post'),
      contact: this.store.findRecord('contact', 1)
    // })
    // .catch((error) => {
    //   console.log(error);
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
    signOut () {
      this.get('auth').signOut()
        // .then(() => this.get('store').unloadAll())
        .then(() => this.transitionTo('application'))
        .then(() => {
          this.get('flashMessages').warning('You have been signed out.');
        })
        .catch(() => {
          this.get('flashMessages')
          .danger('There was a problem. Are you sure you\'re signed-in?');
        });
    },
  }

});
