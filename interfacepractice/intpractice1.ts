interface Rectangle {
  length: number,
  width: number
};

let rects: Rectangle[] = [];

let r1: Rectangle = {
  length: 20,
  width: 30
};
rects.push(r1);

r1 = {
  length:10,
  width: 5.5
};
rects.push(r1);

r1 = {
  length: 25,
  width: 15
};
rects.push(r1);

function SumAreas(rects: Rectangle[]): number {
  let sum: number = 0;
  for (let index:number=0; index < rects.length; index++) {
    sum += (rects[index].length * rects[index].width);
  }
  return sum;
}

let total:number = SumAreas(rects);
console.log(total);