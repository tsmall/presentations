var assign = require('object-assign');
var ActionConstants = require('../constants/actions.js');
var AppDispatcher = require('../dispatchers/appdispatcher.js');
var BaseStore = require('./base.js');

// State ---------------------------------------------------------

const stageLengths = new Map([
  ["Work", 5],
  ["Break", 3]
]);

var currentStage = "Pomodoro";

// Helpers -------------------------------------------------------

function getNextStage() {
    return (currentStage === "Work") ? "Break" : "Work";
}

// Public API ----------------------------------------------------

var PomodoroStore = assign({}, BaseStore, {

  getCurrentStage: function() {
    return currentStage;
  },

  getCurrentStageLength: function() {
    return stageLengths.get(currentStage);
  }

});

// Action Handlers -----------------------------------------------

PomodoroStore.dispatchToken = AppDispatcher.register(function(action) {
  switch (action.type) {
    case ActionConstants.RESET_TIMER:
      currentStage = getNextStage();
      PomodoroStore.emitChange();
      break;
  }
});

module.exports = PomodoroStore;
