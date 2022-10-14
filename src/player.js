class Player {

	constructor(x, y, imageObject) {
		this.x = x;
		this.y = y;
		this.width = 40;
		this.height = 44;
		this.imageObject = imageObject;  // receives frame array
		this.state = 0;  // Current frame
		this.prevState = 0;
		this.speed = 10;

	}

	draw() {
		this.center = [this.x + this.width / 2, this.y + this.height / 2];
		image(this.imageObject[this.state], this.x, this.y, this.width, this.height);
		fill(255);
		circle(this.center[0], this.center[1], 30)
	}

	move(input) {
		// 0: up, 1: down, 2: left, 3: right
		switch (input) {
			case 0:
				this.y -= this.speed;
				this.state = 2;
				break;

			case 1:
				this.y += this.speed;
				if (this.prevState === 1) {
					this.state = 1;
				} else {
					this.state = 0;
				}
				break;

			case 2:
				this.x -= this.speed;
				this.state = 1;
				this.prevState = 1;
				break;

			case 3:
				this.x += this.speed;
				this.state = 0;
				this.prevState = 0;
				break;
		}

	}

	hit(object) {
		let getPos = object.getPos();

		//0 = X esquina izquierda, 1 = y esquina izquierda, 2 = X esquina derecha, 3 = y esquina derecha
		//4 = X esquina derecha abajo, 5 = Y esquina derecha abajo, 6 = X esquina izquierda abajo, 7 = Y esquina izquierda abajo
		if (this.center[0] > getPos[0] && this.center[0] < getPos[4] && this.center[1] > getPos[3] && this.center[1] < getPos[7]) {
			this.x = this.x - 10;
			if (this.y - 10 < getPos[7]) {
				this.y = this.y + 10;
			} else {
				this.y = this.y - 10;
			}
		} 
		/*if (this.center[0] >= getPos[0] && this.center[1] >= getPos[1] && this.center[1] <= getPos[5]) {
		console.log("hit-left")
	}*/
	}

	hit2(object) { 
		
		let getPos = object.getPos();

		//console.log(getPos);
  
		//0 = X esquina izquierda, 1 = y esquina izquierda, 2 = X esquina derecha, 3 = y esquina derecha
		//4 = X esquina derecha abajo, 5 = Y esquina derecha abajo, 6 = X esquina izquierda abajo, 7 = Y esquina izquierda abajo
		if (this.center[0] > getPos[0] - 20&& this.center[0] < getPos[2] && this.center[1] > getPos[3] - 20 && this.center[1] < getPos[7] + 20) {
			this.x = this.x - 10;
			console.log("hit2");
			if (this.y + 10 < getPos[7]) {
				this.y = this.y - 10;
			} else {
				this.y = this.y + 10;
			}
		} else {
			return false;
		}
	}
	setX(x) { 
		this.x = x;
	}
	setY(y) { 
		this.y = y;
	}
}
