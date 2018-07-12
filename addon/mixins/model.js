/**
orm model
@module mixins
@submodule model
*/

/**

@example
    import EmberObject from '@ember/object';
    import model, {DS} from 'ember-easy-orm/mixins/model'

    const {attr} = DS;

    export default EmberObject.extend(model, {
        url: '/v1/food',
        init(){
            this._super(...arguments);
            this.model = {
                'name': attr('string'),
                'desc': attr('string'),
                'pic': attr('array'),
                'province_id': attr('string'),
                'city_id': attr('string'),
                'area_id': attr('string'),
                'town_id': attr('string'),
                'country_id': attr('string'),
                'url': attr('string'),
                'host': attr('string'),
                'tag': attr('array'),
                'user': attr({defaultValue: function(){
                    return {name: '', 'gender': ''};
                }})
            };
        }
    })
*/

import Ember from 'ember';
import { A,isArray } from '@ember/array';
import Mixin from '@ember/object/mixin';
import Evented from '@ember/object/evented';
import  { computed } from '@ember/object';
import  EmberObject from '@ember/object';
import  { merge } from '@ember/polyfills';
import  { isBlank,isNone, } from '@ember/utils';

import ajax from './ajax';

export const DS = {
    attr(type, hash){
        if(typeof type === 'object'){
            hash = type;
            type = undefined;
        }

        if(typeof hash === 'object'){
            if(hash.hasOwnProperty('defaultValue')){
                return hash.defaultValue;
            }
        }

        switch(type){
            case 'string':
                return ''
            case 'boolean':
                return true;
            case 'number':
                return 0
            case 'array':
                return A;
        }
        
        return null;
    }
}


