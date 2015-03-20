
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
	var btn = document.createElement('btn');
	btn.className = 'btn';
	document.body.appendChild(btn);

	assert.plan(1);
	btn.addEventListener('click', function() {
		assert.pass('click from selector');
	});
	user.click('btn');
});

test('click position', function(assert) {
	// note: should refactor button creation
	var btn = document.createElement('btn');
	btn.innerHTML = 'some text';
	document.body.appendChild(btn);
	var sizes = btn.getBoundingClientRect();
	var x = sizes.left;
	var y = sizes.top;

	assert.plan(1);
	btn.addEventListener('click', function() {
		assert.pass('click from position');
	});
	user.click(x, y);
});
