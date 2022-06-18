import APIAdapter from 'ember-easy-orm/adapters/api';

export default class ApplicationAdapter extends APIAdapter {
  host = '';
  namespace = 'api';
}
