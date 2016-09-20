var captainAmericaDancer = function(top, left, timeBetweenSteps) {
  dancer.call(this, top, left);
  this.$node.addClass('captainAmericaDancer');
};

captainAmericaDancer.prototype = Object.create(dancer.prototype);
captainAmericaDancer.prototype.constructor = captainAmericaDancer;