
/**
 * Expose 'Mod'
 */

module.exports = function() {

  var that = {};

  that.click = function(query) {
  	var el = document.querySelector(query);
  	var ev = document.createEvent('Events');
    ev.initEvent('click', true, false);
    el.dispatchEvent(ev);
  };

  that.press = function() {

  };

  that.type = function() {

  };

  return that;
};
