import Ember from 'ember';
import {godForm} from 'ember-easy-orm/mixins/form'; 

export default Ember.Controller.extend(godForm, {
    modelName: 'user'
});