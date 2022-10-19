// We put in curlies the interface (or class, or whatever) that we
// want to import from the file that's inside quotes.
import { Circle } from './circle';

class Figures {
	circles: Circle[] = [];
	addCircle(mycircle: Circle) {
		this.circles.push(mycircle);
	}
	listCircles() {
		for (let next of this.circles) {
			console.log(`The ${next.fillcolor} circle has area ${next.radius * next.radius * 3.1415}`);
		}
	}
}

let myfigures = new Figures();
myfigures.addCircle({
	radius: 5, fillcolor: 'blue', linecolor: 'black', lineweight: 2
});
myfigures.addCircle({
	radius: 6.5, fillcolor: 'red', linecolor: 'darkred', lineweight: 3
});
myfigures.listCircles();
