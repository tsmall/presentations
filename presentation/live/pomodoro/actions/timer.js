var ActionConstants = require('../constants/actions.js');
var AppDispatcher = require('../dispatchers/appdispatcher.js');

module.exports = {

  setTimer: function(seconds) {
    AppDispatcher.dispatch({
      type: ActionConstants.SET_TIMER,
      seconds: seconds
    });
  },

  startTimer: function() {
    AppDispatcher.dispatch({
      type: ActionConstants.START_TIMER
    });
  },

  stopTimer: function() {
    AppDispatcher.dispatch({
      type: ActionConstants.STOP_TIMER
    });
  },

  timerStopped: function() {
    AppDispatcher.dispatch({
      type: ActionConstants.TIMER_STOPPED
    });
  }

};
