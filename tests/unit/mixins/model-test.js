import EmberObject from '@ember/object';
import { isArray } from '@ember/array';
import ModelMixin, { DS } from 'ember-easy-orm/mixins/model';
import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import { stubRequest, setupFakeServer } from 'ember-cli-fake-server';

module('Acceptance | Mixin | model', function (hooks) {
    setupApplicationTest(hooks);
    setupFakeServer(hooks);

    // Replace this with your real tests.
    test('model mixin', function (assert) {
        let ModelClass = EmberObject.extend(ModelMixin);
        let subject = ModelClass.create();
        assert.ok(subject);
    });

    test('model mixin createRecord', function (assert) {
        let ModelClass = EmberObject.extend(ModelMixin, {
            init() {
                this._super(...arguments);
                this.model = {
                    name: DS.attr('string'),
                    gender: DS.attr('string', {
                        defaultValue: 'f',
                    }),
                    address: DS.attr({
                        defaultValue: function () {
                            return {
                                c: Math.random(new Date().getTime()),
                            };
                        },
                    }),
                };
            },
        });
        let subject = ModelClass.create();
        assert.ok(subject);
        let record = subject.createRecord();
        assert.equal(record.name, '');
        assert.equal(record.gender, 'f');
        let record2 = subject.createRecord();
        assert.notEqual(record.address.c, record2.address.c);
        assert.equal(record.gender, record2.gender);
    });

    test('model mixin filterParams', function (assert) {
        let ModelClass = EmberObject.extend(ModelMixin);

        let subject = ModelClass.create()._filterParams({
            a: null,
            b: undefined,
            c: 0,
            d: '',
            e: [],
            f: ' ',
            g: {},
        });
        assert.equal(Object.keys(subject).length, 2);
    });

    test('model mixin find', function (assert) {
        let ModelClass = EmberObject.extend(ModelMixin);
        const done = assert.async();
        assert.expect(16);

        stubRequest('get', '/v1/api', function () {
            return this.success({
                data: [
                    {
                        a: 1,
                    },
                    {
                        a: 1,
                    },
                ],
                object: {
                    a: 1,
                },
                number: 1,
                string: '1',
            });
        });

        stubRequest('get', '/v2/api', function () {
            return this.success([
                {
                    a: 1,
                },
                {
                    a: 1,
                },
            ]);
        });

        stubRequest('get', '/v2/api/1', function () {
            return this.success({
                code: 0,
            });
        });

        let subject = ModelClass.create({
            namespace: '/v1',
            url: '/api',
            displayModel: {
                data: 'array',
                object: 'object',
                string: 'string',
                number: 'number',
            },
        });

        subject.find().then(function (resp) {
            assert.ok(isArray(resp.data));
            assert.equal(resp.data.length, 2);
            assert.strictEqual(typeof resp.data.popObject, 'function');

            assert.strictEqual(typeof resp.object, 'object');
            assert.equal(resp.object.a, 1);

            assert.strictEqual(typeof resp.string, 'string');
            assert.strictEqual(typeof resp.number, 'number');

            assert.equal(resp.string, '1');
            assert.equal(resp.number, 1);

            done();
        });

        let subject2 = ModelClass.create({
            namespace: '/v1',
            url: '/api',
            rootKey: 'data',
        });

        const done2 = assert.async();
        subject2.find().then(function (resp) {
            assert.ok(isArray(resp));
            assert.equal(resp.length, 2);
            assert.strictEqual(typeof resp.popObject, 'function');

            done2();
        });

        let subject3 = ModelClass.create({
            namespace: '/v2',
            url: '/api',
        });

        const done3 = assert.async();
        subject3.find().then(function (resp) {
            assert.ok(isArray(resp));
            assert.equal(resp.length, 2);
            assert.strictEqual(typeof resp.popObject, 'function');

            done3();
        });

        const done4 = assert.async();
        subject3.findOne('1').then(function (resp) {
            assert.equal(resp.code, 0);
            done4();
        });
    });

    test('model DS', function (assert) {
        assert.expect(9);

        assert.equal(DS.attr('string'), '');
        assert.equal(DS.attr('number'), 0);
        assert.true(DS.attr('boolean'));
        assert.equal(
            DS.attr('number', {
                defaultValue: 20,
            }),
            20
        );
        assert.false(
            DS.attr('boolean', {
                defaultValue: false,
            })
        );
        assert.equal(DS.attr('array')().length, 0);

        assert.equal(
            DS.attr({
                defaultValue: 10,
            }),
            10
        );
        assert.equal(
            DS.attr({
                defaultValue: function () {
                    return {
                        msg: 'ok',
                    };
                },
            })().msg,
            'ok'
        );

        assert.equal(
            DS.attr('number', {
                defaultValue: function () {
                    return 11;
                },
            })(),
            11
        );
    });
});
