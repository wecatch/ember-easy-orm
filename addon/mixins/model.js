import Ember from 'ember';

export default Ember.Mixin.create(Ember.Evented, {
    /**
     * The api host, default is current host
     *
     * @property {Ember.String} host
     * @default  ""
     */
    host: '',

    /**
     * The api group url like /v1  /v2
     *
     * @property {Ember.String} rootURL
     * @default  ""
     */
    rootURL: '',

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
     * @property {Ember.String} rootKey
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
     * The response data root key like: {'code': 0, 'resp':{'user':[]}, 'msg':''}, the resp is dataRootKey 
     *
     * @property {Ember.String} dataRootKey
     * @default  ""
     */
    dataRootKey: '',

    /**
     * @The model object primary key
     * @function api according to url return the request api
     * @property {Ember.String} primaryKey
     * @return   "api"
     */
    api: function() {
        return this.host + this.rootURL + this.url;
    }.property('url', 'host', 'rootURL'),

    /**
     * @function save save the record to backend
     * @returns  response data
     */
    save: function(model) {
        let $this = this;
        let primaryKey = this.get('primaryKey');
        let record = {};

        //filter model data
        Ember.$.each(Object.keys(model), function(index, key) {
            if ($this.model.hasOwnProperty(key)) {
                record[key] = model[key];
            }
        });

        //check if is new data
        let url = this.get('api');
        let method = 'post';
        if (model[primaryKey]) {
            record[primaryKey] = model[primaryKey];
            url = this.get('api') + '/' + model[primaryKey];
            method = 'put';
        }

        let _ajax = {
            type: method,
            url: url,
            data: record,
            dataType: 'json',
            traditional: true
        }

        return new Ember.RSVP.Promise(function(resolve, reject) {
            Ember.$.ajax(_ajax).done(function(data) {
                resolve(data);
            }).fail(function(jqXHR, responseText, errorThrown) {
                reject(`${responseText} ${errorThrown}`);
            });
        });
    },

    /**
     * @function createRecord create current model ember object
     * @returns  Object
     */
    createRecord: function() {
        return Ember.Object.create(this.model);
    },

    /**
     * @function deleteRecord delete the record from backend
     * @returns  response data
     */
    deleteRecord: function(model) {
        let _model = Ember.Object.create(model),
            self = this,
            url = this.get('api') + '/' + model[this.get('primaryKey')];

        let _ajax = {
            type: 'delete',
            url: url,
            dataType: 'json'
        }

        return new Ember.RSVP.Promise(function(resolve, reject) {
            Ember.$.ajax(_ajax).done(function(data) {
                resolve(data);
            }).fail(function(jqXHR, responseText, errorThrown) {
                reject(`${responseText} ${errorThrown}`);
            });
        });
    },
    /**
     * @function find find the records from backend according to params
     * @returns  response data
     */
    find: function(params) {
        let $this = this;
        params = $this._filterParams(params);
        return Ember.$.getJSON(this.get('api'), params || {}).then(Ember.run.bind(this, function(data, textStatus, jqXHR) {
            let dataList = [];
            let resp = this._resp(data);
            Ember.$.each(resp[this.get('rootKey')] || [], function(index, i) {
                dataList.push(Ember.Object.create(i));
            });
            return dataList;
        }));
    },

    /**
     * @function findOne find only one according to primary id
     * @returns  response data
     */
    findOne: function(id) {
        let $this = this;
        return Ember.$.getJSON($this.get('api') + '/' + id).then(function(data) {
            let resp = $this._resp(data);
            return Ember.Object.create(resp[$this.get('rootKey')] || {});
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

    _resp: function(data) {
        let dataRootKey = this.get('dataRootKey'),
            resp = data;
        if (!Ember.isBlank(dataRootKey)) {
            if (Ember.isNone(data[dataRootKey])) {
                Ember.Logger.error(this.get('api') + ' response data "' + dataRootKey + '" key is undefined');
            } else {
                return data[dataRootKey];
            }
        }

        return resp;
    }
});