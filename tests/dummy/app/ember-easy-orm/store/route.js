import Ember from 'ember';

export default Ember.Route.extend({
    model(){
        return this.store.find('user');
    },
    actions: {
        storePut(){
            let user = this.store.modelFor('user');
            console.log(this.store.request.parent === user.request.parent);
            console.log(this.store.request.parent === this.strore);
            console.log(user.request.parent === user);

            this.store.request.put('/v1/user/1', {dataType: 'text'}).then(data=>{
                this.controller.set('message', `store put call response ${JSON.stringify(data)}`);
            });
        },
        storeGet(){
            this.store.request.get('/v1/user').then(data=>{
                this.controller.set('message', `store get call response ${JSON.stringify(data)}`);
            });
        },
        storeDelete(){
            this.store.request.delete('/v1/user/1', {dataType: 'text'}).then(data=>{
                this.controller.set('message', `store delete call response ${JSON.stringify(data)}`);
            });
        },
        storePost(){
            this.store.request.post('/v1/user', {data: {name: 'name', gender: 'f'}, dataType: 'text'}).then(data=>{
                this.controller.set('message', `store post call response ${JSON.stringify(data)}`);
            });
        },
        storeAjaxFail(){
            this.store.ajax('put', '/v1/user/1').then(data=>{
                this.controller.set('message', `store ajax call response ${JSON.stringify(data)}`);
            }).catch(reason=>{
                this.controller.set('message', `store ajax call response ${reason}`);
            });
        },
        errorRequest(){
            this.store.ajax('put', '/v1/404/1').then(data=>{
                this.controller.set('message', `store ajax call response ${JSON.stringify(data)}`);
            }).catch(reason=>{
                this.controller.set('message', `store ajax call response ${reason}`);
            });
        },
        storeAjaxSuccess(){
            this.store.ajax('put', '/v1/user/1', {dataType: 'text'}).then(data=>{
                this.controller.set('message', `store ajax call response ${JSON.stringify(data)}`);
            }).catch(reason=>{
                this.controller.set('message', `store ajax call response ${reason}`);
            });
        },
    }
});
