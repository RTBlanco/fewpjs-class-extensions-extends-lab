// Your code here
class Polygon {
  constructor(sides){
    this._sides = sides
  }

  get countSides(){
    return this._sides.length
  }

  get perimeter(){
    return this._sides.reduce((a,b)=>a + b, 0)
  }
}

class Triangle extends Polygon {
  get isValid(){
    let [a, b, c] = this._sides
    if (a + b <= c || a + c <= b || b + c <= a){
      return false;
    }
    return true;
  }
}

class Square extends Polygon{
  get isValid(){
    return this._sides.every((a) => a === this._sides[0])
  }

  get area(){
    return this._sides[0] ** 2
  }
}