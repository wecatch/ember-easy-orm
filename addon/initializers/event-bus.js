export function initialize(application ) {
  application.inject('component', 'eventBus', 'service:eventBus');
}

export default {
  name: 'event-bus',
  initialize: initialize
};
