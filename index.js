// TODO: Get a reference to our form

// TODO: Get a reference to our input

function generateRandomNumber() {
  
  return Math.floor((Math.random() * 10) + 1);;
}

// TODO: Display inital random number

var initialNumber = generateRandomNumber();

document.getElementById("initialNumberHolder").innerHTML = `Starting number: ${ initialNumber }`;

// TODO: Add "submit" event listener

// TODO: Process input, generate new random number, compare
function displayResult() {
  var newNum = generateRandomNumber();
  if(document.getElementById('higher').checked) {
    if(newNum > initialNumber)
    {
      document.getElementById("results").innerHTML = "The next number is " +newNum+ " You won!";
    }else{
      document.getElementById("results").innerHTML = "The next number is " +newNum+ " You lost, please try again.";
    }
  }else if(document.getElementById('lower').checked) {
    if(newNum < initialNumber)
    {
      document.getElementById("results").innerHTML = "The next number is " +newNum+ " You won!";
    }else{
      document.getElementById("results").innerHTML = "The next number is " +newNum+ " You lost, please try again.";
    }
  }else{
    if(newNum == initialNumber){
      document.getElementById("results").innerHTML = "The next number is " +newNum+ " You won!";
    }
  else{
    document.getElementById("results").innerHTML = "The next number is " +newNum+ " You lost, please try again.";
  }

  }

  
}
function reset()
{
  initialNumber = generateRandomNumber();
  document.getElementById("initialNumberHolder").innerHTML = `Starting number: ${ initialNumber }`;
  document.getElementById("results").innerHTML = "";
}
// TODO: Provide user restart method
