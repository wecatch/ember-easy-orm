import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Service | store', function (hooks) {
    setupTest(hooks);
    
    // TODO: Replace this with your real tests.
    test('it exists', function (assert) {
        let service = this.owner.lookup('service:store');
        assert.ok(service);
    });

    test('empty attr', function(assert){
        let service = this.owner.lookup('service:store');
        let obj = {
            a: 0,
            b: null,
            c: [],
            d: undefined,
            e: "",
            f: {}
        }
        // ["b", "d", "e"]
        const emptyKeys = service.emptyAttrs(obj, Object.keys(obj), ["c"]);
        assert.true(emptyKeys.indexOf("b") !== -1);
        assert.true(emptyKeys.indexOf("d") !== -1);
        assert.true(emptyKeys.indexOf("e") !== -1);
        assert.false(emptyKeys.indexOf("a") !== -1);
        assert.false(emptyKeys.indexOf("f") !== -1);
        assert.false(emptyKeys.indexOf("c") !== -1);
    });
});
