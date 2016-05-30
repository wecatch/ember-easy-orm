import Ember from 'ember';

export default Ember.Route.extend({
    model(){
        return this.store.find('user');
    },
    actions: {
        storePut(){
            let user = this.store.modelFor('user');
            console.log(this.store.request.parent === user.request.parent);
            console.log(this.store.request.parent == this.strore);
            console.log(user.request.parent == user);

            this.store.request.put('/v1/user/1', {dataType: 'text'}).then(function(data){
                console.log(`store put call response ${data}`);
            })
        },
        storeGet(){
            this.store.request.get('/v1/user').then(data=>{
                console.log(`store get call response ${data}`);
                this.controller.set('storeModel', data);
            })
        },
        storeDelete(){
            this.store.request.delete('/v1/user/1', {dataType: 'text'}).then(function(data){
                console.log(`store delete call response ${data}`);
            })
        },
        storePost(){
            this.store.request.post('/v1/user', {data: {name: 'name', gender: 'f'}, dataType: 'text'}).then(function(data){
                console.log(`store delete call response ${data}`);
            })
        },
        storeAjaxFail(){
            this.store.ajax('put', '/v1/user/1').then(function(data){
                console.log(`store ajax call response ${data}`);
            }).catch(function(reason){
                console.error(`store ajax call response ${reason}`);
            });
        },
        errorRequest(){
            this.store.ajax('put', '/v1/404/1').then(function(data){
                console.log(`store ajax call response ${data}`);
            }).catch(function(reason){
                console.error(`store ajax call response ${reason}`);
            });
        },
        storeAjaxSuccess(){
            this.store.ajax('put', '/v1/user/1', {dataType: 'text'}).then(function(data){
                console.log(`store ajax call response ${data}`);
            }).catch(function(reason){
                console.error(`store ajax call response ${reason}`);
            });
        },
    }
})
