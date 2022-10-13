let player;
let objTest;
let screensCounter  = 0;

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
  objTest = new Obj(118, 100, 236, 54, 262, 76, 147, 131);
}

function draw() {
  //console.log('mouseX: ' + mouseX + ' mouseY: ' + mouseY)
  image(background, 0, 0);
  
  console.log(mouseY)

  switch (screensCounter) { 
    //Pantalla de inicio
    case 0:

      break;
    //Instrucciones
    case 1:

      break;
    //Primer juego
    case 2:

      break;
    //Segundo juego 
    case 3:

      break;
    //Tercer juego
    case 4:

      break;
    //Cuarto juego
    case 5:

      break;
    //Quinto juego 
    case 6:

      break;
  }

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
