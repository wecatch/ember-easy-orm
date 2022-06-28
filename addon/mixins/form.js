/**
 This module has two mixins: godForm and formComponent, they are used to manage form handler
 @module mixins
 @submodule form
 */
import { action, get, setProperties } from '@ember/object';
import { inject, inject as service } from '@ember/service';
import { isNone } from '@ember/utils';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { A } from '@ember/array';

/**
 delete object from backend server
 @event deleteObject
 @param {Object} selectedItem The current selected item
 */
let deleteObject = function (selectedItem) {
  if (!this.modelName) {
    throw new Error(`mixin component modelName is invalid: ${this.modelName}`);
  }
  this.loading = true;
  this.store
    .deleteRecord(this.modelName, selectedItem)
    .then((data) => {
      this.loading = false;
      this.success('delete', data, selectedItem);
    })
    .catch((reason) => {
      this.loading = false;
      this.fail('delete', reason, selectedItem);
    });
};

/**
 GodForm mixin is used  for data list to create, update and delete children object
 only support native style class
 @public
 @class godForm
 **/
class GodForm extends Component {
  constructor() {
    super(...arguments);
    this.model = this.args.model ? this.args.model : A();
  }

  @service store;

  /**
   @property modelName
   @type String
   */
  modelName = '';

  /**
   for loading
   @property loading
   @type boolean
   */
  @tracked loading = false;

  /**
   data set, normally array
   @property model
   @type Object
   */
  @tracked model = null;
  /**
   current selected item
   @property selectedItem
   @type Object
   */
  @tracked selectedItem = null;
  /**
   for modal dialog
   @property modalShow
   @type boolean
   */
  @tracked modalShow = false;
  /**
   ajax fail reason
   @property reason
   @type String
   */
  @tracked reason = null;
  /**
   orm store service
   @property store
   @type Object
   */
  @inject store;

  /**
   create new record according to modelName
   @event add
   */
  @action
  add() {
    this.modalShow = true;
    this.selectedItem = this.store.createRecord(this.modelName);
  }

  /**
   edit current selected item
   @event edit
   @param {Object} selectedItem
   */
  @action
  edit(selectedItem) {
    this.modalShow = true;
    if (!isNone(selectedItem)) {
      this.selectedItem = selectedItem;
    }
  }

  /**
   cancel current operation
   @event cancel
   */
  @action
  cancel() {
    this.modalShow = false;
  }

  /**
   remove current selected item
   @event remove
   @param {Object} selectedItem
   */
  @action
  remove(selectedItem) {
    if (!this.modelName) {
      throw new Error(
        `mixin component modelName is invalid: ${this.modelName}`
      );
    }
    this.loading = true;
    this.store
      .deleteRecord(this.modelName, selectedItem)
      .then((data) => {
        console.log(data, selectedItem);
        this.loading = false;
        this.success('delete', data, selectedItem);
      })
      .catch((reason) => {
        this.loading = false;
        this.fail('delete', reason, selectedItem);
      });
  }

  /**
   success ajax request success callback
   @event success
   @params {String} action The current operation: create, update, delete
   @params {Object} data The response data from backend server
   @params {Object} selectedItem Thc current selected item
   */
  @action
  success(action, data, selectedItem) {
    this.modalShow = false;
    if (this.args?.success) {
      this.args.success(action, data, selectedItem);
    }

    // child component send action to parent
    if (action === 'delete') {
      this.model.removeObject(selectedItem);
      return;
    }

    if (!this.model.includes(selectedItem)) {
      this.model.insertAt(0, selectedItem);
    }
  }

  /**
   fail ajax request success callback
   @event fail
   @params {string} action The current operation: create, update, delete
   @params {Object} reason The ajax request response
   @params {Object} selectedItem Thc current selected item
   */
  @action
  fail(action, reason, selectedItem) {
    this.reason = reason;
    // check parent callback
    if (this.args?.fail) {
      this.args.fail(action, reason, selectedItem);
    }
  }
}

/**
 Form is used  for data list to create, update and delete children object
 only support native style class
 @public
 @class Form
 **/
class Form extends Component {
  constructor() {
    super(...arguments);
    this.model = this.args.model ? this.args.model : null;
  }

  /**
   @property modelName
   @type String
   */
  modelName = '';
  /**
   single object, normally for form
   @property model
   @type Object
   */
  @tracked model = null;
  /**
   orm store service
   @property store
   @type Object
   */
  @inject store;
  /**
   ajax fail reason
   @property reason
   @type String
   */
  @tracked reason = null;
  @tracked loading = false;

  /**
   save triggle when user click save action
   @event save
   */
  @action
  save() {
    if (!this.modelName) {
      throw new Error(`FormComponent modelName is invalid: ${this.modelName}`);
    }
    this.loading = true;
    if (!this.validate()) {
      return;
    }
    let primaryKey = this.store.modelFor(this.modelName).primaryKey;
    let actionName = get(this.model, primaryKey) ? 'update' : 'create';
    this.store
      .save(this.modelName, this.model)
      .then((data) => {
        this.loading = false;
        this.success(actionName, data);
      })
      .catch((reason) => {
        this.loading = false;
        this.fail(actionName, reason);
      });
  }

  /**
   delete triggle when user click save action
   @event remove
   */
  @action
  remove() {
    deleteObject.call(this, this.model);
  }

  /**
   success ajax request success callback
   @event succuess
   @params {String} action The current operation: create, update, delete
   @params {Object} data The response data from backend server
   */
  @action
  success(action, data) {
    if ((action === 'create' || action === 'update') && data) {
      setProperties(this.model, data);
    }
    if (this.args.success) {
      this.args.success(action, data, this.model);
    }
  }

  /**
   fail ajax request success callback
   @event fail
   @params {string} action The current operation: create, update, delete
   @params {Object} reason The ajax request response
   */
  @action
  fail(action, reason) {
    this.reason = reason;
    // call object fail function from action
    if (this.args.fail) {
      this.args.fail(action, reason, this.model);
    }
  }

  /**
   cancel current operation
   @event cancel
   */
  @action
  cancel() {
    if (this.args.cancel) {
      this.args.cancel(this.model);
    }
  }
  /**
   validate current model
   @method validate
   @return {Boolean} Returns true when success, false when fails
   */
  validate() {
    console.log('subclass override this function for model validate');
    return true;
  }
}

export { GodForm, Form };
