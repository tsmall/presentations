var assign = require('object-assign');
var EventEmitter = require('events').EventEmitter;

var ActionConstants = require('../constants/actions.js');
var AppDispatcher = require('../dispatchers/appdispatcher.js');

var CHANGED = 'changed';

var secondsRemaining = 0;
var intervalHandle = null;

function startTimer() {
  intervalHandle = window.setInterval(tick, 1000);
}

function stopTimer() {
  window.clearInterval(intervalHandle);
  intervalHandle = null;
}

function tick() {
  if (secondsRemaining === 0) {
    stopTimer();
    return;
  }

  secondsRemaining -= 1;
  TimerStore.emitChange();
}

var TimerStore = assign({}, EventEmitter.prototype, {

  getSecondsRemaining: function() {
    return secondsRemaining;
  },

  // Helpers ----------------------------------------------

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

TimerStore.dispatchToken = AppDispatcher.register(function(action) {
  switch (action.type) {
    case ActionConstants.SET_TIMER:
      stopTimer();
      secondsRemaining = action.seconds;
      TimerStore.emitChange();
      break;

    case ActionConstants.START_TIMER:
      startTimer();
      break;

    case ActionConstants.STOP_TIMER:
      stopTimer();
      break;
  }
});

module.exports = TimerStore;
