import RESTAdapter from '@ember-data/adapter/rest';

export default RESTAdapter.extend({
  /**
   The api host, default is current host
   @property {String} host
   @default  ""
   */
  host: '',

  /**
   *
   * @param string modelName keep path singular
   * @returns
   */
  pathForType(modelName) {
    return modelName;
  },

  /**
   * 
    @method buildURL
    @public
    @param {String} modelName
    @param {(String|Array|Object)} id single id or array of ids or query
    @param {(Snapshot|SnapshotRecordArray)} snapshot single snapshot or array of snapshots
    @param {String} requestType
    @param {Object} query object of query parameters to send for query requests.
    @return {String} url
   */
  buildURL(modelName, id, snapshot, requestType, query) {
    if (typeof id === 'string') {
      return;
    }

    let url = this._super(modelName, id, snapshot, requestType, query);
    return `${this.host}${url}`;
  },
});
