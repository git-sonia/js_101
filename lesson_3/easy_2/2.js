let numbers = [1, 2, 3, 4, 5];

let newArray = numbers.map(num => num);

newArray.sort((num1, num2) => num2 - num1);

console.log(newArray);
console.log(numbers);
