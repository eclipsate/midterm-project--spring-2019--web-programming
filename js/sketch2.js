const BACKGROUND_COLOR = `#000`;
const WWIDTH = 750;
const HHEIGHT = 475;
let capture;

function setup() {
    var cnv = createCanvas(WWIDTH, HHEIGHT);
    cnv.parent('p5-sketch2');
    fill(BACKGROUND_COLOR);
    capture = createCapture(VIDEO)
    capture.size(375, 237)
}

function draw() {
      capture.position(mouseX, mouseY);
      image(capture, 0, 0, 750, 475);
      filter(INVERT);
      image(capture, 0, 0, 250, 250);
      filter('GRAY');
      //end the sketch
      if (keyIsPressed === true) {
          noCanvas();
          capture.position(0, 0);
      }
}
