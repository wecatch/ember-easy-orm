import Component from '@ember/component';
import {formComponent} from 'ember-easy-orm/mixins/form'; 


export default Component.extend(formComponent, {
    modelName: 'user'
});