import Ember from 'ember';
import AjaxMixin from '../../../mixins/ajax';
import { module, test } from 'qunit';

module('Unit | Mixin | ajax');

// Replace this with your real tests.
test('ajaxMixin object init', function(assert) {
  var AjaxObject = Ember.Object.extend(AjaxMixin);
  var subject = AjaxObject.create();
  assert.ok(subject);
  assert.equal(subject, subject.request.parent);
  assert.expect(2);
});
