import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('input-fields/password-confirmation-input', 'Integration | Component | input fields/password confirmation input', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{input-fields/password-confirmation-input}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#input-fields/password-confirmation-input}}
      template block text
    {{/input-fields/password-confirmation-input}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
