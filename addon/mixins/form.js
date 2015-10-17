import Ember from 'ember';

export {
    formComponent,
    godForm,
}


let injectStore = Ember.Object.create({
    injectStore: function() {
        if (Ember.isEmpty(this.get('store'))) {
            this.set('store', Ember.inject.service('store'));
        }
    }.on('init')
});


let deleteObject = function (selectedItem){
    this.toggleProperty('loading');
    this.get('store').deleteRecord(this.get('modelName'), selectedItem).then(Ember.run.bind(this, function(data) {
        this.toggleProperty('loading');
        this.send('success', 'delete', data);
    }), Ember.run.bind(this, function(reason) {
        this.toggleProperty('loading');
        this.send('fail', 'delete', reason);
    }));
};


// godForm mixin is used to controll many object's removing and adding and editing
let godForm = Ember.Mixin.create(injectStore, {
    modelName: '',
    model: null,
    selectedItem: null,
    modalShow: false,
    actions: {
        /**
         * @function add create new record according to modelName
         * @returns  void
         */
        add(selectedItem) {
            this.toggleProperty('modalShow');
            this.set('selectedItem', this.get('store').createRecord(this.get('modelName')));
        },
        /**
         * @function edit triggle when user click edit action
         * @returns  void
         */
        edit(selectedItem) {
            this.toggleProperty('modalShow');
            if (!Ember.isEmpty(selectedItem)) {
                this.set('selectedItem', selectedItem);
            }
        },
        cancel(){
            this.toggleProperty('modalShow');
        },
        remove (selectedItem){
            deleteObject.call(this, selectedItem);
        },
        /**
         * @function  success ajax request success callback
         * @returns  void
         */
        success(action, data) {
            Ember.Logger.info('subclass override this function for response data');
            this.sendAction ? this.sendAction('success', action, data) : '';
        },
        /**
         * @function  success ajax request success callback
         * @returns  void
         */
        fail(action, reason) {
            Ember.Logger.info('subclass override this function for fail request');
            this.sendAction ? this.sendAction('fail', action, reason) : '';
        },
    },
    
});


let formComponent = Ember.Mixin.create(injectStore, {
    modelName: '',
    model: null,
    actions: {
        /**
         * @function save triggle when user click save action
         * @returns  void
         */
        save() {
            this.toggleProperty('loading');
            if (!this.validate()) return;
            this.get('store').save(this.get('modelName'), this.get('model')).then(Ember.run.bind(this, function(data) {
                this.toggleProperty('loading');
                this.send('success', 'save', data);
            }), Ember.run.bind(this, function(reason) {
                this.toggleProperty('loading');
                this.send('fail', 'save', reason);
            }));
        },

        /**
         * @function delete triggle when user click save action
         * @returns  void
         */
        remove (model) {
            deleteObject.call(this, model);
        },

        /**
         * @function  success ajax request success callback
         * @returns  void
         */
        success(action, data) {
            Ember.Logger.info('subclass override this function for response data');
            this.sendAction('success', action, data);
        },
        /**
         * @function  success ajax request success callback
         * @returns  void
         */
        fail(action, reason) {
            Ember.Logger.info('subclass override this function for fail request');
            this.sendAction('fail', action, reason);
        },
        /**
         * @function validate validate model 
         * @returns  Boolean
         */
        cancel() {
            Ember.Logger.info('subclass override this function for form modify cancel');
            this.sendAction('cancel');
        },
    },
    validate: function() {
        Ember.Logger.info('subclass override this function for model validate');
        return true
    },
});