export function initialize(application) {
    application.inject('route', 'store', 'service:store');
    application.inject('component', 'store', 'service:store');
    application.inject('controller', 'store', 'service:store');
}

export default {
    initialize,
};
