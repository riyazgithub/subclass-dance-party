// Creates and returns a new dancer object that can step
// var dancer = function(top, left, timeBetweenSteps) {
//   // use jQuery to create an HTML <span> tag
//   this.$node = $('<span class="dancer"></span>');
//   // this.top = top;
//   // this.left = left;
//   this.timeBetweenSteps = timeBetweenSteps;
//   this.step();
//   this.setPosition(top, left);


//   // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
//   // this one sets the position to some random default point within the body
// };

// dancer.prototype.step = function() {
//   // the basic dancer doesn't do anything interesting at all on each step,
//   // it just schedules the next step
//   // this.step()
//   setTimeout(this.step.bind(this), this.timeBetweenSteps);
// };
// //this.step().bind(this), 100
// // makeDancer.step();

// dancer.prototype.setPosition = function(top, left) {
//   // Use css top and left properties to position our <span> tag
//   // where it belongs on the page. See http://api.jquery.com/css/
//   //
//   var styleSettings = {
//     top: top,
//     left: left
//   };
//   // this.setPosition(top, left);
  
//   this.$node.css(styleSettings);
// };

// dancer.prototype.lineUp = function(left) {

//   var styleSettings = {
//     left: 0
//   };
//   this.$node.css(styleSettings);
// };

// dancer.prototype.breakUp = function() {
//   this.setPosition($('body').height() * Math.random(), $('body').width() * Math.random());
// };


var dancer = class dancer {

  constructor(top,left,timeBetweenSteps){

    this.$node = $('<span class="dancer"></span>');
    this.timeBetweenSteps = timeBetweenSteps;
    this.step();
    this.setPosition(top,left);
  }

  step() {
    setTimeout(this.step,this.timeBetweenSteps);
  }

  setPosition(top, left) {
    var styleSettings = {
      top: top,
      left: left
    };
    this.$node.css(styleSettings);
  }
  breakUp() {
    this.setPosition($('body').height() * Math.random(), $('body').width() * Math.random());
  }
};