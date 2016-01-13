import Ember from 'ember';

// when godForm call delete, pass selectedItem to success
let deleteObject = function (selectedItem){
    this.toggleProperty('loading');
    this.get('store').deleteRecord(this.get('modelName'), selectedItem).then(Ember.run.bind(this, function(data) {
        this.toggleProperty('loading');
        this.send('success', 'delete', data, selectedItem);
    }), Ember.run.bind(this, function(reason) {
        this.toggleProperty('loading');
        this.send('fail', 'delete', reason, selectedItem);
    }));
};


// godForm mixin is used to controll many object's removing and adding and editing
var godForm = Ember.Mixin.create({
    modelName: '',
    model: null,
    selectedItem: null,
    modalShow: false,
    store: Ember.inject.service(),
    actions: {
        /**
         * @function add create new record according to modelName
         * @returns  void
         */
        add() {
            this.set('modalShow', true);
            this.set('selectedItem', this.get('store').createRecord(this.get('modelName')));
        },
        /**
         * @function edit triggle when user click edit action
         * @returns  void
         */
        edit(selectedItem) {
            this.set('modalShow', true);
            if (!Ember.isNone(selectedItem)) {
                this.set('selectedItem', selectedItem);
            }
        },
        cancel(){
            this.set('modalShow', false);
        },
        remove(selectedItem){
            deleteObject.call(this, selectedItem);
        },
        /**
         * @function  success ajax request success callback
         * @returns  void
         */
        success(action, data, selectedItem) {
            Ember.Logger.info('subclass override this function for response data');
            this.set('modalShow', false);
            if(this.sendAction) {
                this.sendAction('success', action, data, selectedItem);
            }

            if(action === 'create'){
                this.model.insertAt(0, selectedItem);
            }

            if(action === 'delete'){
                this.model.removeObject(selectedItem);
            }
        },
        /**
         * @function  success ajax request success callback
         * @returns  void
         */
        fail(action, reason, selectedItem) {
            Ember.Logger.info('subclass override this function for fail request');
            if(this.sendAction) {
                this.sendAction('fail', action, reason, selectedItem);
            }
        },
    },
    init(){
        this._super(...arguments);
        if(!this.modelName){
            throw new Error(`mixin godForm modelName is invalid: ${this.modelName}`);
        }
    }
});


var formComponent = Ember.Mixin.create({
    modelName: '',
    model: null,
    store: Ember.inject.service(),
    actions: {
        /**
         * @function save triggle when user click save action
         * @returns  void
         */
        save() {
            this.toggleProperty('loading');
            if (!this.validate()) {return;}
            let primaryKey = this.get('store').modelFor(this.modelName).primaryKey;
            let actionName = Ember.get(this.model, primaryKey) ? 'update' : 'create';
            this.get('store').save(this.get('modelName'), this.get('model')).then(Ember.run.bind(this, function(data) {
                this.toggleProperty('loading');
                this.send('success', actionName, data);
            }), Ember.run.bind(this, function(reason) {
                this.toggleProperty('loading');
                this.send('fail', actionName, reason);
            }));
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
                Ember.merge(this.model, data);
            }
            this.sendAction('success', action, data, this.get('model'));
        },
        /**
         * @function  success ajax request success callback
         * @returns  void
         */
        fail(action, reason) {
            Ember.Logger.info('subclass override this function for fail request');
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
    },
    init(){
        this._super(...arguments);
        if(!this.modelName){
            throw new Error(`mixin formComponent modelName is invalid: ${this.modelName}`);
        }
    }
});


export {
    formComponent,
    godForm
};