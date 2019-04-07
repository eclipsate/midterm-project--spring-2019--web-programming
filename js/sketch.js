const BACKGROUND_COLOR = `#000`;
const WWIDTH = 600;
const HHEIGHT = 300;
let input, button, greeting;

function setup() {
    var cnv = createCanvas(WWIDTH, HHEIGHT);
    cnv.parent('p5-sketch');
    background(BACKGROUND_COLOR);
    input = createInput();
    input.position(20, 65);

    button = createButton('submit');
    button.position(input.x + input.width, 65);
    button.mousePressed(greet);

    greeting = createElement('h2', 'what is your name?');
    greeting.position(20, 5);

    textAlign(CENTER);
    textSize(50);
}

function greet() {
  const name = input.value();
  greeting.html('hello ' + name + '!');
  input.value('');

  for (let i = 0; i < 200; i++) {
    push();
    fill(random(255), 255, 255);
    translate(random(width), random(height));
    rotate(random(2 * PI));
    text(name, 0, 0);
    pop();
  }
}

function draw() {

    greet();
}
