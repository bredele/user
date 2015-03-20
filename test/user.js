
/**
 * Test dependencies.
 */

var test = require('tape');
var user = require('..')();

test('api', function(assert) {
	assert.plan(3);
  assert.equal(typeof user.click, 'function');
  assert.equal(typeof user.press, 'function');
  assert.equal(typeof user.type, 'function');
});

test('click selector', function(assert) {
	
});