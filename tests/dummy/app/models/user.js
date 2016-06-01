import Ember from 'ember';
import model, {DS} from 'ember-easy-orm/mixins/model';

const {attr} = DS;

export default Ember.Object.extend(model, {
    model: {
        'name': attr('string'),
        'gender': attr('string'),
        'age': attr('number'),
        'hobby': attr('array'),
        'birth': attr({defaultValue: function(){
                return new Date();
            }
        })
    },
    url: '/v1/user_json',
    ajaxSettings: {
        traditional: true,
        dataType: 'json'
    },
    RESTSerializer: function(data){
        return data;
    },
    saveSerializer: function(data){
        return data.res['user'];
    }
});