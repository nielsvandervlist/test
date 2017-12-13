class Point{
	x: number;
	y: number;

	draw(){
		console.log('X:' + this.x + ', Y: ' +this.y);
	}

	getDistance(another: Point){
		//..
	}
}

//new operator unspecified object geen bekende var
let point = new Point();
point.x = 1;
point.y = 2;
point.draw();