/** 
mixin in ORM model
@public
@class model
**/
export default Mixin.create(ajax, Evented, {
    /**
     The api host, default is current host
     @property {String} host
     @default  ""
     */
    host: '',

    /**
     The api namespace  like /v1  /v2
     @property {String} namespace
     @default  ""
     */
    namespace: '',

    /**
     The response data business logic root key like: {'code': 0, 'resp':{'user':[]}, 'msg':''}, the resp is is the rootKey
     @property {String} rootKey
     @default  ""
     */
    rootKey: '',

    /**
     The api url. If rootURL ends with slash , the url should not starts with slash 
     @property {String} url
     @default  ""
     */
    url: '',

    /**
     The model object primary key
     @property {String} primaryKey
     @default  "_id"
     */
    primaryKey: '_id',

    /**
     The object is for extract response data {user: [], comment:[], avatar: {}}
     @property {Object} displayModel
     @default  null
     */
    displayModel: null,

    /**
     url for find method request, use this method to custome find url
     @method urlForFind
     @default  /host/namespace/?key=params[key]
     @return String
     */
    urlForFind: function() {
        return this.get('api');
    },

    /**
     url for findOne method request, use this method to custome findOne url
     @method urlForFindOne
     @default  /{host}/{namespace}/{id}
     @return String 
     */
    urlForFindOne: function(id) {
        return this.get('api') + '/' + id;
    },
    /**
     url for save method request, use this method to custome create and update url
     @method urlForSave
     @param id object primary key
     @default  /{host}/{namespace}/{id}/
     @return String
     */
    urlForSave: function(id) {
        return id ? this.get('api') + '/' + id : this.get('api');
    },

    /**
     url for delete method request, use this method to custome delete url
     @method urlForDelete
     @default  /{host}/{namespace}/{id}
     @param id object primary key
     @return String
     */
    urlForDelete: function(id) {
        return id ? this.get('api') + '/' + id : this.get('api');
    },
    /**
     make api with host, namespace, url
     @method api 
     @property {String} api
     @return  {host}{namespace}{url}
     */
    api: computed('host', 'namespace', 'url', function() {
        return this.host + this.namespace + this.url;
    }),
    /**
     save the record to backend when create or update object
     @method save 
     @param model model needed to save
     @return  {Promise}
     */
    save: function(model) {
        let self = this,
            primaryKey = this.primaryKey,
            url = this.urlForSave(model[primaryKey], model),
            record = {},
            model_keys = Object.keys(this.model);

        //filter model data
        for (var i = model_keys.length - 1; i >= 0; i--) {
            let key = model_keys[i];
            if(typeof self.model[key] === 'function'){
                if(typeof model[key] === 'object' && !isArray(model[key])){
                    record[key] = JSON.stringify(model[key]);
                    continue;
                }
            }

            if(isArray(model[key])){
                let content = model[key];
                for (let i = 0; i < content.length; i++) {
                    if(typeof content[i] === 'object' && content[i]){
                        model[key][i] = JSON.stringify(content[i]);
                    }
                }
            }

            record[key] = model[key] !== undefined ? model[key] : self.model[key];
        }

        //check if is new data
        if (model[primaryKey]) {
            record[primaryKey] = model[primaryKey];
            return this.request.put(url, {'data': record}).then(function(data) {
                try{
                    return self.saveSerializer(data);
                }catch(e){
                    throw(e);                    
                }
            }, function(reason) {
                throw(reason);
            });
        }

        return this.request.post(url, {'data': record}).then(function(data) {
            try{
                return self.saveSerializer(data);
            }catch(e){
                throw(e);
            }
        }, function(reason) {
            throw(reason);
        });
    },

    /**
     create new model with init options and model property
     @method createRecord 
     @param {Object} init init data
     @return Object current model
     */
    createRecord: function(init) {
        let record = EmberObject.create();
        for(let property in this.model){
            if(this.model.hasOwnProperty(property)){
                let v = this.model[property];
                if(typeof v === 'function'){
                    record.set(property, v.apply());
                }else {
                    record.set(property, v);
                }
            }
        }

        if (typeof init === 'object') {
            merge(record, init);
        }

        return record;
    },

    /**
    delete the record from backend
    @method deleteRecord 
    @param {Object} model
    @param {Object} data passed to backend server as extra params
    @return  Promise
     */
    deleteRecord: function(model, data) {
        let self = this,
            _id = typeof model ==='string' || typeof model ==='number' ? model : model[this.primaryKey],
            url = this.urlForDelete(_id, data),
            options = data ? {data: data} : {};

        return this.request.delete(url, options).then(function(data) {
            try{
                return self.deleteSerializer(data);
            }catch(e){
                throw(e);
            }
        }, function(reason) {
            throw(reason);
        });
    },
    /**
     find the records from backend according to params
     @method find 
     @param {Object} params query params
     @return  Promise
    */
    find: function(params) {
        let self = this,
            url = this.urlForFind(params),
            filterParams = this._filterParams(params),
            options = filterParams ? {data: filterParams} : {};

        return this.request.get(url, options).then(function(data) {
            try{
                return self.findSerializer(data);
            }catch(e){
                throw(e);                
            }
        }, function(reason) {
            throw(reason);
        });
    },

    /**
    find only one according to primary id
    @method findOne
    @param {String} id primary key
    @param {Object} data query parameter append to url
    @return Promise
    */
    findOne: function(id, data) {
        let url = this.urlForFindOne(id, data),
            self = this,
            options = data ? {data: data} : {};

        return this.request.get(url, options).then(function(data) {
            try{
                return self.findOneSerializer(data);
            }catch(e){
                throw(e);                
            }
        }, function(reason) {
            throw(reason);
        });
    },
    /**
    filter request params
    @private
    @method _filterParams 
    @param {Object} params
    @return Object filtered params
    */
    _filterParams: function(params) {
        if (!params) {
            return;
        }
        for (let k in params) {
            if (params.hasOwnProperty(k) && isBlank(params[k])) {
                delete params[k];
            }
        }
        return params;
    },
    /**
    find serializer
    @method findSerializer 
    @param {Object} data response data from backend
    @return serializer data
    */
    findSerializer: function(data) {
        let result = {};
        if(this.displayModel){
            let objectKeys = Object.keys(this.displayModel);
            for (let i = 0; i < objectKeys.length; i++) {
                let key = objectKeys[i];
                let keyAttr = this.displayModel[key];
                if(keyAttr==='array'){
                    result[key] = this.to_array(data[key]);
                    continue;
                }
                if(keyAttr==='object'){
                    result[key] = this.to_object(data[key]);
                    continue;
                }
                result[key] = data[key];
            }
            return result;
        }

        //data is null or undefined
        if (isNone(data)) {
            Ember.Logger.error('findSerializer response data is null');
            return this.to_array();
        }

        // rootKey is empty
        if (!this.rootKey) {
            return this.to_array(data);
        }

        // response data must be array
        if (!isArray(data[this.rootKey])) {
            Ember.Logger.error('findSerializer parsedData is not array');
            Ember.Logger.warn(data);
            Ember.Logger.warn(this.rootKey);
            return this.to_array();
        }

        return this.to_array(data[this.rootKey]);
    },
    /**
    serializer for findOne method
    @method findOneSerializer 
    @param {Object} data response data from backend
    @return serializer data
    */
    findOneSerializer: function(data) {
        //data is null or undefined
        if (isNone(data)) {
            Ember.Logger.error('findOneSerializer response data is null');
            return this.to_object();
        }

        // rootKey is empty
        if (!this.rootKey) {
            return data;
        }

        // parsedObject must be object
        if (isNone(data[this.rootKey])) {
            Ember.Logger.error('findOneSerializer parsedObject is null');
            return this.to_object();
        }

        return this.to_object(data[this.rootKey]);
    },
    to_array: function(data){
        return A(data || []);
    },
    to_object: function(data){
        return EmberObject.create(data || {});
    },
    /**
    serializer for save method
    @method saveSerializer 
    @param {Object} data response data from backend
    @return serializer data
    */
    saveSerializer: function(data) {
        Ember.Logger.info('subclass override saveSerializer for response data serializer');
        return data;
    },
    /**
    serializer for delete
    @method deleteSerializer 
    @param {Object} data response data from backend
    @return serializer data
    */
    deleteSerializer: function(data) {
        Ember.Logger.info('subclass override deleteSerializer for response data serializer');
        return data;
    },
    init: function(){
        this._super(...arguments);
        if(typeof this.rootKey !== 'string'){
            throw new Error(`rootKey only allow string type, now is ${this.rootKey}`);
        }
    }
});