var batmanDancer = function(top, left, timeBetweenSteps) {
  dancer.call(this, top, left, 1000);
  this.$node.addClass('batmanDancer');
};

batmanDancer.prototype = Object.create(dancer.prototype);
batmanDancer.prototype.constructor = batmanDancer;

batmanDancer.prototype.step = function() {
  
  dancer.prototype.step.call(this);
  this.$node.toggle();
};