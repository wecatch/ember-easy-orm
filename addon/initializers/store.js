export function initialize() {
    let application = arguments[1] || arguments[0];
    application.inject('route', 'store', 'service:store');
    application.inject('controller', 'store', 'service:store');
    application.inject('component', 'store', 'service:store');
}

export default {
    name: 'store',
    initialize: initialize,
};
