var assign = require('object-assign');
var EventEmitter = require('events').EventEmitter;

var CHANGED = 'changed';

var BaseStore = assign({}, EventEmitter.prototype, {

  emitChange: function() {
    this.emit(CHANGED);
  },

  addChangeListener: function(callback) {
    this.on(CHANGED, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGED, callback);
  }

});

module.exports = BaseStore;
