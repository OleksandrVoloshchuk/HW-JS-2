let number1 = prompt("Введіть перше число:");
let number2 = prompt("Введіть друге число:");

number1 = (+number1);
number2 = (+number2);

let result = number1 + " + " + number2 + " = " + (number1 + number2) + "\n" +
             number1 + " - " + number2 + " = " + (number1 - number2) + "\n" +
             number1 + " * " + number2 + " = " + (number1 * number2) + "\n" +
             number1 + " / " + number2 + " = " + (number1 / number2) 

alert(result);