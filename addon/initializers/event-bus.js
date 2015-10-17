export function initialize( container, application ) {
  application.inject('component', 'eventBus', 'service:eventBus');
}

export default {
  name: 'event-bus',
  initialize: initialize
};
