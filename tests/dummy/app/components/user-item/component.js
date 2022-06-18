import Component from '@ember/component';
import { formComponent } from 'ember-easy-orm/mixins/form';
import { service } from '@ember/service';


export default Component.extend(formComponent, {
    store: service('store'),
    modelName: 'user',
});
