/* eslint-disable ember/use-ember-data-rfc-395-imports */
/* eslint-disable ember/no-mixins */
/* eslint-disable ember/no-classic-classes */
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
        this.model = EmberObject.extend({
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
        });
      },
    });
    let subject = ModelClass.create();
    assert.ok(subject);
    let record = subject.createRecord();
    assert.strictEqual(record.name, '');
    assert.strictEqual(record.gender, 'f');
    let record2 = subject.createRecord();
    assert.notEqual(record.address.c, record2.address.c);
    assert.strictEqual(record.gender, record2.gender);
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
    console.log(JSON.stringify(subject));
    assert.strictEqual(Object.keys(subject).length, 2);
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
      assert.strictEqual(resp.data.length, 2);
      assert.strictEqual(typeof resp.data.popObject, 'function');

      assert.strictEqual(typeof resp.object, 'object');
      assert.strictEqual(resp.object.a, 1);

      assert.strictEqual(typeof resp.string, 'string');
      assert.strictEqual(typeof resp.number, 'number');

      assert.strictEqual(resp.string, '1');
      assert.strictEqual(resp.number, 1);

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
      assert.strictEqual(resp.length, 2);
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
      assert.strictEqual(resp.length, 2);
      assert.strictEqual(typeof resp.popObject, 'function');

      done3();
    });

    const done4 = assert.async();
    subject3.findOne('1').then(function (resp) {
      assert.strictEqual(resp.code, 0);
      done4();
    });
  });

  test('model DS', function (assert) {
    assert.expect(9);

    let cls = EmberObject.extend({
      str: DS.attr('string'),
      num: DS.attr('number'),
      bool: DS.attr('boolean'),
      num2: DS.attr('number', {
        defaultValue: 20,
      }),
      bool2: DS.attr('boolean', {
        defaultValue: false,
      }),
      arry: DS.attr('array'),
      num3: DS.attr({
        defaultValue: 10,
      }),
      msg: DS.attr({
        defaultValue: function () {
          return {
            msg: 'ok',
          };
        },
      }),
      num4: DS.attr('number', {
        defaultValue: function () {
          return 11;
        },
      }),
    });

    let obj = cls.create();
    assert.strictEqual(obj.str, '');
    assert.strictEqual(obj.num, 0);
    assert.true(obj.bool);
    assert.strictEqual(obj.num2, 20);
    assert.false(obj.bool2);
    assert.strictEqual(obj.arry.length, 0);
    assert.strictEqual(obj.num3, 10);
    assert.strictEqual(obj.msg.msg, 'ok');
    assert.strictEqual(obj.num4, 11);
  });
});
