var ActionConstants = require('../constants/actions.js');
var AppDispatcher = require('../dispatchers/appdispatcher.js');

module.exports = {

  startPomodoro: function() {
    AppDispatcher.dispatch({
      type: ActionConstants.START_POMODORO
    });
  },

  resetPomodoro: function() {
    AppDispatcher.dispatch({
      type: ActionConstants.RESET_POMODORO
    });
  }

};
