/**
 store servie mange all model
 @module services
 @submodule store
 */
import Service from '@ember/service';
import {get} from '@ember/object';
import { getOwner } from '@ember/application';
import { keys } from '@ember/polyfills';
import $ from 'jquery';
import { isEmpty } from '@ember/utils';
import ajax from '../mixins/ajax';

/**
 store
 @public
 @class store
 **/
export default Service.extend(ajax, {
    modelFor(type) {
        // https://api.emberjs.com/ember/release/classes/ApplicationInstance/methods/lookup?anchor=lookup
        // 直接对 type 进行实例化
        return getOwner(this).lookup('model:' + type, { singleton: false });
    },
    /**
     find the record according to modelName
     @method find
     @param type modelName
     @param params query params
     @return  {Promise}
     */
    find(type, params) {
        return this.modelFor(type).find(params);
    },
    /**
     findOne the record according to modelName
     @method findOne
     @param type modelName
     @param _id primaryKey
     @param data query params
     @return  {Promise}
     */
    findOne(type, _id, data) {
        return this.modelFor(type).findOne(_id, data);
    },
    /**
     create the record according to modelName
     @method createRecord
     @param {String} type modelName
     @param {Object} init init data
     @return  {Promise}
     */
    createRecord(type, init) {
        return this.modelFor(type).createRecord(init);
    },
    /**
     delete the record according to modelName
     @method deleteRecord
     @param {String} type modelName
     @param {Object} model
     @param {Object} data query params
     @return  {Promise}
     */
    deleteRecord(type, model, data) {
        return this.modelFor(type).deleteRecord(model, data);
    },
    /**
     save the record according to modelName
     @method save
     @param type modelName
     @param model model
     @return  {Promise}
     */
    save(type, model) {
        return this.modelFor(type).save(model);
    },
    /**
     filter model empty attrs [null, undefined, ""]
     @method emptyAttrs
     @param model object need to be filterd
     @param {Array} filterKeys 
     @param {Array} unfilterKeys not need to be filterd
     @return {Array} all keys attribute value is empty
     */
    emptyAttrs(model, filterKeys, unfilterKeys) {
        return filterKeys
            .filter(function (item) {
                return unfilterKeys.indexOf(item) === -1;
            })
            .filter(function (item) {
                if (typeof item === 'string') {
                    return isEmpty(get(model, item));
                }
            });
    },
});
