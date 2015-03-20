
/**
 * Simulate user actions.
 *
 * Examples:
 *
 *   var bob = user();
 *
 * @api public
 */

module.exports = function() {

  var that = {};

  /**
   * Click element.
   *
   * Examples:
   *
   *   bob.click('.btn');
   *   bob.click(300, 200);
   *   
   * @param {String | Number} x
   * @param {Number} y
   * @return {this}
   * @api public
   */
  
  that.click = function(x, y) {
  	var ev = document.createEvent('Events');
  	var el;
  	if(typeof x === 'string') {
			el = document.querySelector(x);
  	} else {
  		el = document.elementFromPoint(x, y);
  	}
  	ev.initEvent('click', true, false);
  	el.dispatchEvent(ev);
  };

  that.press = function() {

  };

  that.type = function() {

  };

  return that;
};
