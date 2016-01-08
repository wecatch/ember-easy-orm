import Ember from 'ember';

const _get = function(url, options) {
    let self = this.parent;
    return self.ajax('get', url, options).then(function(data) {
        try{
            return self.getSerializer(data);
        }catch(e){
            throw(e);
        }
    }, function(reason) {
        throw(reason);
    });
};

const _post = function(url, options) {
    let self = this.parent;
    return self.ajax('post', url, options).then(function(data) {
        try{
            return self.postSerializer(data);
        }catch(e){
            throw(e);         
        }
    }, function(reason){
        throw(reason);
    });
};


const _delete = function(url, options) {
    let self = this.parent;
    return self.ajax('delete', url, options).then(function(data) {
        try{
            return self.deleteSerializer(data);
        }catch(e){
            throw(e);                    
        }
    }, function(reason) {
        throw(reason);
    });
};

const _put = function(url, options) {
    let self = this.parent;
    return self.ajax('put', url, options).then(function(data) {
        try{
            return self.putSerializer(data);
        }catch(e){
           throw(e);                   
        }
    }, function(reason) {
        throw(reason);
    });
};


export default Ember.Mixin.create({
    request: null,
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
                try{
                    resolve(self.RESTSerializer(data));
                }catch(e){
                    reject(e);                    
                }
            }).fail(function(jqXHR, responseText, errorThrown) {
                Ember.Logger.error(jqXHR);
                Ember.Logger.error(ajaxSettings);
                reject(new Error(`${responseText} ${errorThrown}`));
            });
        });
    },
    RESTSerializer: function(data) {
        Ember.Logger.info('subclass override RESTSerializer for response data serializer');
        return data;
    },
    getSerializer: function(data) {
        Ember.Logger.info('subclass override getSerializer for get response data serializer');
        return data;
    },
    postSerializer: function(data) {
        Ember.Logger.info('subclass override postSerializer for post response data serializer');
        return data;
    },
    putSerializer: function(data) {
        Ember.Logger.info('subclass override putSerializer for put response data serializer');
        return data;
    },
    deleteSerializer: function(data) {
        Ember.Logger.info('subclass override deleteSerializer for delete response data serializer');
        return data;
    },
    init: function() {
        this._super();
        let self = this;
        const request = {
            parent: self,
            get: _get,
            post: _post,
            put: _put,
            delete: _delete
        };
        this.set('request', request);
    }
});