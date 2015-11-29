import Ember from 'ember';
import ajax from './ajax';

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
     * @The model object primary key
     * @function api according to url return the request api
     * @property {Ember.String} primaryKey
     * @return   "api"
     */
    api: function() {
        return this.host + this.namespace + this.url;
    }.property(),

    /**
     * @function save save the record to backend
     * @returns  response data
     */
    save: function(model, options) {
        let self = this,
            primaryKey = this.primaryKey,
            url = this.get('api'),
            record = {};

        //filter model data
        Object.keys(model).forEach(function(key, index) {
            if (self.model.hasOwnProperty(key)) {
                record[key] = model[key];
            }
        });

        //check if is new data
        if (model[primaryKey]) {
            record[primaryKey] = model[primaryKey];
            url = this.get('api') + '/' + model[primaryKey];

            return this.request.put(url, record, options).then(function(data) {
                return self.saveSerializer(data);
            }, function(reason) {
                throw new Error(reason);
            });
        }

        return this.request.post(url, record, options).then(function(data) {
            return self.saveSerializer(data);
        }, function(reason) {
            throw new Error(reason);
        });
    },

    /**
     * @function createRecord create current model ember object
     * @returns  Object
     */
    createRecord: function(init) {
        let record = Ember.Object.create(this.model);
        if (typeof init === 'object') {
            Ember.merge(record, init);
        }

        return record;
    },

    /**
     * @function deleteRecord delete the record from backend
     * @returns  response data
     */
    deleteRecord: function(model, data, options) {
        let _model = Ember.Object.create(model),
            self = this,
            url = this.get('api') + '/' + model[this.get('primaryKey')];

        return this.request.delete(url, data, options).then(function(data) {
            return self.deleteSerializer(data);
        }, function(reason) {
            throw new Error(reason);
        });
    },
    /**
     * @function find find the records from backend according to params
     * @returns  response data
     */
    find: function(params, options) {
        let self = this,
            url = this.get('api'),
            filterParams = this._filterParams(params);

        return this.request.get(url, filterParams, options).then(function(data) {
            return self.findSerializer(data);
        }, function(reason) {
            throw new Error(reason);
        });;
    },

    /**
     * @function findOne find only one according to primary id
     * @returns  response data
     */
    findOne: function(id, data, options) {
        let url = this.get('api') + '/' + id;

        return this.request.get(url, data, options).then(function(data) {
            return self.findOneSerializer(data);
        }, function(reason) {
            throw new Error(reason);
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
            if (params.hasOwnProperty(k) && !params[k]) {
                delete params[k];
            }
        }
        return params;
    },
    findSerializer: function(data) {
        //data is null or undefined
        if (Ember.isNone(data)) {
            Ember.Logger.error('findSerializer response data is invalid');
            return [];
        }

        // rootKey not string
        if (typeof this.rootKey !== 'string') {
            Ember.Logger.error('findSerializer rootKey must be string');
            return [];
        }

        // rootKey is empty, no parse
        if (Ember.isEmpty(this.rootKey)) {
            return data;
        }

        // parsedObject must be array
        if (!Ember.isArray(data[this.rootKey])) {
            Ember.Logger.error('findSerializer parsedData is not array');
            return [];
        }

        let parsedData = [];
        data[this.rootKey].forEach(function(item) {
            parsedData.push(item);
        });

        return parsedData;
    },
    findOneSerializer: function(data) {
        //data is null or undefined
        if (Ember.isNone(data)) {
            Ember.Logger.error('findOneSerializer response data is invalid');
            return {};
        }

        // rootKey not string
        if (typeof this.rootKey !== 'string') {
            Ember.Logger.error('findOneSerializer rootKey must be string');
            return {};
        }

        // rootKey is empty, no parse
        if (Ember.isEmpty(this.rootKey)) {
            return data;
        }

        // parsedObject must be object
        if (Ember.isNone(data[this.rootKey])) {
            Ember.Logger.error('findOneSerializer parsedObject is invalid');
            return {};
        }

        return Ember.Object.create(data[this.rootKey]);
    },
    saveSerializer: function(data) {
        return this.findOneSerializer(data);
    },
    deleteSerializer: function(data) {
        return this.findOneSerializer(data);
    }
});