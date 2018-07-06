/**
support ajax request in this module
@module mixins
@submodule ajax
 */
import Ember from 'ember';
import Mixin from '@ember/object/mixin';
import Evented from '@ember/object/evented';
import { merge } from '@ember/polyfills';
import { isNone,isBlank } from '@ember/utils';
import { Promise } from 'rsvp';
import $ from 'jquery';

/**
get request function used in ajax.request property
@private
*/
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

/**
post request function used in ajax.request property
@private
*/
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


/**
delete request function used in ajax.request property
@private
*/
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


/**
put request function used in ajax.request property
@private
*/
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

/**
wrap jquery ajax with Ember.RSVP.Promise
@public
@class ajax
*/
export default Mixin.create(Evented, {
    /** 
    wrapper all request method into request object
    @property request
    @type Object
    @default null
    */
    request: null,
    /** 
    ajax request setting See http://devdocs.io/jquery/jquery.ajax
    @property ajaxSettings
    @type Object
    @default {dataType: 'json'}
    */
    ajaxSettings: {
        dataType: 'json'
    },
    /** 
    jquery ajax method wrapper, return promise
    @method ajax
    @param {String} method request method
    @param {String} url request url
    @param {Object} options ajax jquery ajax settings, see http://devdocs.io/jquery/jquery.ajax
    @return {Promise}
    */
    ajax: function(method, url, options) {
        let self = this,
            ajaxSettings = {};
        merge(ajaxSettings, this.ajaxSettings);
        if (typeof options === 'object' && !isNone(options)) {
            merge(ajaxSettings, options);
        }

        if(typeof method !== 'string' || isBlank(method)){
            throw new Error(`ajax request method is invalid: ${method}`);
        }

        if(typeof url !== 'string' || isBlank(url)){
            throw new Error(`ajax request url is invalid: ${url}`);
        }

        merge(ajaxSettings, {type: method, url: url});
        self.trigger('ajaxStart');
        return new Promise(function(resolve, reject) {
            $.ajax(ajaxSettings).done(function(data) {
                self.trigger('ajaxDone');
                try{
                    resolve(self.RESTSerializer(data));
                    self.trigger('ajaxSuccess');
                }catch(e){
                    self.trigger('RESTSerializerError', e);
                    reject(e);
                }
            }).fail(function(jqXHR, responseText, errorThrown) {
                self.trigger('ajaxDone');
                Ember.Logger.error(jqXHR);
                Ember.Logger.error(ajaxSettings);
                let error = `${responseText} ${errorThrown}`;
                self.trigger('ajaxError', error, ajaxSettings, jqXHR);
                reject(new Error(error));
            });
        });
    },
    /** 
    all ajax request data serializer
    @method RESTSerializer
    @param {Object} data response data
    @return serializer data
    */
    RESTSerializer: function(data) {
        Ember.Logger.info('subclass override RESTSerializer for response data serializer');
        return data;
    },
    /** 
    get request data serializer
    @method getSerializer
    @param {Object} data response data
    @return serializer data
    */
    getSerializer: function(data) {
        Ember.Logger.info('subclass override getSerializer for get response data serializer');
        return data;
    },
    /** 
    post request data serializer
    @method postSerializer
    @param {Object} data response data
    @return serializer data
    */
    postSerializer: function(data) {
        Ember.Logger.info('subclass override postSerializer for post response data serializer');
        return data;
    },
    /** 
    put request data serializer
    @method putSerializer
    @param {Object} data response data
    @return serializer data
    */
    putSerializer: function(data) {
        Ember.Logger.info('subclass override putSerializer for put response data serializer');
        return data;
    },
    /** 
    delete request data serializer
    @method deleteSerializer
    @param {Object} data response data
    @return serializer data
    */
    deleteSerializer: function(data) {
        Ember.Logger.info('subclass override deleteSerializer for delete response data serializer');
        return data;
    },
    init: function() {
        this._super(...arguments);
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