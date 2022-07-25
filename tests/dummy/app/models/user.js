import EmberObject from '@ember/object';
// eslint-disable-next-line ember/no-mixins
import model, { DS } from 'ember-easy-orm/mixins/model';
import config from 'dummy/config/environment';

const { attr } = DS;
export default class UserModel extends EmberObject.extend(model) {
  url =
    config.rootURL == '/' ? '/v1/user_json' : config.rootURL + '/v1/user_json';

  RESTSerializer(data) {
    return data;
  }

  // urlForSave(){
  //   return config.rootURL == '/' ? '/v1/user_json' : config.rootURL + '/v2/user';
  // }

  saveSerializer(data) {
    return data.res['user'];
  }

  constructor() {
    super(...arguments);
    // eslint-disable-next-line ember/no-classic-classes
    this.model = EmberObject.extend({
      name: attr('string'),
      gender: attr('string'),
      age: attr('number'),
      hobby: attr('array'),
      birth: attr({
        defaultValue: function () {
          return new Date();
        },
      }),
    });

    this.ajaxSettings = {
      traditional: true,
      dataType: 'json',
    };
  }
}
