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
    return (
      <div>{Formatters.formatTime(this.state.secondsRemaining)}</div>
    );
  },

  _loadState: function() {
    return {
      secondsRemaining: TimerStore.getSecondsRemaining()
    };
  },

  _onChange: function() {
    this.setState(this._loadState());
  }

});

module.exports = Timer;
