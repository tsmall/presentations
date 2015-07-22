var React = require('react');
var PomodoroStore = require('../stores/pomodoro.js');
var Timer = require('./timer.jsx');

var PomodoroTimer = React.createClass({

  getInitialState: function() {
    return this._loadState();
  },

  componentDidMount: function() {
    PomodoroStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    PomodoroStore.removeChangeListener(this._onChange);
  },

  render: function() {
    return (
      <div>
        <div>{this.state.currentStage}</div>
        <Timer/>
      </div>
    );
  },

  _loadState: function() {
    return {
      currentStage: PomodoroStore.getCurrentStage()
    };
  },

  _onChange: function() {
    this.setState(this._loadState());
  }

});

module.exports = PomodoroTimer;
