/** 
@module mixins/form 
*/
import Ember from 'ember';

/** 
@private
@method deleteObject
*/
let deleteObject = function (selectedItem){
    if(!this.modelName){
        throw new Error(`mixin component modelName is invalid: ${this.modelName}`);
    }
    this.set('loading', true);
    this.get('store').deleteRecord(this.get('modelName'), selectedItem).then((data)=>{
        this.set('loading', false);
        this.send('success', 'delete', data, selectedItem);
    }).catch((reason)=>{
        this.set('loading', false);
        this.send('fail', 'delete', reason, selectedItem);
    });
};


/** 
godform mixin is used  for data list to create, update and delete children object 
@class godForm
**/
var godForm = Ember.Mixin.create({
    /** 
    @property modelName
    @type String
    */
    modelName: '',
    /** 
    data set, normally array
    @property model 
    @type Object
    */
    model: null,
    /** 
    current selected item
    @property selectedItem
    @type Object
    */
    selectedItem: null,
    /** 
    for modal dialog
    @property modalShow
    @type boolean
    */
    modalShow: false,
    /** 
    ajax fail reason
    @property reason
    @type String
    */
    reason: null,
    /** 
    orm store service
    @property store
    @type {object} 
    */
    store: Ember.inject.service(),
    actions: {
        /**
        create new record according to modelName
        @event add
        */
        add() {
            this.set('modalShow', true);
            this.set('selectedItem', this.get('store').createRecord(this.get('modelName')));
        },
        /**
        edit current selected item
        @event edit
        @param {Object} selectedItem
        */
        edit(selectedItem) {
            this.set('modalShow', true);
            if (!Ember.isNone(selectedItem)) {
                this.set('selectedItem', selectedItem);
            }
        },
        /**
        cancel current operation
        @event cancel
        */
        cancel(){
            this.set('modalShow', false);
        },
        /**
        remove current selected item
        @event remove
        @param {Object} selectedItem
        */
        remove(selectedItem){
            deleteObject.call(this, selectedItem);
        },
        /**
        success ajax request success callback
        @event success
        @params {String} action The current operation: create, update, delete
        @params {Object} data The response data from backend server
        @params {Object} selectedItem Thc current selected item
        */
        success(action, data, selectedItem) {
            Ember.Logger.info('subclass override this function for response data');
            this.set('modalShow', false);
            if(this.sendAction) {
                this.sendAction('success', action, data, selectedItem);
            }

            if(!this.model.contains(selectedItem)){
                this.model.insertAt(0, selectedItem);
            }

            if(action === 'delete'){
                this.model.removeObject(selectedItem);
            }
        },
        /**
        fail ajax request success callback
        @event fail
        @params {string} action The current operation: create, update, delete
        @params {Object} reason The ajax request response
        @params {Object} selectedItem Thc current selected item
        */
        fail(action, reason, selectedItem) {
            Ember.Logger.info('subclass override this function for fail request');
            this.set('reason', reason);
            if(this.sendAction) {
                this.sendAction('fail', action, reason, selectedItem);
            }
        },
    }
});


var formComponent = Ember.Mixin.create({
    modelName: '',
    model: null,
    store: Ember.inject.service(),
    reason: null,
    actions: {
        /**
         * @function save triggle when user click save action
         * @returns  void
         */
        save() {
            if(!this.modelName){
                throw new Error(`mixin formComponent modelName is invalid: ${this.modelName}`);
            }
            this.set('loading', true);
            if (!this.validate()) {return;}
            let primaryKey = this.get('store').modelFor(this.modelName).primaryKey;
            let actionName = Ember.get(this.model, primaryKey) ? 'update' : 'create';
            this.get('store').save(this.get('modelName'), this.get('model')).then((data)=>{
                this.set('loading', false);
                this.send('success', actionName, data);
            }).catch((reason)=>{
                this.set('loading', false);
                this.send('fail', actionName, reason);
            });
        },

        /**
         * @function delete triggle when user click save action
         * @returns  void
         */
        remove() {
            deleteObject.call(this, this.get('model'));
        },

        /**
         * @function  success ajax request success callback
         * @returns  void
         */
        success(action, data) {
            Ember.Logger.info('subclass override this function for response data');
            if((action === 'create'|| action === 'update') && data){
                Ember.setProperties(this.model, data);
            }
            this.sendAction('success', action, data, this.get('model'));
        },
        /**
         * @function  success ajax request success callback
         * @returns  void
         */
        fail(action, reason) {
            Ember.Logger.info('subclass override this function for fail request');
            this.set('reason', reason);
            this.sendAction('fail', action, reason, this.get('model'));
        },
        /**
         * @function validate validate model 
         * @returns  Boolean
         */
        cancel() {
            Ember.Logger.info('subclass override this function for form modify cancel');
            this.sendAction('cancel', this.get('model'));
        },
    },
    validate() {
        Ember.Logger.info('subclass override this function for model validate');
        return true;
    }
});


export {
    formComponent,
    godForm
};