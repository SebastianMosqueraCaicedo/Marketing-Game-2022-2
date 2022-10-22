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

		this.heldObject = false;
	}

	draw() {
		this.checkBoundaries();
		this.center = [this.x + (this.width / 2), this.y + (this.height / 2)];
		image(this.imageObject[this.state], this.x, this.y, this.width, this.height);
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


	isNear(object, distance){
		if (dist(this.center[0], this.center[1], object.x, object.y) < distance){
			return true;
		} else {
			return false;
		}
	}

	holdItem(object){
		object.x = this.x + 20;
		object.y = this.y + 10;
	}

	checkBoundaries() {
		if (this.x > (windowWidth - this.width)){
			this.x -= this.speed;
		} else if (this.x < this.width / 2){
			this.x += this.speed;
		} else if (this.y > (windowHeight - this.height * 1.5)){
			this.y -= this.speed;
		} else if (this.y < this.heigth){
			this.y += this.speed;
		}
	}

	getX() { 
		return this.x
	}

	getY() { 
		return this.y
	}
	
	setX(x) { 
		this.x = x;
	}
	setY(y) { 
		this.y = y;
	}

	getState() { 
		return this.state;
	}
	setState(e) { 
		this.state = e;
	}
}
