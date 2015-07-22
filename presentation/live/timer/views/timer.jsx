var React = require('react');

var TimerStore = require('../stores/timer.js');
var Formatters = require('../utils/formatters.js');

var Timer = React.createClass({

  getInitialState: function() {
    return this._loadState();
  },

  componentDidMount: function() {
    TimerStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    TimerStore.removeChangeListener(this._onChange);
  },

  render: function() {
    var displayText = this.state.isDone ? "Done!" : Formatters.formatTime(this.state.secondsRemaining);
    return (
      <div>{displayText}</div>
    );
  },

  _loadState: function() {
    return {
      secondsRemaining: TimerStore.getSecondsRemaining(),
      isDone: TimerStore.isDone()
    };
  },

  _onChange: function() {
    this.setState(this._loadState());
  }

});

module.exports = Timer;
