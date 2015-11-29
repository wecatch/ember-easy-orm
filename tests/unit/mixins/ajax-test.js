import Ember from 'ember';
import AjaxMixin from '../../../mixins/ajax';
import { module, test } from 'qunit';

module('Unit | Mixin | ajax');

// Replace this with your real tests.
test('it works', function(assert) {
  var AjaxObject = Ember.Object.extend(AjaxMixin);
  var subject = AjaxObject.create();
  assert.ok(subject);
});
