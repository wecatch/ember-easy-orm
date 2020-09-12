/**
 This module has two mixins: godForm and formComponent, they are used to manage form handler
 @module mixins
 @submodule form
 */
import Mixin from '@ember/object/mixin';
import {inject} from '@ember/service';
import {isNone} from '@ember/utils';
import {get, setProperties} from '@ember/object';

/**
 delete object from backend server
 @event deleteObject
 @param {Object} selectedItem The current selected item
 */
let deleteObject = function (selectedItem) {
    if (!this.modelName) {
        throw new Error(`mixin component modelName is invalid: ${this.modelName}`);
    }
    this.set('loading', true);
    this.store.deleteRecord(this.modelName, selectedItem).then((data) => {
        this.set('loading', false);
        this.send('success', 'delete', data, selectedItem);
    }).catch((reason) => {
        this.set('loading', false);
        this.send('fail', 'delete', reason, selectedItem);
    });
};


/**
 godform mixin is used  for data list to create, update and delete children object
 @public
 @class godForm
 **/
var godForm = Mixin.create({
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
     @type Object
     */
    store: inject(),
    actions: {
        /**
         create new record according to modelName
         @event add
         */
        add() {
            this.set('modalShow', true);
            this.set('selectedItem', this.store.createRecord(this.modelName));
        },
        /**
         edit current selected item
         @event edit
         @param {Object} selectedItem
         */
        edit(selectedItem) {
            this.set('modalShow', true);
            if (!isNone(selectedItem)) {
                this.set('selectedItem', selectedItem);
            }
        },
        /**
         cancel current operation
         @event cancel
         */
        cancel() {
            this.set('modalShow', false);
        },
        /**
         remove current selected item
         @event remove
         @param {Object} selectedItem
         */
        remove(selectedItem) {
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
            console.log('subclass override this function for response data');
            this.set('modalShow', false);
            if (this.get('success')) {
                this.get('success')(action, data, selectedItem);
            }

            if (!this.model.contains(selectedItem)) {
                this.model.insertAt(0, selectedItem);
            }

            if (action === 'delete') {
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
            console.log('subclass override this function for fail request');
            this.set('reason', reason);
            if (this.fail) {
                this.fail(action, reason, selectedItem);
            }
        },
    }
});


/**
 formComponent mixin is used for single object form
 @public
 @class formComponent
 **/
var formComponent = Mixin.create({
    /**
     @property modelName
     @type String
     */
    modelName: '',
    /**
     single object, normally for form
     @property model
     @type Object
     */
    model: null,
    /**
     orm store service
     @property store
     @type Object
     */
    store: inject(),
    /**
     ajax fail reason
     @property reason
     @type String
     */
    reason: null,
    actions: {
        /**
         save triggle when user click save action
         @event save
         */
        save() {
            if (!this.modelName) {
                throw new Error(`mixin formComponent modelName is invalid: ${this.modelName}`);
            }
            this.set('loading', true);
            if (!this.validate()) {
                return;
            }
            let primaryKey = this.store.modelFor(this.modelName).primaryKey;
            let actionName = get(this.model, primaryKey) ? 'update' : 'create';
            this.store.save(this.modelName, this.model).then((data) => {
                this.set('loading', false);
                this.send('success', actionName, data);
            }).catch((reason) => {
                this.set('loading', false);
                this.send('fail', actionName, reason);
            });
        },

        /**
         delete triggle when user click save action
         @event remove
         */
        remove() {
            deleteObject.call(this, this.model);
        },

        /**
         success ajax request success callback
         @event succuess
         @params {String} action The current operation: create, update, delete
         @params {Object} data The response data from backend server
         */
        success(action, data) {
            console.log('subclass override this function for response data');
            if ((action === 'create' || action === 'update') && data) {
                setProperties(this.model, data);
            }
            if (this.success) {
                this.success(action, data, this.model);
            }
        },
        /**
         fail ajax request success callback
         @event fail
         @params {string} action The current operation: create, update, delete
         @params {Object} reason The ajax request response
         */
        fail(action, reason) {
            console.log('subclass override this function for fail request');
            this.set('reason', reason);
            // call object fail function from action
            if (this.fail) {
                this.fail(action, reason, this.model);
            }
        },
        /**
         cancel current operation
         @event cancel
         */
        cancel() {
            console.log('subclass override this function for form modify cancel');
            if (this.cancel) {
                this.cancel(this.model);
            }
        },
    },
    /**
     validate current model
     @method validate
     @return {Boolean} Returns true when success, false when fails
     */
    validate() {
        console.log('subclass override this function for model validate');
        return true;
    }
});


export {
    formComponent,
    godForm
};
