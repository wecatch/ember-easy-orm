/**
 support ajax request in this module
 @module mixins
 @submodule ajax
 */
import Mixin from '@ember/object/mixin';
import {A, isArray} from '@ember/array';
import Evented from '@ember/object/evented';
import {isBlank, isNone} from '@ember/utils';
import {Promise} from 'rsvp';
import $ from 'jquery';

/**
 get request function used in ajax.request property
 @private
 */
const _get = function (url, options) {
    let self = this.parent;
    return self.ajax('get', url, options).then(function (data) {
        try {
            return self.getSerializer(data);
        } catch (e) {
            throw(e);
        }
    }, function (reason) {
        throw(reason);
    });
};

/**
 post request function used in ajax.request property
 @private
 */
const _post = function (url, options) {
    let self = this.parent;
    return self.ajax('post', url, options).then(function (data) {
        try {
            return self.postSerializer(data);
        } catch (e) {
            throw(e);
        }
    }, function (reason) {
        throw(reason);
    });
};


/**
 delete request function used in ajax.request property
 @private
 */
const _delete = function (url, options) {
    let self = this.parent;
    return self.ajax('delete', url, options).then(function (data) {
        try {
            return self.deleteSerializer(data);
        } catch (e) {
            throw(e);
        }
    }, function (reason) {
        throw(reason);
    });
};


/**
 put request function used in ajax.request property
 @private
 */
const _put = function (url, options) {
    let self = this.parent;
    return self.ajax('put', url, options).then(function (data) {
        try {
            return self.putSerializer(data);
        } catch (e) {
            throw(e);
        }
    }, function (reason) {
        throw(reason);
    });
};

/**
 wrap jquery ajax with Ember.RSVP.Promise, this mixin also has events like:
 - ajaxStart be trigged when ajax request start
 - ajaxDone  be trigged when ajax request finish (success or fails)
 - ajaxSuccess  be trigged when promise resovle success
 - ajaxError be trigged when ajax request fails
 - RESTSerializerError  be trigged error happen when response data serialize
 @public
 @class ajax
 */
export default Mixin.create(Evented, {
    /**
     wrapper all request method (get put post delete) into request object
     @property request
     @type Object
     @default {Object}
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
     if contentType is application/json which method request data need to be serialized with json
     @property needSerializedMethod
     @type Object
     @default ['post', 'put']
     */
    needSerializedMethod: null,
    /**
     jquery ajax method wrapper, return promise
     @method ajax
     @param {String} method request method
     @param {String} url request url
     @param {Object} options ajax jquery ajax settings, see http://devdocs.io/jquery/jquery.ajax
     @return {Promise}
     */
    ajax: function (method, url, options) {
        let self = this,
            ajaxSettings = {};
        Object.assign(ajaxSettings, this.ajaxSettings);
        if (typeof options === 'object' && !isNone(options)) {
            Object.assign(ajaxSettings, options);
        }

        if (typeof method !== 'string' || isBlank(method)) {
            throw new Error(`ajax request method is invalid: ${method}`);
        }

        if (typeof url !== 'string' || isBlank(url)) {
            throw new Error(`ajax request url is invalid: ${url}`);
        }

        Object.assign(ajaxSettings, {type: method, url: url});
        if (ajaxSettings.contentType === 'application/json' && ajaxSettings['data']
            && isArray(this.needSerializedMethod) && this.needSerializedMethod.includes(method)) {
            ajaxSettings['data'] = JSON.stringify(ajaxSettings['data']);
        }
        self.trigger('ajaxStart');
        return new Promise(function (resolve, reject) {
            $.ajax(ajaxSettings).done(function (data) {
                self.trigger('ajaxDone');
                try {
                    resolve(self.RESTSerializer(data));
                    self.trigger('ajaxSuccess');
                } catch (e) {
                    self.trigger('RESTSerializerError', e);
                    reject(e);
                }
            }).fail(function (jqXHR, responseText, errorThrown) {
                self.trigger('ajaxDone');
                console.log(jqXHR);
                console.log(ajaxSettings);
                let error = `${responseText} ${errorThrown}`;
                self.trigger('ajaxError', error, ajaxSettings, jqXHR);
                reject(new Error(error));
            });
        });
    },
    /**
     all ajax response data serializer
     @method RESTSerializer
     @param {Object} data response data
     @return serializer data
     */
    RESTSerializer: function (data) {
        console.log('subclass override RESTSerializer for response data serializer');
        return data;
    },
    /**
     get method response data serializer
     @method getSerializer
     @param {Object} data response data
     @return serializer data
     */
    getSerializer: function (data) {
        console.log('subclass override getSerializer for get response data serializer');
        return data;
    },
    /**
     post method response data serializer
     @method postSerializer
     @param {Object} data response data
     @return serializer data
     */
    postSerializer: function (data) {
        console.log('subclass override postSerializer for post response data serializer');
        return data;
    },
    /**
     put method response data serializer
     @method putSerializer
     @param {Object} data response data
     @return serializer data
     */
    putSerializer: function (data) {
        console.log('subclass override putSerializer for put response data serializer');
        return data;
    },
    /**
     delete method response data serializer
     @method deleteSerializer
     @param {Object} data response data
     @return serializer data
     */
    deleteSerializer: function (data) {
        console.log('subclass override deleteSerializer for delete response data serializer');
        return data;
    },
    init: function () {
        this._super(...arguments);
        let self = this;
        const request = {
            parent: self,
            get: _get,
            post: _post,
            put: _put,
            delete: _delete
        };
        this.set('needSerializedMethod', A(['post', 'put']));
        this.set('request', request);
    }
});
