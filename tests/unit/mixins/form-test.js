import Ember from 'ember';
import {formComponent, godForm} from 'ember-easy-orm/mixins/form';
import { module, test } from 'qunit';

module('Unit | Mixin | ajax');

// Replace this with your real tests.
test('formComponent object init', function(assert) {
    let FormObject = Ember.Object.extend(formComponent);
    let subject = FormObject.create();
    assert.ok(subject);
});


test('godForm object init', function(assert) {
    let GodFormObject = Ember.Object.extend(godForm);
    let subject = GodFormObject.create();
    assert.ok(subject);
});