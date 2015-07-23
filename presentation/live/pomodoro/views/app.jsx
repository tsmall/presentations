var PomodoroActions = require('../actions/pomodoro.js');
var PomodoroStore = require('../stores/pomodoro.js');
var PomodoroTimer = require('./pomodoro.jsx');
var React = require('react');
var TimerActions = require('../actions/timer.js');
var TimerStore = require('../stores/timer.js');

var PomodoroApp = React.createClass({

  // State management --------------------------------------------

  getInitialState: function() {
    return this._loadState();
  },

  componentDidMount: function() {
    PomodoroStore.addChangeListener(this._onChange);
    TimerStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    PomodoroStore.removeChangeListener(this._onChange);
    TimerStore.removeChangeListener(this._onChange);
  },

  _loadState: function() {
    return {
      currentStage: PomodoroStore.getCurrentStage(),
      isDone: TimerStore.isDone(),
      secondsRemaining: TimerStore.getSecondsRemaining()
    };
  },

  _onChange: function() {
    this.setState(this._loadState());
  },

  // Rendering ---------------------------------------------------

  render: function() {
    return (
      <div className="timer-app">
        <PomodoroTimer
          currentStage={this.state.currentStage}
          isDone={this.state.isDone}
          secondsRemaining={this.state.secondsRemaining}
          />
        <button onClick={this._startTimer}>Start</button>
        <button onClick={this._stopTimer}>Pause</button>
        <button onClick={this._resetTimer}>Reset</button>
      </div>
    );
  },

  // Actions -----------------------------------------------------

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
