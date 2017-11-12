import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('input-form/new-award', 'Integration | Component | input form/new award', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{input-form/new-award}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#input-form/new-award}}
      template block text
    {{/input-form/new-award}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
