import Controller from '@ember/controller';
import { godForm, GodForm } from 'ember-easy-orm/mixins/form';
import { service } from '@ember/service';
export default class FormController extends Controller.extend(godForm) {
    modelName = 'user';
    store = service('store');
}
