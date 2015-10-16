import Ember from "ember";

var form = Ember.Mixin.create({
    actions: {
        /**
         * @function edit triggle when user click edit action
         * @returns  void
         */
        edit: function() {
            this.toggleProperty('formModalShow');
        },

        /**
         * @function save triggle when user click save action
         * @returns  void
         */
        save: function() {
            this.toggleProperty('loading');
            if (!this.validate()) return;
            this.store.save(this.get('modelName'), this.get('model')).then(Ember.run.bind(this, function(data) {
                this.toggleProperty('loading');
                this.send('callback', 'save', data);
            }));
        },

        /**
         * @function delete triggle when user click save action
         * @returns  void
         */
        delete: function() {
            this.toggleProperty('loading');
            this.store.deleteRecord(this.get('modelName'), this.get('model')).then(Ember.run.bind(this, function(data) {
                this.toggleProperty('loading');
                this.send('callback', 'delete', data);
            }));
        },

        /**
         * @function callback ajax request callback
         * @returns  void
         */
        callback: function(action, data) {
            Ember.Logger.info('subclass override this function for response data');
        },


        /**
         * @function validate validate model 
         * @returns  Boolean
         */
        cancel: function() {
            Ember.Logger.info('subclass override this function for form modify cancel');
            this.toggleProperty('formModalShow');
        },
    },
    /**
     * @function validate validate model 
     * @returns  Boolean
     */
    validate: function() {
        Ember.Logger.info('subclass override this function for model validate');
        return true
    },
    errorMsg: 'Ops! Something is wrong!',
    successMsg: 'Saved successfully!',
    loading: false,
    formModalShow: false,
    application: Ember.inject.controller(),
});


export default form;