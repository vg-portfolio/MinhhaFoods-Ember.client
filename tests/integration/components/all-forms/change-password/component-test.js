import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('all-forms/change-password', 'Integration | Component | all forms/change password', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{all-forms/change-password}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#all-forms/change-password}}
      template block text
    {{/all-forms/change-password}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
