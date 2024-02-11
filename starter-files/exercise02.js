function Cube(sideArg) {
    this.side = sideArg;
  
    this.area = function () {
      return 6 * (this.side * this.side);
    };
  
    this.perimeter = function () {
      return 12 * this.side;
    };
  }
  
  let valueOfTheSide = +prompt("Enter the size of the sides of the cube");
  let cube = new Cube(valueOfTheSide);
  
  const area = cube.area();
  const perimeter = cube.perimeter();
  
  console.log(cube);
  console.log("Area:", area);
  console.log("Perimeter:", perimeter);
  