let player;
let complemetaryObjs
let screensCounter = 0;

let playerLock = false;
let transitioning = true;
let holdTime = 0;

//Variables del primer juego
let phasesGameOne = -1;
let objectPanaderia;
let choosenColorGameOne = false;

// Segundo juego
let smallBeer;
let phasesGameTwo = -1;

// Donde se pueden colocar las cervezas
let beerZones = [
  { x: 115, y: 180, chosen: false },
  { x: 230, y: 75, chosen: false },
  { x: 425, y: 160, chosen: false },
  { x: 545, y: 110, chosen: false }
];

// Segundo juego
let chicle;
let phasesGameFou = -1;

//tercer juego

let instructionsOrder = 0;
let gameFourCases = false;
let valueMix = 0;
let valueBBQ = 0;
let valueNatural = 0;
let finishedGameFour = false;


//quinto juego
//llargo es 135
let instructionsOrderFive = 0;
let gameFiveCases = false;
let rangeOneX = 303;
let rangeOneY = 140;
let rangeOneOn = false;


// Donde se pueden colocar las cervezas
let chicZones = [
  { x: 115, y: 180, chosen: false },
  { x: 515, y: 200, chosen: false },
  { x: 650, y: 155, chosen: false },
  { x: 495, y: 80, chosen: false }
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
  background4 = loadImage("./assets/background4.png");
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

  //Cosas del tercer juego
  instructionsGame3 = [loadImage("./assets/Group88.png"), loadImage("./assets/Group87.png"), loadImage("./assets/excelSheet.png")];
  nextImageGameFour = loadImage("./assets/siguienteGameFour.png");

  //Cosas del 5 juego

  instructionsGame5 = [loadImage("./assets/instructionsGame5_1.png"), loadImage("./assets/instructionsGame5_2.png"), loadImage("./assets/nivel5background.png")];


  // Cosas del cuarto juego
  gameFouDialogue = loadImage("./assets/game4-location1.png");
  preGameFou = loadImage("./assets/preGameFou.png");
  chicleSmall = loadImage("./assets/chicle.png");
  chicleBig = loadImage("./assets/chicleBig.png");


}

