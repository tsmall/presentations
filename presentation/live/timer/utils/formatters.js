module.exports = {

  formatTime: function(seconds) {
    var padding = seconds < 10 ? '0' : '';
    return '0:' + padding + String(seconds);
  }

};
