export function initialize() {
   const application = arguments[1] || arguments[0];
   application.inject('component', 'eventBus', 'service:eventBus');
}

export default {
    name: 'event-bus',
    initialize: initialize
};
