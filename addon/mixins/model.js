/**
@module mixins/model
*/

import Ember from 'ember';
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
                return Ember.A;
        }
        
        return null;
    }
}

export default Ember.Mixin.create(ajax, Ember.Evented, {
    /**
     * The api host, default is current host
     *
     * @property {Ember.String} host
     * @default  ""
     */
    host: '',

    /**
     * The api namespace  like /v1  /v2
     *
     * @property {Ember.String} namespace
     * @default  ""
     */
    namespace: '',

    /**
     * The response data business logic root key like: {'code': 0, 'resp':{'user':[]}, 'msg':''}, the user is rootKey
     *
     * @property {Ember.String} rootKey
     * @default  ""
     */
    rootKey: '',

    /**
     * The api if rootURL ends with slash , the url should not starts with slash 
     *
     * @property {Ember.String} url
     * @default  ""
     */
    url: '',

    /**
     * The model object primary key
     *
     * @property {Ember.String} primaryKey
     * @default  "_id"
     */
    primaryKey: '_id',

    /**
     * The object is for extract response data {user: [], comment:[], avatar: {}}
     *
     * @property {Ember.Object} displayModel
     * @default  null
     */
    displayModel: null,

    /**
     * url for find request
     *
     * @function return find api
     * @default  /host/namespace/?key=params[key]
     */
    urlForFind: function() {
        return this.get('api');
    },

    /**
     * url for findOne request
     *
     * @function return find api
     * @default  /host/namespace/?key=params[key]
     */
    urlForFindOne: function(id) {
        return this.get('api') + '/' + id;
    },
    /**
     * url for save request
     *
     * @function return find api
     * @default  /host/namespace/?key=params[key]
     */
    urlForSave: function(id) {
        return id ? this.get('api') + '/' + id : this.get('api');
    },

    /**
     * url for delete request
     *
     * @function return find api
     * @default  /host/namespace/?key=params[key]
     */
    urlForDelete: function(id) {
        return id ? this.get('api') + '/' + id : this.get('api');
    },
    /**
     * @The model object primary key
     * @function api according to url return the request api
     * @property {Ember.String} primaryKey
     * @return   "api"
     */
    api: Ember.computed('host', 'namespace', 'url', function() {
        return this.host + this.namespace + this.url;
    }),
    /**
     * @function save save the record to backend
     * @returns  response data
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
     * @function createRecord create current model ember object
     * @returns  Object
     */
    createRecord: function(init) {
        let record = Ember.Object.create();
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
            Ember.merge(record, init);
        }

        return record;
    },

    /**
     * @function deleteRecord delete the record from backend
     * @returns  response data
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
     * @function find find the records from backend according to params
     * @returns  response data
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
     * @function findOne find only one according to primary id
     * @returns  response data
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
     * @function _filterParams filter request params
     * @returns  filtered params
     */
    _filterParams: function(params) {
        if (!params) {
            return;
        }
        for (let k in params) {
            if (params.hasOwnProperty(k) && Ember.isBlank(params[k])) {
                delete params[k];
            }
        }
        return params;
    },
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
        if (Ember.isNone(data)) {
            Ember.Logger.error('findSerializer response data is null');
            return this.to_array();
        }

        // rootKey is empty
        if (!this.rootKey) {
            return this.to_array(data);
        }

        // response data must be array
        if (!Ember.isArray(data[this.rootKey])) {
            Ember.Logger.error('findSerializer parsedData is not array');
            Ember.Logger.warn(data);
            Ember.Logger.warn(this.rootKey);
            return this.to_array();
        }

        return this.to_array(data[this.rootKey]);
    },
    findOneSerializer: function(data) {
        //data is null or undefined
        if (Ember.isNone(data)) {
            Ember.Logger.error('findOneSerializer response data is null');
            return this.to_object();
        }

        // rootKey is empty
        if (!this.rootKey) {
            return data;
        }

        // parsedObject must be object
        if (Ember.isNone(data[this.rootKey])) {
            Ember.Logger.error('findOneSerializer parsedObject is null');
            return this.to_object();
        }

        return this.to_object(data[this.rootKey]);
    },
    to_array: function(data){
        return Ember.A(data || []);
    },
    to_object: function(data){
        return Ember.Object.create(data || {});
    },
    saveSerializer: function(data) {
        Ember.Logger.info('subclass override saveSerializer for response data serializer');
        return data;
    },
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