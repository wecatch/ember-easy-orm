import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import config from 'dummy/config/environment';

const rootURL = config.rootURL;

export default class IndexController extends Controller {
  url = rootURL == '/' ? '/v1/user/1' : rootURL + '/v1/user/1';

  @service store;
  @tracked message = '';

  @action
  save(model) {
    this.store.save('user', model, { dataType: 'text' });
  }

  @action
  create() {
    let record = this.store.createRecord('user', {
      name: 'hello world',
      gender: 'f',
    });
    this.store.save('user', record);
  }

  @action
  remove(model) {
    this.store.deleteRecord('user', model);
    this.model.removeObject(model);
  }

  @action
  modelPut() {
    this.store
      .save('user', { _id: 1, name: 'name', gender: 'f' })
      .then((data) => {
        this.message = `model put call response ${JSON.stringify(data)}`;
      });
  }

  @action
  modelGet() {
    this.store.find('user').then((data) => {
      this.message = `model get call response ${JSON.stringify(data)}`;
    });
  }

  @action
  modelDelete() {
    this.store.deleteRecord('user', 1).then((data) => {
      this.message = `model delete call response ${JSON.stringify(data)}`;
    });
  }

  @action
  modelPost() {
    this.store.save('user', { name: 'name', gender: 'f' }).then((data) => {
      this.message = `model post call response ${JSON.stringify(data)}`;
    });
  }

  @action
  modelAjaxFail() {
    this.store
      .modelFor('user')
      .ajax('put', this.url)
      .then((data) => {
        this.message = `model ajax call response ${JSON.stringify(data)}`;
      })
      .catch((reason) => {
        this.message = `model ajax call response ${reason}`;
      });
  }

  @action
  modelAjaxSuccess() {
    this.store
      .modelFor('user')
      .ajax('put', this.url)
      .then((data) => {
        this.message = `model ajax call response ${JSON.stringify(data)}`;
      })
      .catch((reason) => {
        this.message = `model ajax call response ${reason}`;
      });
  }
}
