import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default Route.extend({
    store: service('store'),
    model() {
        return this.store.find('user');
    },
});
