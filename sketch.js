let player;
let objTest;

function preload() {
  background = loadImage("./assets/background.png");
  beerObject = loadImage("./assets/beer.png");
  meatObject = loadImage("./assets/meat.png");
  // Pos 0 = right, 1 = left, 2= back
  managerObject = [loadImage("./assets/manager_right.png"), loadImage("./assets/manager_left.png"), loadImage("./assets/manager_back.png")];
  // Pos 0 = right, 1 = left, 2= back
  characterObject = [loadImage("./assets/woman_right.png"), loadImage("./assets/woman_left.png"), loadImage("./assets/woman_back.png")];
}

function setup() {
  createCanvas(1277, 639);
  //imageMode(CORNER);
  player = new Player(0, 0, characterObject);
  objTest = new Obj(50, 50, 40, 40);
}

function draw() {
  image(background, 0, 0);
  
  player.draw();
  objTest.draw();
  

	// test
  if (player.hit(objTest)){
	  fill(0,0,200);
	  rect(200,200,100,100);
	  console.log("ses")
  }
}

function keyPressed() {
	switch (keyCode){
		case 87:
			player.move(0);
			break;

		case 83:
			player.move(1);
			break;

		case 65:
			player.move(2);
			break;

		case 68:
			player.move(3);
			break;
	}
}
