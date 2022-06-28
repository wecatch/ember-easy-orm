import EmberObject from '@ember/object';
import AjaxMixin from 'ember-easy-orm/mixins/ajax';
import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import { stubRequest, setupFakeServer } from 'ember-cli-fake-server';

module('Acceptance | Mixin | ajax', function (hooks) {
  setupApplicationTest(hooks);
  setupFakeServer(hooks);

  // Replace this with your real tests.
  test('ajaxMixin object init', function (assert) {
    const AjaxObject = EmberObject.extend(AjaxMixin);
    let subject = AjaxObject.create();
    assert.ok(subject);
    assert.equal(subject, subject.request.parent);
    assert.expect(2);
  });

  test('ajaxMixin ajax', function (assert) {
    let AjaxObject = EmberObject.extend(AjaxMixin);
    const done = assert.async();
    assert.expect(3);
    stubRequest('get', '/v1/api', function () {
      return this.success({
        msg: 'success',
        code: 0,
        data: [],
      });
    });

    let subjectError = AjaxObject.create({
      RESTSerializer: function () {
        throw {
          msg: 'error',
        };
      },
    });

    subjectError.ajax('get', '/v1/api').catch(function (data) {
      assert.equal(data.msg, 'error');
      done();
    });

    const done2 = assert.async();
    let subjectSuccess = AjaxObject.create();
    subjectSuccess
      .ajax('get', '/v1/api')
      .then(function (data) {
        return data;
      })
      .then(function (data) {
        assert.equal(data.code, 0);
        assert.equal(data.msg, 'success');
        done2();
      });
  });

  test('ajaxMixin get post put delete success', function (assert) {
    const AjaxObject = EmberObject.extend(AjaxMixin);

    assert.expect(8);

    stubRequest('get', '/v1/api', function () {
      return this.success({
        msg: 'success',
        code: 0,
        data: [],
      });
    });

    stubRequest('put', '/v1/api', function () {
      return this.success({
        msg: 'success',
        code: 0,
        data: [],
      });
    });

    stubRequest('post', '/v1/api', function () {
      return this.success({
        msg: 'success',
        code: 0,
        data: [],
      });
    });

    stubRequest('delete', '/v1/api', function () {
      return this.success({
        msg: 'success',
        code: 0,
        data: [],
      });
    });

    let ajax = AjaxObject.create({
      getSerializer(data) {
        return {
          code: data.code,
          method: 'get',
        };
      },
      postSerializer(data) {
        return {
          code: data.code,
          method: 'post',
        };
      },
      putSerializer(data) {
        return {
          code: data.code,
          method: 'put',
        };
      },
      deleteSerializer(data) {
        return {
          code: data.code,
          method: 'delete',
        };
      },
    });
    const doneGet = assert.async();
    ajax.request.get('/v1/api').then(function (data) {
      assert.equal(data.code, 0);
      assert.equal(data.method, 'get');
      doneGet();
    });

    const donePut = assert.async();
    ajax.request.put('/v1/api').then(function (data) {
      assert.equal(data.code, 0);
      assert.equal(data.method, 'put');
      donePut();
    });

    const donePost = assert.async();
    ajax.request.post('/v1/api').then(function (data) {
      assert.equal(data.code, 0);
      assert.equal(data.method, 'post');
      donePost();
    });

    const doneDelete = assert.async();
    ajax.request.delete('/v1/api').then(function (data) {
      assert.equal(data.code, 0);
      assert.equal(data.method, 'delete');
      doneDelete();
    });
  });

  test('ajaxMixin get put post delete error', function (assert) {
    const AjaxObject = EmberObject.extend(AjaxMixin);
    let ajax = AjaxObject.create();

    stubRequest('get', '/v1/api', function () {
      return this.success({
        msg: 'success',
        code: 0,
        data: [],
      });
    });

    stubRequest('put', '/v1/api', function () {
      return this.success({
        msg: 'success',
        code: 0,
        data: [],
      });
    });

    stubRequest('post', '/v1/api', function () {
      return this.success({
        msg: 'success',
        code: 0,
        data: [],
      });
    });

    stubRequest('delete', '/v1/api', function () {
      return this.success({
        msg: 'success',
        code: 0,
        data: [],
      });
    });

    assert.expect(8);
    ajax.getSerializer = function (data) {
      throw {
        code: data.code + 1,
        msg: 'error',
      };
    };

    ajax.putSerializer = function (data) {
      throw {
        code: data.code + 1,
        msg: 'error',
      };
    };

    ajax.postSerializer = function (data) {
      throw {
        code: data.code + 1,
        msg: 'error',
      };
    };

    ajax.deleteSerializer = function (data) {
      throw {
        code: data.code + 1,
        msg: 'error',
      };
    };

    const doneErrorGet = assert.async();
    ajax.request.get('/v1/api').catch(function (data) {
      assert.equal(data.code, 1);
      assert.equal(data.msg, 'error');
      doneErrorGet();
    });

    const doneErrorPut = assert.async();
    ajax.request.put('/v1/api').catch(function (data) {
      assert.equal(data.code, 1);
      assert.equal(data.msg, 'error');
      doneErrorPut();
    });

    const doneErrorPost = assert.async();
    ajax.request.post('/v1/api').catch(function (data) {
      assert.equal(data.code, 1);
      assert.equal(data.msg, 'error');
      doneErrorPost();
    });

    const doneErrorDelete = assert.async();
    ajax.request.delete('/v1/api').catch(function (data) {
      assert.equal(data.code, 1);
      assert.equal(data.msg, 'error');
      doneErrorDelete();
    });
  });
});
