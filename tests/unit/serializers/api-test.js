import { module, test } from 'qunit';
import { setupTest } from 'ember-easy-orm/tests/helpers';

module('Unit | Serializer | api', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let serializer = store.serializerFor('api');

    assert.ok(serializer);
  });

  test('it serializes records', function (assert) {
    let store = this.owner.lookup('service:store');
    let record = store.createRecord('api', {});

    let serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
