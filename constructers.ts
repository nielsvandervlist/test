//Every class can have an constructer
class Point{
	x: number;
	y: number;

//Using the "?" makes the number optional which 
	constructor(x?: number, y?:number){
		this.x = x;
		this.y = y;
	}

	draw(){
		console.log('X:' + this.x + ', Y: ' +this.y);
	}
}

//new operator unspecified object geen bekende var
// this is an object
// When using constructer initialize 1,2 as contructer vars now its "?"
let point = new Point();
point.draw();