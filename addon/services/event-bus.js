import Ember from 'ember';

export default Ember.Service.extend(Ember.Evented, {
    pub: function (argument) {
        return this.trigger.apply(this, arguments);
    },
    sub: function (){
        return this.on.apply(this, arguments);
    },
    unsub: function(){
        return this.off.apply(this, arguments);
    }
});
