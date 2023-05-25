let numbers = [1, 2, 3, 4];
while (numbers.length > 0) {
  numbers.shift();
}
console.log(numbers.length === 0);

numbers = [1, 2, 3, 4];
numbers = numbers.filter(() => null);
console.log(numbers.length === 0);

numbers = [1, 2, 3, 4];
numbers.splice(0, numbers.length);
console.log(numbers.length === 0);
