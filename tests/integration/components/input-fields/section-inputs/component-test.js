import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('input-fields/section-inputs', 'Integration | Component | input fields/section inputs', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{input-fields/section-inputs}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#input-fields/section-inputs}}
      template block text
    {{/input-fields/section-inputs}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
