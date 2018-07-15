import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('home-page/product-section/product-modal', 'Integration | Component | home page/product section/product modal', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{home-page/product-section/product-modal}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#home-page/product-section/product-modal}}
      template block text
    {{/home-page/product-section/product-modal}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
