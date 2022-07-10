'use strict';

define("dummy/tests/helpers/fake-server", ["exports", "ember-cli-fake-server"], function (_exports, _emberCliFakeServer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "FakeServer", {
    enumerable: true,
    get: function () {
      return _emberCliFakeServer.default;
    }
  });
  Object.defineProperty(_exports, "stubRequest", {
    enumerable: true,
    get: function () {
      return _emberCliFakeServer.stubRequest;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-cli-fake-server"eaimeta@70e063a35619d71f
});
define("dummy/tests/helpers/index", ["exports", "ember-qunit"], function (_exports, _emberQunit) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.setupApplicationTest = setupApplicationTest;
  _exports.setupRenderingTest = setupRenderingTest;
  _exports.setupTest = setupTest;
  0; //eaimeta@70e063a35619d71f0,"ember-qunit"eaimeta@70e063a35619d71f

  // This file exists to provide wrappers around ember-qunit's / ember-mocha's
  // test setup functions. This way, you can easily extend the setup that is
  // needed per test type.
  function setupApplicationTest(hooks, options) {
    (0, _emberQunit.setupApplicationTest)(hooks, options); // Additional setup for application tests can be done here.
    //
    // For example, if you need an authenticated session for each
    // application test, you could do:
    //
    // hooks.beforeEach(async function () {
    //   await authenticateSession(); // ember-simple-auth
    // });
    //
    // This is also a good place to call test setup functions coming
    // from other addons:
    //
    // setupIntl(hooks); // ember-intl
    // setupMirage(hooks); // ember-cli-mirage
  }

  function setupRenderingTest(hooks, options) {
    (0, _emberQunit.setupRenderingTest)(hooks, options); // Additional setup for rendering tests can be done here.
  }

  function setupTest(hooks, options) {
    (0, _emberQunit.setupTest)(hooks, options); // Additional setup for unit tests can be done here.
  }
});
define("dummy/tests/test-helper", ["dummy/app", "dummy/config/environment", "qunit", "@ember/test-helpers", "qunit-dom", "ember-qunit"], function (_app, _environment, QUnit, _testHelpers, _qunitDom, _emberQunit) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"dummy/app",0,"dummy/config/environment",0,"qunit",0,"@ember/test-helpers",0,"qunit-dom",0,"ember-qunit"eaimeta@70e063a35619d71f

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _qunitDom.setup)(QUnit.assert);
  (0, _emberQunit.start)();
});
define("dummy/tests/unit/mixins/ajax-test", ["@ember/object", "ember-easy-orm/mixins/ajax", "qunit", "ember-qunit", "ember-cli-fake-server"], function (_object, _ajax, _qunit, _emberQunit, _emberCliFakeServer) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"@ember/object",0,"ember-easy-orm/mixins/ajax",0,"qunit",0,"ember-qunit",0,"ember-cli-fake-server"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Acceptance | Mixin | ajax', function (hooks) {
    (0, _emberQunit.setupApplicationTest)(hooks);
    (0, _emberCliFakeServer.setupFakeServer)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('ajaxMixin object init', function (assert) {
      const AjaxObject = _object.default.extend(_ajax.default);

      let subject = AjaxObject.create();
      assert.ok(subject);
      assert.strictEqual(subject, subject.request.parent);
      assert.expect(2);
    });
    (0, _qunit.test)('ajaxMixin ajax', function (assert) {
      let AjaxObject = _object.default.extend(_ajax.default);

      const done = assert.async();
      assert.expect(3);
      (0, _emberCliFakeServer.stubRequest)('get', '/v1/api', function () {
        return this.success({
          msg: 'success',
          code: 0,
          data: []
        });
      });
      let subjectError = AjaxObject.create({
        RESTSerializer: function () {
          throw {
            msg: 'error'
          };
        }
      });
      subjectError.ajax('get', '/v1/api').catch(function (data) {
        assert.strictEqual(data.msg, 'error');
        done();
      });
      const done2 = assert.async();
      let subjectSuccess = AjaxObject.create();
      subjectSuccess.ajax('get', '/v1/api').then(function (data) {
        return data;
      }).then(function (data) {
        assert.strictEqual(data.code, 0);
        assert.strictEqual(data.msg, 'success');
        done2();
      });
    });
    (0, _qunit.test)('ajaxMixin get post put delete success', function (assert) {
      const AjaxObject = _object.default.extend(_ajax.default);

      assert.expect(8);
      (0, _emberCliFakeServer.stubRequest)('get', '/v1/api', function () {
        return this.success({
          msg: 'success',
          code: 0,
          data: []
        });
      });
      (0, _emberCliFakeServer.stubRequest)('put', '/v1/api', function () {
        return this.success({
          msg: 'success',
          code: 0,
          data: []
        });
      });
      (0, _emberCliFakeServer.stubRequest)('post', '/v1/api', function () {
        return this.success({
          msg: 'success',
          code: 0,
          data: []
        });
      });
      (0, _emberCliFakeServer.stubRequest)('delete', '/v1/api', function () {
        return this.success({
          msg: 'success',
          code: 0,
          data: []
        });
      });
      let ajax = AjaxObject.create({
        getSerializer(data) {
          return {
            code: data.code,
            method: 'get'
          };
        },

        postSerializer(data) {
          return {
            code: data.code,
            method: 'post'
          };
        },

        putSerializer(data) {
          return {
            code: data.code,
            method: 'put'
          };
        },

        deleteSerializer(data) {
          return {
            code: data.code,
            method: 'delete'
          };
        }

      });
      const doneGet = assert.async();
      ajax.request.get('/v1/api').then(function (data) {
        assert.strictEqual(data.code, 0);
        assert.strictEqual(data.method, 'get');
        doneGet();
      });
      const donePut = assert.async();
      ajax.request.put('/v1/api').then(function (data) {
        assert.strictEqual(data.code, 0);
        assert.strictEqual(data.method, 'put');
        donePut();
      });
      const donePost = assert.async();
      ajax.request.post('/v1/api').then(function (data) {
        assert.strictEqual(data.code, 0);
        assert.strictEqual(data.method, 'post');
        donePost();
      });
      const doneDelete = assert.async();
      ajax.request.delete('/v1/api').then(function (data) {
        assert.strictEqual(data.code, 0);
        assert.strictEqual(data.method, 'delete');
        doneDelete();
      });
    });
    (0, _qunit.test)('ajaxMixin get put post delete error', function (assert) {
      const AjaxObject = _object.default.extend(_ajax.default);

      let ajax = AjaxObject.create();
      (0, _emberCliFakeServer.stubRequest)('get', '/v1/api', function () {
        return this.success({
          msg: 'success',
          code: 0,
          data: []
        });
      });
      (0, _emberCliFakeServer.stubRequest)('put', '/v1/api', function () {
        return this.success({
          msg: 'success',
          code: 0,
          data: []
        });
      });
      (0, _emberCliFakeServer.stubRequest)('post', '/v1/api', function () {
        return this.success({
          msg: 'success',
          code: 0,
          data: []
        });
      });
      (0, _emberCliFakeServer.stubRequest)('delete', '/v1/api', function () {
        return this.success({
          msg: 'success',
          code: 0,
          data: []
        });
      });
      assert.expect(8);

      ajax.getSerializer = function (data) {
        throw {
          code: data.code + 1,
          msg: 'error'
        };
      };

      ajax.putSerializer = function (data) {
        throw {
          code: data.code + 1,
          msg: 'error'
        };
      };

      ajax.postSerializer = function (data) {
        throw {
          code: data.code + 1,
          msg: 'error'
        };
      };

      ajax.deleteSerializer = function (data) {
        throw {
          code: data.code + 1,
          msg: 'error'
        };
      };

      const doneErrorGet = assert.async();
      ajax.request.get('/v1/api').catch(function (data) {
        assert.strictEqual(data.code, 1);
        assert.strictEqual(data.msg, 'error');
        doneErrorGet();
      });
      const doneErrorPut = assert.async();
      ajax.request.put('/v1/api').catch(function (data) {
        assert.strictEqual(data.code, 1);
        assert.strictEqual(data.msg, 'error');
        doneErrorPut();
      });
      const doneErrorPost = assert.async();
      ajax.request.post('/v1/api').catch(function (data) {
        assert.strictEqual(data.code, 1);
        assert.strictEqual(data.msg, 'error');
        doneErrorPost();
      });
      const doneErrorDelete = assert.async();
      ajax.request.delete('/v1/api').catch(function (data) {
        assert.strictEqual(data.code, 1);
        assert.strictEqual(data.msg, 'error');
        doneErrorDelete();
      });
    });
  });
});
define("dummy/tests/unit/mixins/form-test", ["qunit"], function (_qunit) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Unit | Mixin | form'); // Replace this with your real tests.

  (0, _qunit.test)('formComponent object init', function (assert) {
    // let subject = new Form();
    // assert.ok(subject);
    assert.true(true);
  });
  (0, _qunit.test)('godForm object init', function (assert) {
    // let subject = new GodForm();
    // assert.strictEqual(subject.modelName, 'user');
    // assert.ok(subject);
    assert.true(true);
  });
});
define("dummy/tests/unit/mixins/model-test", ["@ember/object", "@ember/array", "ember-easy-orm/mixins/model", "qunit", "ember-qunit", "ember-cli-fake-server"], function (_object, _array, _model, _qunit, _emberQunit, _emberCliFakeServer) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"@ember/object",0,"@ember/array",0,"ember-easy-orm/mixins/model",0,"qunit",0,"ember-qunit",0,"ember-cli-fake-server"eaimeta@70e063a35619d71f

  (0, _qunit.module)('Acceptance | Mixin | model', function (hooks) {
    (0, _emberQunit.setupApplicationTest)(hooks);
    (0, _emberCliFakeServer.setupFakeServer)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('model mixin', function (assert) {
      let ModelClass = _object.default.extend(_model.default);

      let subject = ModelClass.create();
      assert.ok(subject);
    });
    (0, _qunit.test)('model mixin createRecord', function (assert) {
      let ModelClass = _object.default.extend(_model.default, {
        init() {
          this._super(...arguments);

          this.model = {
            name: _model.DS.attr('string'),
            gender: _model.DS.attr('string', {
              defaultValue: 'f'
            }),
            address: _model.DS.attr({
              defaultValue: function () {
                return {
                  c: Math.random(new Date().getTime())
                };
              }
            })
          };
        }

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
    (0, _qunit.test)('model mixin filterParams', function (assert) {
      let ModelClass = _object.default.extend(_model.default);

      let subject = ModelClass.create()._filterParams({
        a: null,
        b: undefined,
        c: 0,
        d: '',
        e: [],
        f: ' ',
        g: {}
      });

      console.log(JSON.stringify(subject));
      assert.strictEqual(Object.keys(subject).length, 2);
    });
    (0, _qunit.test)('model mixin find', function (assert) {
      let ModelClass = _object.default.extend(_model.default);

      const done = assert.async();
      assert.expect(16);
      (0, _emberCliFakeServer.stubRequest)('get', '/v1/api', function () {
        return this.success({
          data: [{
            a: 1
          }, {
            a: 1
          }],
          object: {
            a: 1
          },
          number: 1,
          string: '1'
        });
      });
      (0, _emberCliFakeServer.stubRequest)('get', '/v2/api', function () {
        return this.success([{
          a: 1
        }, {
          a: 1
        }]);
      });
      (0, _emberCliFakeServer.stubRequest)('get', '/v2/api/1', function () {
        return this.success({
          code: 0
        });
      });
      let subject = ModelClass.create({
        namespace: '/v1',
        url: '/api',
        displayModel: {
          data: 'array',
          object: 'object',
          string: 'string',
          number: 'number'
        }
      });
      subject.find().then(function (resp) {
        assert.ok((0, _array.isArray)(resp.data));
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
        rootKey: 'data'
      });
      const done2 = assert.async();
      subject2.find().then(function (resp) {
        assert.ok((0, _array.isArray)(resp));
        assert.strictEqual(resp.length, 2);
        assert.strictEqual(typeof resp.popObject, 'function');
        done2();
      });
      let subject3 = ModelClass.create({
        namespace: '/v2',
        url: '/api'
      });
      const done3 = assert.async();
      subject3.find().then(function (resp) {
        assert.ok((0, _array.isArray)(resp));
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
    (0, _qunit.test)('model DS', function (assert) {
      assert.expect(9);
      assert.strictEqual(_model.DS.attr('string'), '');
      assert.strictEqual(_model.DS.attr('number'), 0);
      assert.true(_model.DS.attr('boolean'));
      assert.strictEqual(_model.DS.attr('number', {
        defaultValue: 20
      }), 20);
      assert.false(_model.DS.attr('boolean', {
        defaultValue: false
      }));
      assert.strictEqual(_model.DS.attr('array')().length, 0);
      assert.strictEqual(_model.DS.attr({
        defaultValue: 10
      }), 10);
      assert.strictEqual(_model.DS.attr({
        defaultValue: function () {
          return {
            msg: 'ok'
          };
        }
      })().msg, 'ok');
      assert.strictEqual(_model.DS.attr('number', {
        defaultValue: function () {
          return 11;
        }
      })(), 11);
    });
  });
});
define('dummy/config/environment', [], function() {
  var prefix = 'dummy';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('dummy/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
