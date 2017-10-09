import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('home-page/chef-section', 'Integration | Component | home page/chef section', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{home-page/chef-section}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#home-page/chef-section}}
      template block text
    {{/home-page/chef-section}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
