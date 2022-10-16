
let player;
let complemetaryObjs
let screensCounter = 3;
let playerLock = false;
let transitioning = true;

//Variables del primer juego
let phasesGameOne = -1;
let objectPanaderia;
let choosenColorGameOne = false;

// Segundo juego
let smallBeer;
let phasesGameTwo = -1;

	// Donde se pueden colocar las cervezas
let beerZones = [
	{x: 115, y: 180, chosen: false},
	{x: 230, y: 75, chosen: false},
	{x: 425, y: 160, chosen: false},
	{x: 545, y: 110, chosen: false}
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
  locationIndicator2 = loadImage("./assets/location2.png");

  // Pos 0 = right, 1 = left, 2= back
  managerObject = [loadImage("./assets/manager_right.png"), loadImage("./assets/manager_left.png"), loadImage("./assets/manager_back.png")];
  // Pos 0 = right, 1 = left, 2= back
  characterObject = [loadImage("./assets/woman_right.png"), loadImage("./assets/woman_left.png"), loadImage("./assets/woman_back.png")];

      //Cosas del primer juego
  locationIndicator = loadImage("./assets/location.png");
  gameOneDialogues = [loadImage("./assets/game1-dialogue1.png"), loadImage("./assets/chooserGameOne.png")]
  gameOneAssets = [loadImage("./assets/panaderia_rojo.png"), loadImage('./assets/panaderia_amarilla.png'), loadImage('./assets/panaderia_azul.png'), loadImage('./assets/preGameOne.png')]

      // Cosas del segundo juego
  gameTwoDialogue = loadImage("./assets/game2-location1.png");
  preGameTwo = loadImage("./assets/preGameTwo.png");
  beerSmall = loadImage("./assets/beerSmall.png");
}

function setup() {
  createCanvas(1277, 639);
  //imageMode(CORNER);
  player = new Player(20, 30, characterObject);
  smallBeer = {x: 200, y: 200, img: beerSmall};
  
  complemetaryObjs = [
   new Obj(118, 100, 236, 54, 262, 76, 147, 131),
   new Obj(234, 140, 357, 194, 357, 247, 233, 193),
    new Obj(357, 194, 490, 260, 463, 304, 355, 246),
    new Obj(323, 122, 439, 176, 436, 202, 319, 150),
    new Obj(439, 176, 552, 230, 551, 260, 430, 201)
  ];
 
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
      image(managerObject[1], 240, 220);

      if (phasesGameTwo === -1) {
	      image(preGameTwo, 0, 0);
      }
      if (phasesGameTwo === 0) {
	image(locationIndicator2, 180, 220);
        if ((player.getX() === 180) && player.getY() === 220) {
	  playerLock = true;
	  player.setState(0);
	  image(nextButton, 560, 250);
	  image(gameTwoDialogue, 0, 300);
	  image(smallBeer.img, smallBeer.x, smallBeer.y);
        }

      } 

      if (phasesGameTwo === 1){
        image(smallBeer.img, smallBeer.x, smallBeer.y);
        player.holdItem(smallBeer);
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

	// Si la pantalla no esta transicionando, constantemente pinta esto:
 if (!transitioning){ 

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
      if (screensCounter === 2 || screensCounter === 4) {
	      // No se utiliza en niveles 2 o 4
      	image(secondCharObject, 0, 0);
      }

    }
  }

  //Aqui queda el color def de la panaderia
  colorDefPanaderia();

  // Aqui las flechas y desicion final de las cervezas
  for (let j = 0; j < beerZones.length; j++) {
    if(beerZones[j].chosen){
      if(j < 2) {
        image(beerSmall, beerZones[j].x - 15, beerZones[j].y - 35);
      } else {
        image(beerObject, beerZones[j].x - 35, beerZones[j].y - 42);
      }
    }

    if (screensCounter === 3 && phasesGameTwo === 1){
        image(pointer1, beerZones[j].x - 15, beerZones[j].y - 30);
        if (player.isNear(beerZones[j], 65)){  
          image(pointer2, beerZones[j].x - 30, beerZones[j].y - 55);
        }
    }
  }

 }
}

function mousePressed() {

  console.log('mouseX: ' + mouseX + ' mouseY: ' + mouseY)

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
	transitioning = true;
      }
      break;
    //Segundo juego 
    case 3:

      // Pantalla de inicio
      if (phasesGameTwo === -1 && dist(mouseX, mouseY, 350, 300) < 30){
        phasesGameTwo = 0;
        transitioning = false;
      }
      
      // Yendo al manager
      if (phasesGameTwo === 0 && playerLock){
	if(dist(mouseX, mouseY, 625, 265) < 15){
          phasesGameTwo = 1;
          playerLock = false;
	}
      } 

      // Colocando cervezas
      if (phasesGameTwo === 1){
	for (let j = 0; j < beerZones.length; j++){
	  if (player.isNear(beerZones[j], 65)){  
	    beerZones[j].chosen = true;
	    phasesGameTwo = -1;
	    screensCounter = 4;
	  }
	}
      }

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

	// Si el juego inicia y el jugador no esta paralizado, muevelo
  if (screensCounter > 1 && !playerLock) { 
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
