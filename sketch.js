
let player;
let complemetaryObjs
let screensCounter = 0;

function preload() {
  mainMenu = loadImage("./assets/mainMenu.png");
  instruction = loadImage("./assets/instructions.png");
  background = loadImage("./assets/background.png");
  beerObject = loadImage("./assets/beer.png");
  meatObject = loadImage("./assets/meat.png");
  stantesObject = loadImage("./assets/stantes.png");
  secondCharObject = loadImage("./assets/characters.png");
  // Pos 0 = right, 1 = left, 2= back
  managerObject = [loadImage("./assets/manager_right.png"), loadImage("./assets/manager_left.png"), loadImage("./assets/manager_back.png")];
  // Pos 0 = right, 1 = left, 2= back
  characterObject = [loadImage("./assets/woman_right.png"), loadImage("./assets/woman_left.png"), loadImage("./assets/woman_back.png")];
}

function setup() {
  createCanvas(1277, 639);
  //imageMode(CORNER);
  player = new Player(20, 30, characterObject);
  
  complemetaryObjs = [
   new Obj(118, 100, 236, 54, 262, 76, 147, 131),
   new Obj(234, 140, 357, 194, 357, 247, 233, 193),
    new Obj(357, 194, 490, 260, 463, 304, 355, 246),
    new Obj(323, 122, 439, 176, 436, 202, 319, 150),
    new Obj(439, 176, 552, 230, 551, 260, 430, 201)
  ]
 
}

function draw() {
  console.log('mouseX: ' + mouseX + ' mouseY: ' + mouseY)
  
 
  switch (screensCounter) {
    //Pantalla de inicio
    case 0:
      image(mainMenu, 0, 0);
      break;
    //Instrucciones
    case 1:
    image(instruction, 0, 0)
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

  

  if (screensCounter > 1) { 
    image(background, 0, 0);
    player.draw();
    player.hit(complemetaryObjs[0]);
    image(stantesObject, 0, 0);
    image(secondCharObject, 0, 0);
    //  objTest2.draw();
    //objTest3.draw();
    for (let i = 1; i < complemetaryObjs.length; i++) {
      player.hit2(complemetaryObjs[i]);
      //complemetaryObjs[i].draw();
    }
  }
 
}

function mousePressed() {
  switch (screensCounter) {
    //Pantalla de inicio
    case 0:
    //Continuar 
      if (mouseX >282 && mouseX < 417 && mouseY > 233 && mouseY < 266) { 
        console.log("pasar")
        screensCounter = 2;
      }

      if (mouseX > 282 && mouseX < 417 && mouseY > 281  && mouseY < 313) {
        console.log("instrucciones")
        screensCounter = 1;
      }
      break;
    //Instrucciones
    case 1:
      if (mouseX > 550 && mouseX < 680 && mouseY > 303 && mouseY < 333) {
        console.log("pasar")
        screensCounter = 2;
      }
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
}

function keyPressed() {
// if (player.hit(objTest) === false) {
    switch (keyCode) {
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
  //}
		
}
