const BACKGROUND_COLOR = `#000`;
const WWIDTH = 600;
const HHEIGHT = 300;
let capture;

function setup() {
    var cnv = createCanvas(WWIDTH, HHEIGHT);
    cnv.parent('p5-sketch');
    background(BACKGROUND_COLOR);
    capture = createCapture(VIDEO)
      capture.size(600, 500)
}

function draw() {
    //Original video slides horizontally
      capture.position(mouseX, 0);

      //pixels drawn on canvas using image function remains static and inverted(filter);
      image(capture, 0, 0, 600, 500);
      filter(BLUR, 2);
}
