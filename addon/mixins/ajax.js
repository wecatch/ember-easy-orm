import Ember from 'ember';

export default Ember.Mixin.create({
    request: {
        parent: null,
        get: function(url, options) {
            let self = this.parent;
            return self.ajax('get', url, options).then(function(data) {
                return self.getSerializer(data);
            }, function(reason) {
                throw new Error(reason);
            });;
        },
        post: function(url, options) {
            let self = this.parent;
            return self.ajax('post', url, options).then(function(data) {
                return self.postSerializer(data);
            }, function(reason) {
                throw new Error(reason);
            });;
        },
        delete: function(url, options) {
            let self = this.parent;
            return self.ajax('delete', url, options).then(function(data) {
                return self.deleteSerializer(data);
            }, function(reason) {
                throw new Error(reason);
            });
        },
        put: function(url, options) {
            let self = this.parent;
            return self.ajax('put', url, options).then(function(data) {
                return self.putSerializer(data);
            }, function(reason) {
                throw new Error(reason);
            });
        },
    },
    ajaxSettings: {
        dataType: 'json'
    },
    ajax: function(method, url, options) {
        let self = this,
            ajaxSettings = {};
        Ember.merge(ajaxSettings, this.ajaxSettings);
        if (typeof options === 'object' && !Ember.isNone(options)) {
            Ember.merge(ajaxSettings, options);
        }

        if(typeof method !== 'string' || Ember.isBlank(method)){
            throw new Error(`ajax request method is invalid: ${method}`);
        }

        if(typeof url !== 'string' || Ember.isBlank(url)){
            throw new Error(`ajax request url is invalid: ${url}`);
        }

        Ember.merge(ajaxSettings, {type: method, url: url});
        return new Ember.RSVP.Promise(function(resolve, reject) {
            Ember.$.ajax(ajaxSettings).done(function(data) {
                resolve(self.RESTSerializer(data));
            }).fail(function(jqXHR, responseText, errorThrown) {
                Ember.Logger.error(jqXHR);
                Ember.Logger.error(ajaxSettings);
                reject(`${responseText} ${errorThrown}`);
            });
        });
    },
    RESTSerializer: function(data) {
        Ember.Logger.info('subclass override this function for response data serializer');
        return data;
    },
    getSerializer: function(data) {
        Ember.Logger.info('subclass override this function for get response data serializer');
        return data;
    },
    postSerializer: function(data) {
        Ember.Logger.info('subclass override this function for post response data serializer');
        return data;
    },
    putSerializer: function(data) {
        Ember.Logger.info('subclass override this function for put response data serializer');
        return data;
    },
    deleteSerializer: function(data) {
        Ember.Logger.info('subclass override this function for delete response data serializer');
        return data;
    },
    init: function() {
        this._super();
        this.set('request.parent', this);
    }
});