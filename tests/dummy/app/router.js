import EmberRouter from '@ember/routing/router';
import config from 'dummy/config/environment';

export default class Router extends EmberRouter {
    location = config.locationType;
    rootURL = config.rootURL;
}

Router.map(function () {
    this.route('ember-easy-orm', function () {
        this.route('form');
        this.route('store');
    });
});
Router.map(function () {});
