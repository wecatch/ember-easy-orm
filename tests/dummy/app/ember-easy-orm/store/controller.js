import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class StoreController extends Controller {
  @service store;
  @tracked message;

  @action
  storePut() {
    let user = this.store.modelFor('user');
    this.store.request.parent === user.request.parent;
    this.store.request.parent === this.strore;
    user.request.parent === user;
    this.store.request.put('/v1/user/1', { dataType: 'text' }).then((data) => {
      this.message = `store put call response ${JSON.stringify(data)}`;
    });
  }

  @action
  storeGet() {
    this.store.request.get('/v1/user').then((data) => {
      this.message = `store get call response ${JSON.stringify(data)}`;
    });
  }

  @action
  storeDelete() {
    this.store.request
      .delete('/v1/user/1', { dataType: 'text' })
      .then((data) => {
        this.message = `store delete call response ${JSON.stringify(data)}`;
      });
  }

  @action
  storePost() {
    this.store.request
      .post('/v1/user', {
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
      .ajax('put', '/v1/user/1')
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
      .ajax('put', '/v1/user/1', { dataType: 'text' })
      .then((data) => {
        this.message = `store ajax call response ${JSON.stringify(data)}`;
      })
      .catch((reason) => {
        this.message = `store ajax call response ${reason}`;
      });
  }
}
