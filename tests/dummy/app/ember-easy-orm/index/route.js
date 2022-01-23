import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default Route.extend({
    model() {
        return [];
    },
    @action
    save(model) {
        this.store.save('user', model, { dataType: 'text' });
    },
    @action
    create() {
        let record = this.store.createRecord('user', {
            name: 'hello world',
            gender: 'f',
        });
        this.store.save('user', record);
    },

    @action
    remove(model) {
        this.store.deleteRecord('user', model);
        this.controller.get('model').removeObject(model);
    },
    @action
    modelPut() {
        this.store
            .save('user', { _id: 1, name: 'name', gender: 'f' })
            .then((data) => {
                this.controller.set(
                    'message',
                    `model put call response ${JSON.stringify(data)}`
                );
            });
    },
    @action
    modelGet() {
        this.store.find('user').then((data) => {
            this.controller.set(
                'message',
                `model get call response ${JSON.stringify(data)}`
            );
        });
    },
    @action
    modelDelete() {
        this.store.deleteRecord('user', 1).then((data) => {
            this.controller.set(
                'message',
                `model delete call response ${JSON.stringify(data)}`
            );
        });
    },
    @action
    modelPost() {
        this.store.save('user', { name: 'name', gender: 'f' }).then((data) => {
            this.controller.set(
                'message',
                `model post call response ${JSON.stringify(data)}`
            );
        });
    },
    @action
    modelAjaxFail() {
        this.store
            .modelFor('user')
            .ajax('put', '/v1/user/1')
            .then((data) => {
                this.controller.set(
                    'message',
                    `model ajax call response ${JSON.stringify(data)}`
                );
            })
            .catch((reason) => {
                this.controller.set(
                    'message',
                    `model ajax call response ${reason}`
                );
            });
    },
    @action
    modelAjaxSuccess() {
        this.store
            .modelFor('user')
            .ajax('put', '/v1/user_json/1')
            .then((data) => {
                this.controller.set(
                    'message',
                    `model ajax call response ${JSON.stringify(data)}`
                );
            })
            .catch((reason) => {
                this.controller.set(
                    'message',
                    `model ajax call response ${reason}`
                );
            });
    },
});
