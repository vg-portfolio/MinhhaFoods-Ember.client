import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('home-page/contact-page', 'Integration | Component | home page/contact page', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{home-page/contact-page}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#home-page/contact-page}}
      template block text
    {{/home-page/contact-page}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
