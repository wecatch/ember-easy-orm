import Ember from 'ember';
import AjaxMixin from 'ember-easy-orm/mixins/ajax';
import startApp from '../../helpers/start-app';
import { stubRequest, FakeServer } from '../../helpers/fake-server';
import { module, test } from 'qunit';

module('Unit | Mixin | ajax');

let App;

module('Unit: ajax', {
  beforeEach: function(){
    App = startApp();
  },
  afterEach: function(){
    Ember.run(App, 'destroy');
  },
  setup() {
    FakeServer.start();
  },
  teardown() {
    FakeServer.stop();
  }
});

// Replace this with your real tests.
test('ajaxMixin object init', function(assert) {
  let AjaxObject = Ember.Object.extend(AjaxMixin);
  let subject = AjaxObject.create();
  assert.ok(subject);
  assert.equal(subject, subject.request.parent);
  assert.expect(2);
});


test('ajaxMixin ajax get failed', function(assert){
    const done = assert.async();
    assert.expect(1);
    stubRequest('get', '/v1/api', function(){
      return this.success({
        msg: 'success',
        code: 0,
        data: []
      });
    });
    let AjaxObject = Ember.Object.extend(AjaxMixin);
    let subject = AjaxObject.create({
        RESTSerializer: function(){
            throw({msg: 'error'});
        }
    });

    subject.ajax('get', '/v1/api').catch(function(data){
        assert.equal(data.msg, 'error');
        done();
    });
});