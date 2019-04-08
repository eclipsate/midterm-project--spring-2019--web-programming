const BACKGROUND_COLOR = `#000`;
const WWIDTH = 600;
const HHEIGHT = 300;
let input, button, question;

function setup() {
    var cnv = createCanvas(WWIDTH, HHEIGHT);
    cnv.parent('p5-sketch');
    background(BACKGROUND_COLOR);
    fill(255);
    input = createInput();
    input.position(WWIDTH/1.3, HHEIGHT/1.95);

    // button = createButton('submit');
    // button.position(input.x + input.width, 65);
    // button.mousePressed(greet);

    question = createElement('h2', 'what is your sexuality?');
    question.position(WWIDTH/2.8, HHEIGHT/2.2);

    textAlign(CENTER);
    textSize(50);
}

function collage() {
  const sexuality = input.value();
  // greeting.html('what is your sexuality?');
  input.value('');
  for (let i = 0; i < 50; i++) {
    push();
    fill(random(255), random(255), random(255));
    translate(random(width), random(height));
    rotate(random(3 * PI));
    text(sexuality, 0, 0);
    pop();
  }
}

function draw() {

    collage();
}
