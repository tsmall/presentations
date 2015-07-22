var React = require('react');

var TimerActions = require('../actions/timer.js');
var Timer = require('./timer.jsx');

var TimerApp = React.createClass({

  render: function() {
    return (
      <div className="timer-app">
        <Timer/>
        <button onClick={this._startTimer}>Start</button>
        <button onClick={this._stopTimer}>Pause</button>
        <button onClick={this._resetTimer}>Reset</button>
      </div>
    );
  },

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
