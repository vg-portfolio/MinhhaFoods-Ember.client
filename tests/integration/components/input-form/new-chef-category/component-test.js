import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('input-form/new-chef-category', 'Integration | Component | input form/new chef category', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{input-form/new-chef-category}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#input-form/new-chef-category}}
      template block text
    {{/input-form/new-chef-category}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
