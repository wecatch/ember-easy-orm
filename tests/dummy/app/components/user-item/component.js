// eslint-disable-next-line ember/no-mixins
import { Form } from 'ember-easy-orm/mixins/form';

export default class UserItemComponent extends Form {
  constructor() {
    super(...arguments);
    super.modelName = 'user';
  }
}
