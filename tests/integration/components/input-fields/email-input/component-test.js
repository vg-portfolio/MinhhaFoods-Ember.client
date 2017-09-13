import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('input-fields/email-input', 'Integration | Component | input fields/email input', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{input-fields/email-input}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#input-fields/email-input}}
      template block text
    {{/input-fields/email-input}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
