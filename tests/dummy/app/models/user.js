import EmberObject from '@ember/object';
import model, { DS } from 'ember-easy-orm/mixins/model';

const { attr } = DS;

export default class UserModel extends EmberObject.extend(model) {
  url = '/v1/user_json';

  RESTSerializer(data) {
    return data;
  }

  saveSerializer(data) {
    return data.res['user'];
  }

  constructor() {
    super(...arguments);
    this.model = {
      name: attr('string'),
      gender: attr('string'),
      age: attr('number'),
      hobby: attr('array'),
      birth: attr({
        defaultValue: function () {
          return new Date();
        },
      }),
    };

    this.ajaxSettings = {
      traditional: true,
      dataType: 'json',
    };
  }
}
