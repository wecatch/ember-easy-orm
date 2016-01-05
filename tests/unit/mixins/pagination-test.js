import Ember from 'ember';
import {paginationRoute, paginationController} from 'ember-easy-orm/mixins/pagination';
import { module, test } from 'qunit';

module('Unit | Mixin | ajax');

// Replace this with your real tests.
test('pagination object init', function(assert) {
    let PaginationRoute = Ember.Route.extend(paginationRoute);
    let subject = PaginationRoute.create();
    assert.ok(subject);
});

// Replace this with your real tests.
test('pagination object init', function(assert) {
    let PaginationController = Ember.Controller.extend(paginationController);
    let subject = PaginationController.create();
    assert.ok(subject);
});