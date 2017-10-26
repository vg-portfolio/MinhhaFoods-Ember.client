import { moduleForModel, test } from 'ember-qunit';

moduleForModel('admin-route/about-sections', 'Unit | Serializer | admin route/about sections', {
  // Specify the other units that are required for this test.
  needs: ['serializer:admin-route/about-sections']
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
