// eslint-disable-next-line ember/no-mixins
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
            this.model = EmberObject.extend({
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
            });
        }
    })
 */

import { A, isArray } from '@ember/array';
import Mixin from '@ember/object/mixin';
import Evented from '@ember/object/evented';
import EmberObject, { computed, get } from '@ember/object';
import { isBlank, isNone } from '@ember/utils';
import { tracked } from '@glimmer/tracking';

import ajax from './ajax';

export const DS = {
  attr(type, hash) {
    if (typeof type === 'object' && type) {
      hash = type;
      type = undefined;
    }

    if (typeof hash === 'object') {
      if (hash.defaultValue !== undefined) {
        if (typeof hash.defaultValue === 'function') {
          return tracked({ initializer: () => hash.defaultValue.apply() });
        }
        return tracked({ value: hash.defaultValue });
      }
    }

    switch (type) {
      case 'string':
        return tracked({ value: '' });
      case 'boolean':
        return tracked({ value: true });
      case 'number':
        return tracked({ value: 0 });
      case 'array':
        return tracked({ value: A() });
    }

    return tracked({ value: null });
  },
};

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
  urlForFind: function () {
    return this.api;
  },

  /**
   url for findOne method request, use this method to custome findOne url
   @method urlForFindOne
   @default  /{host}/{namespace}/{id}
   @return String
   */
  urlForFindOne: function (id) {
    return this.api + '/' + id;
  },
  /**
   url for save method request, use this method to custome create and update url
   @method urlForSave
   @param id object primary key
   @default  /{host}/{namespace}/{id}/
   @return String
   */
  urlForSave: function (id) {
    return id ? this.api + '/' + id : this.api;
  },

  /**
   url for delete method request, use this method to custome delete url
   @method urlForDelete
   @default  /{host}/{namespace}/{id}
   @param id object primary key
   @return String
   */
  urlForDelete: function (id) {
    return id ? this.api + '/' + id : this.api;
  },
  /**
   make api with host, namespace, url
   @method api
   @property {String} api
   @return  {host}{namespace}{url}
   */
  api: computed('host', 'namespace', 'url', function () {
    return this.host + this.namespace + this.url;
  }),
  /**
   save the record to backend when create or update object
   @method save
   @param modelInstance model needed to save
   @return  {Promise}
   */
  save: function (modelInstance) {
    let self = this,
      primaryKey = this.primaryKey,
      url = this.urlForSave(modelInstance[primaryKey], modelInstance);

    const record = this.filterRecord(modelInstance);
    let method = 'post';
    if (modelInstance[primaryKey]) {
      method = 'put';
      record[primaryKey] = modelInstance[primaryKey];
    }

    return this.request[method](url, { data: record }).then(
      function (data) {
        // eslint-disable-next-line no-useless-catch
        try {
          return self.saveSerializer(data);
        } catch (e) {
          throw e;
        }
      },
      function (reason) {
        throw reason;
      }
    );
  },

  /**
   create new model with init options and model property
   @method createRecord
   @param {Object} init init data
   @return Object current model
   */
  createRecord: function (init) {
    if (typeof init === 'object' && init != null) {
      return this.model.create(init);
    }
    return this.model.create();
  },
  /**
   * filter native class instance or emberObject instance into pojo object
   */
  filterRecord(modelInstance) {
    const record = {};
    for (const key in modelInstance) {
      if (typeof get(modelInstance, key) != 'function') {
        if (modelInstance[key] != undefined) {
          record[key] = modelInstance[key];
        }
      }
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
  deleteRecord: function (model, data) {
    let self = this,
      _id =
        typeof model === 'string' || typeof model === 'number'
          ? model
          : model[this.primaryKey],
      url = this.urlForDelete(_id, data),
      options = data ? { data: data } : {};

    return this.request.delete(url, options).then(
      function (data) {
        // eslint-disable-next-line no-useless-catch
        try {
          return self.deleteSerializer(data);
        } catch (e) {
          throw e;
        }
      },
      function (reason) {
        throw reason;
      }
    );
  },
  /**
   find the records from backend according to params
   @method find
   @param {Object} params query params
   @return  Promise
   */
  find: function (params) {
    let self = this,
      url = this.urlForFind(params),
      filterParams = this._filterParams(params),
      options = filterParams ? { data: filterParams } : {};

    return this.request.get(url, options).then(
      function (data) {
        // eslint-disable-next-line no-useless-catch
        try {
          return self.findSerializer(data);
        } catch (e) {
          throw e;
        }
      },
      function (reason) {
        throw reason;
      }
    );
  },

  /**
   find only one according to primary id
   @method findOne
   @param {String} id primary key
   @param {Object} data query parameter append to url
   @return Promise
   */
  findOne: function (id, data) {
    let url = this.urlForFindOne(id, data),
      self = this,
      options = data ? { data: data } : {};

    return this.request.get(url, options).then(
      function (data) {
        // eslint-disable-next-line no-useless-catch
        try {
          return self.findOneSerializer(data);
        } catch (e) {
          throw e;
        }
      },
      function (reason) {
        throw reason;
      }
    );
  },
  /**
   filter request params
   @private
   @method _filterParams
   @param {Object} params
   @return Object filtered params
   */
  _filterParams: function (params) {
    if (!params) {
      return;
    }
    Object.keys(params).map((k) => {
      if (isBlank(params[k])) {
        delete params[k];
      }
    });
    return params;
  },
  /**
   find serializer
   @method findSerializer
   @param {Object} data response data from backend
   @return serializer data
   */
  findSerializer: function (data) {
    let result = {};
    if (this.displayModel) {
      let objectKeys = Object.keys(this.displayModel);
      for (let i = 0; i < objectKeys.length; i++) {
        let key = objectKeys[i];
        let keyAttr = this.displayModel[key];
        if (keyAttr === 'array') {
          result[key] = this.to_array(data[key]);
          continue;
        }
        if (keyAttr === 'object') {
          result[key] = this.to_object(data[key]);
          continue;
        }
        result[key] = data[key];
      }
      return result;
    }

    //data is null or undefined
    if (isNone(data)) {
      console.warn('findSerializer response data is null');
      return this.to_array();
    }

    // rootKey is empty
    if (!this.rootKey) {
      return this.to_array(data);
    }

    // response data must be array
    if (!isArray(data[this.rootKey])) {
      console.warn(
        'findSerializer parsedData is not array',
        data,
        this.rootKey
      );
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
  findOneSerializer: function (data) {
    //data is null or undefined
    if (isNone(data)) {
      console.warn('findOneSerializer response data is null');
      return this.to_object();
    }

    // rootKey is empty
    if (!this.rootKey) {
      return data;
    }

    // parsedObject must be object
    if (isNone(data[this.rootKey])) {
      console.warn('findOneSerializer parsedObject is null');
      return this.to_object();
    }

    return this.to_object(data[this.rootKey]);
  },
  to_array: function (data) {
    return A(data || []);
  },
  to_object: function (data) {
    return EmberObject.create(data || {});
  },
  /**
   serializer for save method
   @method saveSerializer
   @param {Object} data response data from backend
   @return serializer data
   */
  saveSerializer: function (data) {
    return data;
  },
  /**
   serializer for delete
   @method deleteSerializer
   @param {Object} data response data from backend
   @return serializer data
   */
  deleteSerializer: function (data) {
    return data;
  },
  init: function () {
    this._super(...arguments);
    if (typeof this.rootKey !== 'string') {
      throw new Error(`rootKey only allow string type, now is ${this.rootKey}`);
    }
  },
});
