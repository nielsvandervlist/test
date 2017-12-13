//Every class can have an constructer
class Point{
//Private classes only avaible in Point, public is standard
	private x: number;
	private y: number;

//Using the "?" makes the number optional which 
	constructor(x: number, y:number){
		this.x = x;
		this.y = y;
	}

	//method
	draw(){
		console.log('X:' + this.x + ', Y: ' +this.y);
	}
}

//new operator unspecified object geen bekende var
// this is an object
// When using constructer initialize 1,2
let point = new Point(1,2);

point.draw();