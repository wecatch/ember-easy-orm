import Ember from 'ember';

export default Ember.Route.extend({
    model(){
        return [];
    },
    actions: {
        save(model){
            this.store.save('user', model, {dataType: 'text'});
        },
        create(){
            let record = this.store.createRecord('user', {name: 'hello world', gender: 'f'});
            this.store.save('user', record);
        },
        remove(model){
            this.store.deleteRecord('user', model);
            this.controller.get('model').removeObject(model);
        },

        modelPut(){
            this.store.save('user', {'_id':1, name: 'name', gender: 'f'}).then(data=>{
                 this.controller.set('message', `model put call response ${JSON.stringify(data)}`);
            });
        },  
        modelGet(){
            this.store.find('user').then(data=>{
                this.controller.set('message', `model get call response ${JSON.stringify(data)}`);
            });
        },
        modelDelete(){
            this.store.deleteRecord('user', 1).then(data=>{
                this.controller.set('message', `model delete call response ${JSON.stringify(data)}`);
            });
        },
        modelPost(){
            this.store.save('user', {name: 'name', gender: 'f'}).then(data=>{
                this.controller.set('message', `model post call response ${JSON.stringify(data)}`);
            });
        },
        modelAjaxFail(){
            this.store.modelFor('user').ajax('put', '/v1/user/1').then(data=>{
                this.controller.set('message', `model ajax call response ${JSON.stringify(data)}`);
            }).catch(reason=>{
                this.controller.set('message', `model ajax call response ${reason}`);
            });
        },
        modelAjaxSuccess(){
            this.store.modelFor('user').ajax('put', '/v1/user_json/1').then(data=>{
                this.controller.set('message', `model ajax call response ${JSON.stringify(data)}`);
            }).catch(reason=>{
                this.controller.set('message', `model ajax call response ${reason}`);
            });
        },
    }
});