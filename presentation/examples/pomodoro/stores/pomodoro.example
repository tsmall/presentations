var assign = require('object-assign');
var defer = require('../utils/defer.js');

var ActionConstants = require('../constants/actions.js');
var AppDispatcher = require('../dispatchers/appdispatcher.js');
var BaseStore = require('./base.js');
var TimerActions = require('../actions/timer.js');
var TimerStore = require('./timer.js');

const stageLengths = new Map([
  ["Work", 5],
  ["Break", 3]
]);

var currentStage = "Work";

function getNextStage() {
    return (currentStage === "Work") ? "Break" : "Work";
}

var PomodoroStore = assign({}, BaseStore, {

  getCurrentStage: function() {
    return currentStage;
  }

});

PomodoroStore.dispatchToken = AppDispatcher.register(function(action) {
  switch (action.type) {
    case ActionConstants.START_POMODORO:
      AppDispatcher.waitFor([TimerStore.dispatchToken]);
      if (!TimerStore.isDone()) {
        defer(() => TimerActions.startTimer());
      }
      else {
        currentStage = getNextStage();
        PomodoroStore.emitChange();

        defer(() => {
          var stageLength = stageLengths.get(currentStage);
          TimerActions.setTimer(stageLength);
          TimerActions.startTimer();
        });
      }
      break;

    case ActionConstants.RESET_POMODORO:
      currentStage = "Work";
      PomodoroStore.emitChange();

      defer(() => {
        var stageLength = stageLengths.get(currentStage);
        TimerActions.setTimer(stageLength);
      });
      break;
 }
});

module.exports = PomodoroStore;
