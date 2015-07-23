var ActionConstants = require('../constants/actions.js');
var AppDispatcher = require('../dispatchers/appdispatcher.js');

module.exports = {

  resetTimer: function() {
    AppDispatcher.dispatch({
      type: ActionConstants.RESET_TIMER
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
  }

};
