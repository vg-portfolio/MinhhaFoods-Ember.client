import { moduleForModel, test } from 'ember-qunit';

moduleForModel('admin-route/news-section', 'Unit | Serializer | admin route/news section', {
  // Specify the other units that are required for this test.
  needs: ['serializer:admin-route/news-section']
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
