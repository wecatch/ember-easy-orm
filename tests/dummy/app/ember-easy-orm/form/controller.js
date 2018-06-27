import Controller from '@ember/controller';
import {godForm} from 'ember-easy-orm/mixins/form'; 

export default Controller.extend(godForm, {
    modelName: 'user'
});