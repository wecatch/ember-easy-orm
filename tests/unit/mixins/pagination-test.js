import Route from '@ember/routing/route';
import Controller from '@ember/controller';
import {
  paginationRoute,
  paginationController,
} from 'ember-easy-orm/mixins/pagination';
import { module, test } from 'qunit';

module('Unit | Mixin | pagination');

// Replace this with your real tests.
test('pagination object init', function (assert) {
  let PaginationRoute = Route.extend(paginationRoute);
  let subject = PaginationRoute.create();
  assert.ok(subject);
});

// Replace this with your real tests.
test('pagination object init', function (assert) {
  let PaginationController = Controller.extend(paginationController);
  let subject = PaginationController.create();
  assert.ok(subject);
});
