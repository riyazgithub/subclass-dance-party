var batmanDancer = function(top, left, timeBetweenSteps) {
  dancer.call(this, top, left);
  this.top = top;
  this.left = left;
  this.$node.addClass('batmanDancer');
};

batmanDancer.prototype = Object.create(dancer.prototype);
batmanDancer.prototype.constructor = batmanDancer;

batmanDancer.prototype.lineUp = function() {

  var styleSettings = {
    left: 1000,
    bottom: 0
  };
  this.$node.css(styleSettings);
};