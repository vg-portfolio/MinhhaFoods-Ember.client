import Ember from 'ember';
const {
  Component,
  run
  } = Ember;
  
export default Ember.Component.extend({
  tagName: '',

  wait: 0,
  shouldRender: false,
  _renderTimer: null,
  load: null,
  model: null,

  didInsertElement() {
    this._renderTimer = run.later(() => {
      this.get('load')().then((data) => {
        if (!this.get('isDestroyed')) {
          this.set('shouldRender', true);
          this.set('model', data);
        }
      });
    }, this.get('wait'));
  },

  willDestroy() {
    this._super();
    run.cancel(this._renderTimer);
  }
});
