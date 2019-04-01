import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | all_songs', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:all-songs');
    assert.ok(route);
  });
});
