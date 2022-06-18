import Model, { attr } from '@ember-data/model';

export default class UserModel extends Model {
  @attr name;
  @attr('number') id;

  get fullName() {
    return `${this.id} ${this.name}`;
  }
}
