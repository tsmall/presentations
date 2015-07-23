var Formatters = require('../utils/formatters.js');
var React = require('react');

var Timer = React.createClass({

  propTypes: {
    isDone: React.PropTypes.bool.isRequired,
    secondsRemaining: React.PropTypes.number.isRequired
  },

  render: function() {
    var displayText = this.props.isDone ? "Done!" : Formatters.formatTime(this.props.secondsRemaining);
    return (
      <div>{displayText}</div>
    );
  }

});

module.exports = Timer;
