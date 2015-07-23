var assign = require('object-assign');

var ActionConstants = require('../constants/actions.js');
var AppDispatcher = require('../dispatchers/appdispatcher.js');
var BaseStore = require('./base.js');

var secondsRemaining = 0;
var isDone = false;
var intervalHandle = null;

function startTimer() {
  intervalHandle = window.setInterval(tick, 1000);
}

function stopTimer() {
  window.clearInterval(intervalHandle);
  intervalHandle = null;
}

function tick() {
  secondsRemaining -= 1;

  if (secondsRemaining <= 0) {
    secondsRemaining = 0;
    isDone = true;
    stopTimer();
  }

  TimerStore.emitChange();
}

var TimerStore = assign({}, BaseStore, {

  getSecondsRemaining: function() {
    return secondsRemaining;
  },

  isDone: function() {
    return isDone;
  }

});

TimerStore.dispatchToken = AppDispatcher.register(function(action) {
  switch (action.type) {
    case ActionConstants.RESET_TIMER:
      stopTimer();
      secondsRemaining = 5;
      isDone = false;
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
