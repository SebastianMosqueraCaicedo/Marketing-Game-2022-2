class Hitbox {

	constructor(items) {
		this.items = items;
		this.radius = 5;
		this.balls = [];
		this.body();
	}

	draw() {
		// a series of circles along the lines of items's sides

		for (let i = 0; i < this.balls.length; i++) {
			strokeWeight(1);
			stroke(50);
			noFill();
			ellipse(this.balls[i].x, this.balls[i].y, this.radius);
		}
	}

	body() {
		if(this.check()) {
			let amount = 0;
			let length = 0;
			let coords = [
				{x: 0, y: 0},
				{x: 0, y: 0}
			];
			// up side balls
			coords = [
				{x: this.items.x1, y: this.items.y1},
				{x: this.items.x2, y: this.items.y2}
			];

			length = this.distVects(coords);
			amount = this.ballNum(length);
			let percAmount = 1 / amount;

			for (let i = 0; i < amount; i++) {
				let posX = lerp(coords[0].x, coords[1].x, i * percAmount);
				let posY = lerp(coords[0].y, coords[1].y, i * percAmount);
				this.balls.push({x: posX, y: posY});
			}
			console.log(coords, length, amount, percAmount, this.balls);


		} else {
			this.balls.push({x: this.items.center[0], y: this.items.center[1]});
		}

	}

	hit(player) {
		for (let i = 0; i < this.balls.length; i++) {

		}
	}

	
	check() {
		let sum = this.items.x1 + this.items.x2 + this.items.x3 +
			this.items.x4 + this.items.y1 + this.items.y2 +
			this.items.y3 + this.items.y4;
		if (this.items.x5 === undefined && (sum != undefined || sum != null)){
			return true
		} else {
			return false
		}
	}

	distVects(coords) {
		return dist(coords[0].x, coords[0].y, coords[1].x, coords[1].y);
	}

	ballNum(length) {
		return floor(length / this.radius);
	}
}
