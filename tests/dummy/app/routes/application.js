import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class ApplicationRoute extends Route {
  @service router;

  redirect() {
    this.router.transitionTo('ember-easy-orm.index');
  }
}
