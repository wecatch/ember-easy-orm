import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

import config from 'dummy/config/environment';
const rootURL = config.rootURL;

export default class StoreController extends Controller {
  idUrl = rootURL == '/' ? '/v1/user/1' : rootURL + '/v1/user/1';
  noIdurl = rootURL == '/' ? '/v2/user' : rootURL + '/v2/user';
  @service store;
  @tracked message;

  @action
  storePut() {
    this.store.request.put(this.idUrl, { dataType: 'text' }).then((data) => {
      this.message = `store put call response ${JSON.stringify(data)}`;
    });
  }

  @action
  storeGet() {
    this.store.request.get(this.noIdurl).then((data) => {
      this.message = `store get call response ${JSON.stringify(data)}`;
    });
  }

  @action
  storeDelete() {
    this.store.request.delete(this.idUrl, { dataType: 'text' }).then((data) => {
      this.message = `store delete call response ${JSON.stringify(data)}`;
    });
  }

  @action
  storePost() {
    this.store.request
      .post(this.idUrl, {
        data: { name: 'name', gender: 'f' },
        dataType: 'text',
      })
      .then((data) => {
        this.message = `store post call response ${JSON.stringify(data)}`;
      });
  }

  @action
  storeAjaxFail() {
    this.store
      .ajax('put', this.idUrl)
      .then((data) => {
        this.message = `store ajax call response ${JSON.stringify(data)}`;
      })
      .catch((reason) => {
        this.message = `store ajax call response ${reason}`;
      });
  }

  @action
  errorRequest() {
    this.store
      .ajax('put', '/v1/404/1')
      .then((data) => {
        this.message = `store ajax call response ${JSON.stringify(data)}`;
      })
      .catch((reason) => {
        this.message = `store ajax call response ${reason}`;
      });
  }

  @action
  storeAjaxSuccess() {
    this.store
      .ajax('put', this.idUrl, { dataType: 'text' })
      .then((data) => {
        this.message = `store ajax call response ${JSON.stringify(data)}`;
      })
      .catch((reason) => {
        this.message = `store ajax call response ${reason}`;
      });
  }
}
