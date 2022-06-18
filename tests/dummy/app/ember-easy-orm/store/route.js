import Route from '@ember/routing/route';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default Route.extend({
    store: service('store'),
    model() {
        return this.store.find('user');
    },
    @action
    storePut() {
        let user = this.store.modelFor('user');
        this.store.request.parent === user.request.parent;
        this.store.request.parent === this.strore;
        user.request.parent === user;
        this.store.request
            .put('/v1/user/1', { dataType: 'text' })
            .then((data) => {
                this.controller.set(
                    'message',
                    `store put call response ${JSON.stringify(data)}`
                );
            });
    },
    @action
    storeGet() {
        this.store.request.get('/v1/user').then((data) => {
            this.controller.set(
                'message',
                `store get call response ${JSON.stringify(data)}`
            );
        });
    },
    @action
    storeDelete() {
        this.store.request
            .delete('/v1/user/1', { dataType: 'text' })
            .then((data) => {
                this.controller.set(
                    'message',
                    `store delete call response ${JSON.stringify(data)}`
                );
            });
    },
    @action
    storePost() {
        this.store.request
            .post('/v1/user', {
                data: { name: 'name', gender: 'f' },
                dataType: 'text',
            })
            .then((data) => {
                this.controller.set(
                    'message',
                    `store post call response ${JSON.stringify(data)}`
                );
            });
    },
    @action
    storeAjaxFail() {
        this.store
            .ajax('put', '/v1/user/1')
            .then((data) => {
                this.controller.set(
                    'message',
                    `store ajax call response ${JSON.stringify(data)}`
                );
            })
            .catch((reason) => {
                this.controller.set(
                    'message',
                    `store ajax call response ${reason}`
                );
            });
    },
    @action
    errorRequest() {
        this.store
            .ajax('put', '/v1/404/1')
            .then((data) => {
                this.controller.set(
                    'message',
                    `store ajax call response ${JSON.stringify(data)}`
                );
            })
            .catch((reason) => {
                this.controller.set(
                    'message',
                    `store ajax call response ${reason}`
                );
            });
    },
    @action
    storeAjaxSuccess() {
        this.store
            .ajax('put', '/v1/user/1', { dataType: 'text' })
            .then((data) => {
                this.controller.set(
                    'message',
                    `store ajax call response ${JSON.stringify(data)}`
                );
            })
            .catch((reason) => {
                this.controller.set(
                    'message',
                    `store ajax call response ${reason}`
                );
            });
    },
});
