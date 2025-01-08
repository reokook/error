function generateRangeError() {
  let num =5;
 
  let arr = new Array(num);
  arr.length = -1; 
  return arr;
}

try {
  generateRangeError();
} catch (e) {
  if (e instanceof RangeError) {
    console.log("A RangeError has been caught: " + e.message);
  } else {
    console.log("An error has been caught: " + e.message);
  }
}

//2//
function generateReferenceError() {
  console.log(nonExistentVariable);
}

try {
  generateReferenceError();
} catch (e) {
  if (e instanceof ReferenceError) {
    console.log("A ReferenceError has been caught: " + e.message);
  } else {
    console.log("An error has been caught: " + e.message);
  }
}

//3//
function generateTypeError() {
  let num = 42;
  num();
}

try {
  generateTypeError();
} catch (e) {
  if (e instanceof TypeError) {
    console.log("A TypeError has been caught: " + e.message);
  } else {
    console.log("An error has been caught: " + e.message);
  }
}

//4//
function generateTypeError() {
  let obj = {
    name: "Copilot",
    age: 2,
  };
 
  obj.name(); 
}

try {
  generateTypeError();
} catch (e) {
  if (e instanceof TypeError) {
    console.log("A TypeError has been caught: " + e.message);
  } else {
    console.log("An error has been caught: " + e.message);
  }
}
//6//
function squareNumber(num) {
  if (typeof num !== "number") {
    throw new Error("argument is not a number");
  }
  return num * num;
}

try {
  console.log(squareNumber(4)); 
  console.log(squareNumber("hello")); 
} catch (e) {
  console.log("An error has been caught and handled: " + e.message);
}

