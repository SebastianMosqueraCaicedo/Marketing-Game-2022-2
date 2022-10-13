class Obj {
	constructor (x, y, width, height, image){
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.image = image;

		this.center = [this.x + this.width/2, this.y + this.height/2];

	}

	draw (){
		if (this.image != undefined) {
			image(this.image, this.x, this.y, this.width, this.height);
		} else {
			fill(200,0,0);
			rect(this.x, this.y, this.width, this.height);
		}
	}
}
