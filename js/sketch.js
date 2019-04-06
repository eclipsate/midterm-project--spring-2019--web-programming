const x = 100;
const y = 100;
const height = 500;
const width = 500;


function makeLines() {
    //horizontal
    strokeWeight(3);
    stroke(255);
    y = y - 1;
    if (y < 0) {
        y = height;
    }
    line(0, y, width, y);

    //vertical
    stroke(random(255), random(255), random(255));
    x = x - 1;
    if (x < 0) {
        x = width;
    }
    line(x, 0, x, height);
}

function setup() {
    createCanvas(width, height);
    background(220);
    // noLoop();
}

function draw() {
    // makeLines();
    fill(0, 0, 255, 100);
    stroke(0, 100, 0);
    ellipse(mouseX, mouseY, 50, 50);

}
