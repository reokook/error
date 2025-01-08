function calculateBMI() {
  try {
    
    let weight = parseFloat(document.getElementById("weight").value);
    let height = parseFloat(document.getElementById("height").value);

    if (isNaN(weight) || isNaN(height)) {
      throw new Error("Both weight and height must be numbers.");
    }

    if (weight <= 0 || height <= 0) {
      throw new Error("Weight and height must be positive values.");
    }
    let bmi = weight / (height * height);

    document.getElementById("result").innerText =
      "Your BMI is " + bmi.toFixed(2);
  } catch (e) {
    document.getElementById("result").innerText = "Error: " + e.message;
  }
}
