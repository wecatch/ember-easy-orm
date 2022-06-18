import RESTSerializer from '@ember-data/serializer/rest';

export default RESTSerializer.extend({
  /**
   *
   * @param {*} store  Model class for the request
   * @param {*} primayModelClass
   * @param {*} payload
   * @param {*} id
   * @param {*} requestType findRecord', 'queryRecord', 'findAll', 'findBelongsTo', 'findHasMany', 'findMany', 'query', 'createRecord', 'deleteRecord', 'updateRecord'
   * @returns
   */
  normalizeResponse(store, primayModelClass, payload, id, requestType) {
    if (payload.code === 0) {
      payload = payload.res;
    }
    return payload;
  },
  normalizeFindAllResponse(store, primayModelClass, payload, id, requestType) {
    if (payload.code && payload.code !== 0) {
      payload = [];
    }
    return payload;
  },
});