function setup() {
  createCanvas(1277, 639);
  //imageMode(CORNER);
  player = new Player(20, 30, characterObject);

  smallBeer = { x: 200, y: 200, img: beerSmall };
  chicle = { x: 230, y: 220, img: chicleSmall };

  complemetaryObjs = [
    new Obj(118, 100, 236, 54, 262, 76, 147, 131),
    new Obj(234, 140, 357, 194, 357, 247, 233, 193),
    new Obj(357, 194, 490, 260, 463, 304, 355, 246),
    new Obj(323, 122, 439, 176, 436, 202, 319, 150),
    new Obj(439, 176, 552, 230, 551, 260, 430, 201)
  ];

}
function draw() {

  holdTime++;

  // Para que el usuario no inmediatamente clickee
  if (holdTime < 3 || holdTime > 60 * 2) {

    // Checkea que el jugador no se salga
    if (player.x < 0) { player.x += player.speed * 2 }
    if (player.x > 640) { player.x -= player.speed * 2 }
    if (player.y < 0) { player.y += player.speed * 2 }
    if (player.y > 300) { player.y -= player.speed * 2 }

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

        if (phasesGameTwo === 1) {
          image(smallBeer.img, smallBeer.x, smallBeer.y);
          player.holdItem(smallBeer);
        }

        break;
      //Tercer juego - Poveda
      case 4:

        let valueRestante = 100 - (valueMix * 0.1) - (valueBBQ * 0.1) - (valueNatural * 0.1);
        let valueGastado = valueMix + valueBBQ + valueNatural;


        image(instructionsGame3[instructionsOrder], 0, 0);



        if (gameFourCases == true) {
          if (valueMix < 100 || valueBBQ < 100 || valueNatural < 100) {
            fill(255, 0, 0);
          } else { fill(0); }

          textSize(13);
          text((valueMix * 0.1 + " %"), 385, 162);
          text((valueBBQ * 0.1 + " %"), 385, 187);
          text((valueNatural * 0.1 + " %"), 385, 212);


          if (valueRestante < 0 || valueGastado < 0) {
            fill(255, 0, 0);
          } else {
            fill(0)
          }
          text((valueRestante + " %"), 385, 240);
          text((valueGastado + "$"), 385, 264);
        }


        if (valueRestante === 0) {
          image(nextImageGameFour, 0, 0);
          finishedGameFour = true
        }
        break;

      //Cuarto juego - Sebastian
      case 5:
        if (screensCounter == 5) {
          image(background4, 0, 0);
          image(managerObject[0], 200, 220);

        }


        if (phasesGameFou === -1 && screensCounter == 5) {
          image(preGameFou, 0, 0);
        }
        if (phasesGameFou === 0) {
          image(locationIndicator2, 250, 220);
          if ((player.getX() === 250) && player.getY() === 220) {
            playerLock = true;
            player.setState(1);
            image(nextButton, 560, 250);
            image(gameFouDialogue, 0, 300);
            image(chicle.img, chicle.x, chicle.y);
          }

        }

        if (phasesGameFou === 1) {
          image(chicle.img, chicle.x, chicle.y);
          player.holdItem(chicle);
        }

        break;
      //Quinto juego - Poveda
      case 6:
        image(instructionsGame5[instructionsOrderFive], 0, 0)
        

        if (gameFiveCases === true) { 

          fill(35, 89, 155)
          circle(rangeOneX, rangeOneY, 10)


          if (rangeOneOn === true) {
            rangeOneX = mouseX;
          }

          if (rangeOneX > 434 && rangeOneOn === true) {
            rangeOneX = 430;
            rangeOneOn = !rangeOneOn;
          }

          if (rangeOneX < 303 && rangeOneOn === true) {
            rangeOneX = 303;
            rangeOneOn = !rangeOneOn;
          }

          if (rangeOneX > 303 && rangeOneX < 324) { 

          } 

          }

        
     
        console.log(mouseX)

        break;
    }

    // Si la pantalla no esta transicionando, constantemente pinta esto:
    if (!transitioning) {

      //Opciones para pintar las cosas que se mueven despues de las dos primeras pantallas.
      if (screensCounter > 1) {
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
      // Aqui las flechas de las cervezas
      if (screensCounter === 3 && phasesGameTwo === 1) {
        for (let j = 0; j < beerZones.length; j++) {
          image(pointer1, beerZones[j].x - 15, beerZones[j].y - 30);
          if (player.isNear(beerZones[j], 65)) {
            image(pointer2, beerZones[j].x - 30, beerZones[j].y - 55);
          }
        }
      }

      // Aqui las flechas y desicion final de los chicles
      if (screensCounter === 5 && phasesGameFou === 1) {
        for (let j = 0; j < chicZones.length; j++) {
          image(pointer1, chicZones[j].x - 15, chicZones[j].y - 30);
          if (player.isNear(chicZones[j], 65)) {
            image(pointer2, chicZones[j].x - 30, chicZones[j].y - 55);
          }
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
      if (mouseX > 282 && mouseX < 417 && mouseY > 233 && mouseY < 266) {
        console.log("pasar")
        screensCounter = 2;
      }

      if (mouseX > 282 && mouseX < 417 && mouseY > 281 && mouseY < 313) {
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

      if (phasesGameOne < 0 && dist(mouseX, mouseY, 350, 300) < 30) {
        phasesGameOne = 0;
        transitioning = false;
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
      if (choosenColorGameOne != false && mouseX > 610 && mouseX < 644 && mouseY > 291 && mouseY < 332) {
        player.setX(20)
        player.setY(30)
        screensCounter = 3;

        transitioning = true;
        holdUp();
      }
      break;
    //Segundo juego 
    case 3:

      // Pantalla de inicio
      if (phasesGameTwo === -1 && dist(mouseX, mouseY, 350, 300) < 30) {
        phasesGameTwo = 0;
        transitioning = false;
      }

      // Yendo al manager
      if (phasesGameTwo === 0 && playerLock) {
        if (dist(mouseX, mouseY, 625, 265) < 15) {
          phasesGameTwo = 1;
          playerLock = false;
        }
      }

      // Colocando cervezas
      if (phasesGameTwo === 1) {
        for (let j = 0; j < beerZones.length; j++) {
          if (player.isNear(beerZones[j], 65)) {
            beerZones[j].chosen = true;
            phasesGameTwo = -1;
            screensCounter = 4;
            transitioning = true;
          }
        }
      }

      break;
    //Tercer juego
    case 4:
      if (instructionsOrder < 2 && gameFourCases == false) {
        instructionsOrder = instructionsOrder + 1;

      }

      if (instructionsOrder == 2) {
        gameFourCases = true;
      }

      if (gameFourCases === true) {

        //Mix
        if (valueMix < 450 && valueMix >= 0) {

          if (dist(mouseX, mouseY, 506, 163) < 8) {
            valueMix += 10;
          }

          if (dist(mouseX, mouseY, 537, 163) < 8) {
            valueMix -= 10;
          }

          if (valueMix < 0) {
            valueMix = 0
          }

          if (valueMix > 450) {
            valueMix = 450
          }

        }

        //BBQ
        if (valueBBQ < 450 && valueBBQ >= 0) {

          if (dist(mouseX, mouseY, 506, 187) < 8) {
            valueBBQ += 10;
          }

          if (dist(mouseX, mouseY, 537, 187) < 8) {
            valueBBQ -= 10;
          }

          if (valueBBQ < 0) {
            valueBBQ = 0
          }

          if (valueBBQ > 450) {
            valueBBQ = 450
          }

        }

        //Natural
        if (valueNatural < 450 && valueNatural >= 0) {

          if (dist(mouseX, mouseY, 506, 210) < 8) {
            valueNatural += 10;
          }

          if (dist(mouseX, mouseY, 537, 210) < 8) {
            valueNatural -= 10;
          }

          if (valueNatural < 0) {
            valueNatural = 0
          }

          if (valueNatural > 450) {
            valueNatural = 450
          }

        }

        if (finishedGameFour === true && mouseX > 233 && mouseX < 466 && mouseY > 89 && mouseY < 116) {
          screensCounter = 5;
        }
      }



      break;
    //Cuarto juego
    case 5:
      // Pantalla de inicio
      if (phasesGameFou === -1 && dist(mouseX, mouseY, 350, 300) < 30) {
        phasesGameFou = 0;
        transitioning = false;
      }

      // Yendo al manager
      if (phasesGameFou === 0 && playerLock) {
        if (dist(mouseX, mouseY, 625, 265) < 15) {
          phasesGameFou = 1;
          playerLock = false;
        }
      }

      // Colocando chicles
      if (phasesGameFou === 1) {
        for (let j = 0; j < chicZones.length; j++) {
          if (player.isNear(chicZones[j], 65)) {
            chicZones[j].chosen = true;
            holdUp();
            phasesGameFou = -1;
            screensCounter = 6;
            transitioning = true;

          }
        }
      }

      break;
    //Quinto juego 
    case 6:
      if (instructionsOrderFive < 2 && gameFiveCases == false) {
        instructionsOrderFive = instructionsOrderFive + 1;

      }

      if (instructionsOrderFive == 2) {
        gameFiveCases = true;
      }

      if (dist(mouseX, mouseY, rangeOneX, rangeOneY) < 10) { 
        rangeOneOn = !rangeOneOn;
      }

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

// Funcion para forzar a draw() que espere un momento
function holdUp() {
  holdTime = 0;
}

