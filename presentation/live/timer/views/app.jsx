var React = require('react');
var Timer = require('./timer.jsx');
var TimerActions = require('../actions/timer.js');
var TimerStore = require('../stores/timer.js');

var TimerApp = React.createClass({

  // State management --------------------------------------------

  getInitialState: function() {
    return this._loadState();
  },

  componentDidMount: function() {
    TimerStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    TimerStore.removeChangeListener(this._onChange);
  },

  _loadState: function() {
    return {
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
        <Timer
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
    TimerActions.startTimer();
  },

  _stopTimer: function() {
    TimerActions.stopTimer();
  },

  _resetTimer: function() {
    TimerActions.setTimer(5);
  }

});

module.exports = TimerApp;
