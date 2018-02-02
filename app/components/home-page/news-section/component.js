import Ember from 'ember';
import InViewportMixin from 'ember-in-viewport';

export default Ember.Component.extend(InViewportMixin, {
  toggleLang: Ember.inject.service(),

  didEnterViewport(){
    this.$('.news-section').toggle(2000);
  },
});
