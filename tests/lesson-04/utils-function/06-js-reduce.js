const scores = [85, 90, 78];
const ages = [18, 21, 16, 25];
const words = ["apple", "banana", "cherry", "date"];
const numbers = [1, 2, 3, 4];
const expenses = [50, 100, 150];

// 6.1 Tính tổng các giá trị trong scores.
const sumOfScores = scores.reduce((total, score) => total + score, 0);
console.log("Tong cac gia tri trong scores ", sumOfScores);

// 6.2 Tính tích các giá trị trong numbers.
const accumulationOfNumbers = numbers.reduce((total, number) => {
  return total * number;
}, 1);
console.log("Tich cac gia tri trong numbers ", accumulationOfNumbers);

// 6.3 Tính tổng các giá trị trong expenses.
const sumOfExpenses = expenses.reduce((total, expense) => total + expense, 0);
console.log("Tong cac gia tri trong expenses ", sumOfExpenses);
