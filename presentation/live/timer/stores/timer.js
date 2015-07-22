var assign = require('object-assign');

var ActionConstants = require('../constants/actions.js');
var AppDispatcher = require('../dispatchers/appdispatcher.js');
var BaseStore = require('./base.js');

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

var TimerStore = assign({}, BaseStore, {

  getSecondsRemaining: function() {
    return secondsRemaining;
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
