import EmberObject from '@ember/object';
import model, {
    DS
} from 'ember-easy-orm/mixins/model';

const {
    attr
} = DS;

export default EmberObject.extend(model, {
    url: '/v1/user_json',
    RESTSerializer: function(data) {
        return data;
    },
    saveSerializer: function(data) {
        return data.res['user'];
    },
    init() {
        this._super(...arguments);
        this.model = {
            'name': attr('string'),
            'gender': attr('string'),
            'age': attr('number'),
            'hobby': attr('array'),
            'birth': attr({
                defaultValue: function() {
                    return new Date();
                }
            })
        };

        this.ajaxSettings = {
            traditional: true,
            dataType: 'json'
        };
    }
});