class Hitbox {

	constructor(items) {
		this.items = items;
		this.radius = 10;
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
			// how many balls fit in the line?
			let amount = 0;
			// how long is the line joining the coordinates?
			let length = 0;
			// objects corner coordinates
			let coords = [
				{x: 0, y: 0},
				{x: 0, y: 0}
			];

			// adds points along a line between two dots to the circles array
			let generateCircles = () => {
				length = this.distVects(coords);
				amount = this.ballNum(length);
				let pAmnt = 1 / amount;

				for (let i = 0; i < amount; i++) {
					// lerp basically maps the distance between point one
					// and two and adds a third point at the rate set
					// by the last value (*--.------*) ~= lerp(1, 2, 0.3)
					let posX = lerp(coords[0].x, coords[1].x, i * pAmnt);
					let posY = lerp(coords[0].y, coords[1].y, i * pAmnt);
					this.balls.push({x: posX, y: posY});
				}

				// reset vars for the next side
				amount = 0;
				length = 0;
				coords = [
					{x: 0, y: 0},
					{x: 0, y: 0}
				];
			}

			// up side balls
			coords = [
				{x: this.items.x1, y: this.items.y1},
				{x: this.items.x2, y: this.items.y2}
			];
			generateCircles();

			// right side balls
			coords = [
				{x: this.items.x2, y: this.items.y2},
				{x: this.items.x3, y: this.items.y3}
			];
			generateCircles();

			// down side balls
			coords = [
				{x: this.items.x3, y: this.items.y3},
				{x: this.items.x4, y: this.items.y4}
			];
			generateCircles();

			// left side balls
			coords = [
				{x: this.items.x4, y: this.items.y4},
				{x: this.items.x1, y: this.items.y1}
			];
			generateCircles();

		} else {
			this.balls.push({x: this.items.center[0], y: this.items.center[1]});
		}

	}

	hit(player) {
		let hit = false;
		for (let i = 0; i < this.balls.length; i++) {
			let xRound = this.balls[i].x;
			let yRound = this.balls[i].y;
			if(dist(xRound, yRound, 
				player.center[0], player.center[1]) < (player.width / 2)){
				hit = true;
			} 
		}
		if (hit) {
			return true;
		} else {
			return false;
		}
	}

	
	check() {
		let sum = this.items.x1 + this.items.x2 + this.items.x3 +
			this.items.x4 + this.items.y1 + this.items.y2 +
			this.items.y3 + this.items.y4;
		if (this.items.x5 === undefined && (sum != undefined || sum != null)){
			return true;
		} else {
			return false;
		}
	}

	distVects(coords) {
		return dist(coords[0].x, coords[0].y, coords[1].x, coords[1].y);
	}

	ballNum(length) {
		return floor(length / this.radius);
	}
}
