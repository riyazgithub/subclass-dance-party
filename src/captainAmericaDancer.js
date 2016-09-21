// var captainAmericaDancer = function(top, left, timeBetweenSteps) {
//   dancer.call(this, top, left);
//   this.top = top;
//   this.left = left;
//   this.$node.addClass('captainAmericaDancer');
// };

// captainAmericaDancer.prototype = Object.create(dancer.prototype);
// captainAmericaDancer.prototype.constructor = captainAmericaDancer;

// captainAmericaDancer.prototype.lineUp = function() {

//   var styleSettings = {
//     left: 600,
//     bottom: 0
//   };
//   this.$node.css(styleSettings);
// };
var captainAmericaDancer = class captainAmericaDancer extends dancer {
  constructor(top, left, timeBetweenSteps) {
    super(top, left, timeBetweenSteps);
    this.top = top;
    this.left = left;
    this.$node.addClass('captainAmericaDancer');
  }
  lineUp() {
    const styleSettings = {
      left: 600,
      bottom: 0
    };
    this.$node.css(styleSettings);
  }
};