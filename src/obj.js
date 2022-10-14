class Obj {
	constructor(x1, y1, x2, y2, x3, y3, x4, y4, image) {
		//Left corner
		this.x1 = x1;
		this.y1 = y1;

		//Rigth corner
		this.x2 = x2;
		this.y2 = y2;

		//Rigth bottom corner
		this.x3 = x3;
		this.y3 = y3;

		//Left bottom corner
		this.x4 = x4;
		this.y4 = y4;

		this.image = image;

		this.center = [this.x1-this.x2, this.y1-this.y2];

	}

	draw() {
		if (this.image != undefined) {
			image(this.image, this.x, this.y, this.width, this.height);
		} else {
			fill(0);
			quad(this.x1, this.y1, this.x2, this.y2, this.x3, this.y3, this.x4, this.y4);
			fill(255)
			circle(this.center[0], this.center[1], 50)
		}
	}

	getPos() { 
		let pos = [this.x1, this.y1, this.x2, this.y2, this.x3, this.y3, this.x4, this.y4];
		return pos;
		
	}
}
