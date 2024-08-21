const form = document.querySelector("form");

// if u put these lines here the height and weight values will store empty values because it will run as soon as the page loads.
// const height = parseInt(document.querySelector('#height').value)
// const weight = parseInt(document.querySelector('#weight').value)

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } 
  else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } 
  else {
    const bmi = (weight / ((height*height)/10000)).toFixed(2);
    // show the result
    if (bmi < 18.5) {
        results.innerHTML = `<span>Your BMI is ${bmi} and You are underweight</span>`;
    } else if (bmi >= 18.50 && bmi <= 24.90) {
        results.innerHTML = `<span>Your BMI is ${bmi} You are a healthy weight</span>`;
    } else if(bmi >= 25.00 && bmi <= 29.90){
        results.innerHTML = `<span>Your BMI is ${bmi} You are Overweight </span>`;
    } else {
        results.innerHTML = `<span>Your BMI is ${bmi} You are Obese</span>`;
    }
  }
});
