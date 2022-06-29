/* eslint-disable ember/no-mixins */
import { Form, GodForm } from 'ember-easy-orm/mixins/form';
import { module, test } from 'qunit';

module('Unit | Mixin | form');

// Replace this with your real tests.
test('formComponent object init', function (assert) {
  let subject = new Form();
  assert.ok(subject);
});

test('godForm object init', function (assert) {
  let subject = new GodForm();
  // assert.strictEqual(subject.modelName, 'user');
  assert.ok(subject);
});
