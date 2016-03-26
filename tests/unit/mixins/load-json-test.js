import Ember from 'ember';
import LoadJsonMixin from 'intercom-party/mixins/load-json';
import { module, test } from 'qunit';

module('Unit | Mixin | load json');

// Replace this with your real tests.
test('it works', function(assert) {
  let LoadJsonObject = Ember.Object.extend(LoadJsonMixin);
  let subject = LoadJsonObject.create();
  assert.ok(subject);
});
