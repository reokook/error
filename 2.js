function generateRangeError() {
  let num = 1;
  try {
   
    let arr = new Array(num);
    arr.length = -1; 
    return arr;
  } catch (e) {
    if (e instanceof RangeError) {
      console.log("A RangeError has been caught and handled: " + e.message);
    } else {
      console.log("An error has been caught and handled: " + e.message);
    }
  }
}

generateRangeError();
//2//

function generateReferenceError() {
  try {
   
    console.log(nonExistentVariable);
  } catch (e) {
    if (e instanceof ReferenceError) {
      console.log("A ReferenceError has been caught and handled: " + e.message);
    } else {
      console.log("An error has been caught and handled: " + e.message);
    }
  }
}

generateReferenceError();
//3//
function generateTypeError() {
  let num = 42;
  try {
   
    num(); 
  } catch (e) {
    if (e instanceof TypeError) {
      console.log("A TypeError has been caught and handled: " + e.message);
    } else {
      console.log("An error has been caught and handled: " + e.message);
    }
  }
}

generateTypeError();
//4//
function generateTypeError2() {
  let obj = {
    name: "Copilot",
    age: 2,
  };
  try {
    
    obj.name(); 
  } catch (e) {
    if (e instanceof TypeError) {
      console.log("A TypeError has been caught and handled: " + e.message);
    } else {
      console.log("An error has been caught and handled: " + e.message);
    }
  }
}

generateTypeError2();
