var React = require('react');

var PomodoroActions = require('../actions/pomodoro.js');
var PomodoroTimer = require('./pomodoro.jsx');
var TimerActions = require('../actions/timer.js');

var PomodoroApp = React.createClass({

  render: function() {
    return (
      <div className="timer-app">
        <PomodoroTimer/>
        <button onClick={this._startTimer}>Start</button>
        <button onClick={this._stopTimer}>Pause</button>
        <button onClick={this._resetTimer}>Reset</button>
      </div>
    );
  },

  _startTimer: function() {
    PomodoroActions.startPomodoro();
  },

  _stopTimer: function() {
    TimerActions.stopTimer();
  },

  _resetTimer: function() {
    PomodoroActions.resetPomodoro();
  }

});

module.exports = PomodoroApp;
