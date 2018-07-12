/**
store servie mange all model
@module services
@submodule store
*/
import Ember from 'ember';
import Service from '@ember/service';
import EmberObject from '@ember/object';
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
        var kclass; 
        if(getOwner){
            kclass = getOwner(this).lookup('model:'+type, { singleton: false });
            if (!kclass) {
                Ember.Logger.warn('model:' + type + ' is not found');
                return EmberObject.create();
            }
            return kclass;
        }

        kclass = this.container.lookupFactory('model:' + type);
        if (!kclass) {
            Ember.Logger.warn('model:' + type + ' is not found');
            return EmberObject.create();
        }
        return kclass.create();
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
    filter model empty attrs
    @method emptyAttrs
    @param type modelName
    @param model object need to be filterd
    @param filterKeys default is model keys
    @param unfilterKeys not need to be filterd
    @return {Array} all keys attribute value is empty
    */
    emptyAttrs(type, model, filterKeys, unfilterKeys) {
        var emptyKeys = [];
        var filtered = filterKeys || keys(this.modelFor(type).model);
        var unfiltered = unfilterKeys || [];

        var finallyfiltered = filtered.filter(function(item) {
            return unfiltered.indexOf(item) === -1;
        });

        $.each(finallyfiltered, function(index, key) {
            if (typeof key === "string") {
                if (isEmpty(model.get(key))) {
                    emptyKeys.push(key);
                }
            }
        });
        return emptyKeys;
    }
});