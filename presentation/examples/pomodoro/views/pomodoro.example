var React = require('react');
var Timer = require('./timer.jsx');

var PomodoroTimer = React.createClass({

  propTypes: {
    currentStage: React.PropTypes.string.isRequired,
    isDone: React.PropTypes.bool.isRequired,
    secondsRemaining: React.PropTypes.number.isRequired
  },

  render: function() {
    return (
      <div>
        <div>{this.props.currentStage}</div>
        <Timer
          isDone={this.props.isDone}
          secondsRemaining={this.props.secondsRemaining}
          />
      </div>
    );
  }

});

module.exports = PomodoroTimer;
