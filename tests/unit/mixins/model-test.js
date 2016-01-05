import Ember from 'ember';
import ModelMixin from 'ember-easy-orm/mixins/model';
import { module, test } from 'qunit';

module('Unit | Mixin | model');

// Replace this with your real tests.
test('model mixin', function(assert) {
  var ModelObject = Ember.Object.extend(ModelMixin);
  var subject = ModelObject.create();
  assert.ok(subject);
});
