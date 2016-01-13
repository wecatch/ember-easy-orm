import Ember from 'ember';
import {formComponent, godForm} from 'ember-easy-orm/mixins/form';
import { module, test } from 'qunit';

module('Unit | Mixin | form');

// Replace this with your real tests.
test('formComponent object init', function(assert) {
    let FormObject = Ember.Object.extend(formComponent);
    let subject = FormObject.create({modelName: 'user'});
    assert.ok(subject);
});


test('godForm object init', function(assert) {
    let GodFormObject = Ember.Object.extend(godForm);
    let subject = GodFormObject.create({modelName: 'user'});
    assert.ok(subject);
});