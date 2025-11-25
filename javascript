//This is a basic JavaScript program 
function greet(name) {
  return "Hello, " + name + "!";
}

const personName = "john";
const greeting = greet(personName);
console.log(greeting);

//create an array of numbers
const numbers = [1, 2, 3, 4, 5, 6]

//Calculate the sum of numebers in the array
let sum = 0;
for (const num of numbers) {
  sum += num;
}
console.log("Sum of numbers:", sum);

