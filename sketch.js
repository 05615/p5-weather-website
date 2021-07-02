function setup() {
  createCanvas(400, 400);
  background(50);
  submit_button = createButton("Submit");
  submit_button.position(30, 30);
  submit_button.mousePressed(weatherAsk);

  input = select("City")
}

function draw() {
  background(220);
}

function weatherAsk(){
  button.postion (random(width),random(height));
}
