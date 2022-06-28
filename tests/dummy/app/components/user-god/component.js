// eslint-disable-next-line ember/no-mixins
import { GodForm } from 'ember-easy-orm/mixins/form';

export default class UserGodComponent extends GodForm {
  constructor() {
    super(...arguments);
    super.modelName = 'user';
  }
}
