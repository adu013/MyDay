import { setupTest } from 'myday/tests/helpers';
import { module, test } from 'qunit';

module('Unit | Adapter | activity', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    const adapter = this.owner.lookup('adapter:activity');
    assert.ok(adapter, 'adapter exists');
  });
});
