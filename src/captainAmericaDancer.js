var captainAmericaDancer = function(top, left, timeBetweenSteps) {
  dancer.call(this, top, left);
  this.top = top;
  this.left = left;
  this.$node.addClass('captainAmericaDancer');
};

captainAmericaDancer.prototype = Object.create(dancer.prototype);
captainAmericaDancer.prototype.constructor = captainAmericaDancer;

captainAmericaDancer.prototype.lineUp = function() {

  var styleSettings = {
    left: 600,
    bottom: 0
  };
  this.$node.css(styleSettings);
};