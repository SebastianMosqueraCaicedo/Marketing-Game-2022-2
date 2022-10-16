
let player;
let complemetaryObjs
let screensCounter = 3;

//Variables del primer juego
let phasesGameOne = -1;
let objectPanaderia;
let choosenColorGameOne = false;

// Segundo juego
let smallBeer;
let isBeerPlaced = false;
let gameTwoStart = false;

	// Donde se pueden colocar las cervezas
let beerZones = [
	{x: 200, y: 340},
	{x: 410, y: 140},
	{x: 800, y: 295},
	{x: 1015, y: 195}
];

function preload() {
  // Cosas globales
  mainMenu = loadImage("./assets/mainMenu.png");
  instruction = loadImage("./assets/instructions.png");
  background = loadImage("./assets/background.png");
  beerObject = loadImage("./assets/beer.png");
  meatObject = loadImage("./assets/meat.png");
  stantesObject = loadImage("./assets/stantes.png");
  secondCharObject = loadImage("./assets/characters.png");

  nextButton = loadImage("./assets/nextButton.png");
  pointer1 = loadImage("./assets/pointer1.png");
  pointer2 = loadImage("./assets/pointer2.png");
  background2 = loadImage("./assets/background2.png");

  // Pos 0 = right, 1 = left, 2= back
  managerObject = [loadImage("./assets/manager_right.png"), loadImage("./assets/manager_left.png"), loadImage("./assets/manager_back.png")];
  // Pos 0 = right, 1 = left, 2= back
  characterObject = [loadImage("./assets/woman_right.png"), loadImage("./assets/woman_left.png"), loadImage("./assets/woman_back.png")];

      //Cosas del primer juego
  locationIndicator = loadImage("./assets/location.png");
  gameOneDialogues = [loadImage("./assets/game1-dialogue1.png"), loadImage("./assets/chooserGameOne.png")]
  gameOneAssets = [loadImage("./assets/panaderia_rojo.png"), loadImage('./assets/panaderia_amarilla.png'), loadImage('./assets/panaderia_azul.png'), loadImage('./assets/preGameOne.png')]

      // Cosas del segundo juego
  gameTwoDialogues = [loadImage("./assets/game2-dialogue1.png"), loadImage("./assets/game2-location1.png")];
  beerSmall = loadImage("./assets/beerSmall.png");
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

  //!!!!! console.log importantes.

  //console.log('mouseX: ' + mouseX + ' mouseY: ' + mouseY)
  //console.log('x: ' + player.getX() + ' y: ' + player.getY());
  
 
  switch (screensCounter) {
    //Pantalla de inicio
    case 0:
      image(mainMenu, 0, 0);
      break;
    //Instrucciones
    case 1:
      image(instruction, 0, 0)
      break;
    //Primer juego - Poveda
    case 2:
      image(background, 0, 0);

      if ((player.getX() === 220 || player.getX() === 230) && player.getY() === 90 && phasesGameOne == 0) {
        //console.log(player.getState());
        
        player.setState(2);
        image(gameOneDialogues[0], 0, 0)
      } else if (phasesGameOne == 0) {
        image(locationIndicator, 0, 0);
      }

      if (phasesGameOne === 1) {
        image(gameOneDialogues[1], 0, 0)
      }

      console.log(phasesGameOne)
      
      
      
      image(managerObject[1], 260, 80)

      if (phasesGameOne < 0) {
        image(gameOneAssets[3], 0, 0)
      }
      
      break;
    //Segundo juego - Sebastian
    case 3:
      image(background2, 0, 0);

      if (!gameTwoStart) {

      } else {

      }
      
      break;
    //Tercer juego - Poveda
    case 4:

      break;
    //Cuarto juego - Sebastian
    case 5:

      break;
    //Quinto juego - Poveda
    case 6:

      break;
  }

  
//Opciones para pintar las cosas que se mueven despues de las dos primeras pantallas.
  if (screensCounter > 1 ) {
    player.draw();
    player.hit(complemetaryObjs[0]);
  
    for (let i = 1; i < complemetaryObjs.length; i++) {
      player.hit2(complemetaryObjs[i]);
    }

    //Imagenes para darle tridimensionalidad
    if ((phasesGameOne == 0 && screensCounter == 2) || screensCounter > 2) {
      image(stantesObject, 0, 0);
      image(secondCharObject, 0, 0);
    }
  }

  //Aqui queda el color def de la panaderia
  colorDefPanaderia();
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
      if (mouseX > 279 && mouseX < 414 && mouseY > 298 && mouseY < 333) {
        console.log("pasar")
        screensCounter = 2;
      }
      break;
    //Primer juego
    case 2:

      if (phasesGameOne < 0) { 
        phasesGameOne = 0;
      }
      if (mouseX > 477 && mouseX < 525 && mouseY > 80 && mouseY < 127) {
        phasesGameOne = 1;
        console.log(phasesGameOne)
      }

      //Rojo
      if (phasesGameOne == 1 && mouseX > 553 && mouseX < 644 && mouseY > 111 && mouseY < 149) {
        objectPanaderia = 0;
        choosenColorGameOne = true;

      }

      //Amarillo
      if (phasesGameOne == 1 && mouseX > 553 && mouseX < 644 && mouseY > 176 && mouseY < 205) {
        objectPanaderia = 1;
        choosenColorGameOne = true;
      }

      //Azul
      if (phasesGameOne == 1 && mouseX > 553 && mouseX < 644 && mouseY > 236 && mouseY < 270) {
        objectPanaderia = 2;
        choosenColorGameOne = true;
      }

      //Siguiente
      if (choosenColorGameOne == true && mouseX > 610 && mouseX < 644 && mouseY > 291 && mouseY < 332) { 
        player.setX(20)
        player.setY(30)
        screensCounter = 3;
      }
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

  if (screensCounter > 1) { 
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
  }    
  //}
		
}

//Funcion para dejar la panaderia durante todo el juego
function colorDefPanaderia() { 
  if (objectPanaderia === 0) {
    image(gameOneAssets[0], 0, 0);
  }

  if (objectPanaderia === 1) {
    image(gameOneAssets[1], 0, 0);
  }

  if (objectPanaderia === 2) {
    image(gameOneAssets[2], 0, 0);
  }
}
