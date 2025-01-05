function sortNumbers(numbers) {
  return numbers.sort((a, b) => a - b);
}

const numbers = [
  12, 5, 18, 7, 3, 20, 1, 15, 2, 4, 8, 6, 11, 13, 10, 19, 14, 9, 17, 16,
];
console.log(sortNumbers(numbers));
