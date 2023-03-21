function add(number1, number2) {
  return number1 + number2
  
}

function subtract(number1, number2) {
  return number1 - number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}

function division (number1, number2) {
  return number1 / number2;
  
}

const number1 = parseInt(prompt("Enter a number:"));
const number2 = parseInt(prompt("Enter another number:"));

// Prompt 2/3: Instead of just displaying the number result of each of the function calls, update your window.alert(...); method calls to include a phrase that explains the result.
window.alert("The addition of your numbers is " + add(number1, number2));
window.alert("The subtraction of your numbers is " + subtract(number1, number2));
window.alert("The multiplication of your numbers is " + multiply(number1, number2));
window.alert("The division of your numbers is " + division(number1, number2));

// Prompt 4: Combine the separate window.alert() method calls into one call that states all of the results of each mathematical operation. 
window.alert("The addition of your numbers is " + add(number1, number2) + ". " + "The subtraction of your numbers is " + subtract(number1, number2) + ". " + "The multiplication of your numbers is " + multiply(number1, number2) + ". " + "The division of your numbers is " + division(number1, number2));

// Prompt 5: Call all of the calculator functions and have the alert return both the user's inputted numbers and the results.
window.alert(number1 + " + " + number2 + " = " + add(number1, number2) + " , " + number1 + " - " + number2 + " = " + subtract(number1, number2) + " , " + number1 + " * " + number2 + " = " + multiply(number1, number2) + " , " + number1 + " / " + number2 + " = " + division(number1, number2));