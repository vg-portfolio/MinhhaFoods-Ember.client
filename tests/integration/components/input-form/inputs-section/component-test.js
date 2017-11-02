import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('input-form/inputs-section', 'Integration | Component | input form/inputs section', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{input-form/inputs-section}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#input-form/inputs-section}}
      template block text
    {{/input-form/inputs-section}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
