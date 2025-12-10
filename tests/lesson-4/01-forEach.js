const numbers = [1, 2, 3];
const str = "Playwright";
const student = { name: "Alex", age: 10, salary: 20 };
const arr = [1, 2, 3, 4, 3, 55, 23];
const dupArr = [1, 2, 3, 1, 2, 4, 5];

//1.1 In ra lan luot tung phan tu cua numbers
numbers.forEach((giatri) => {
  console.log(giatri);
});

//1.2 Tính tổng, tìm giá trị lớn nhất và nhỏ nhất của numbers
// 1.2,1
let sumOfNumbers = 0;
numbers.forEach((giatri) => {
  sumOfNumbers = sumOfNumbers + giatri;
});
console.log("Tong cac gia tri trong mang numbers la " + sumOfNumbers);
// 1.2.2
let maxOfNumbers = numbers[0];
numbers.forEach((giatri) => {
  if (giatri > maxOfNumbers) {
    maxOfNumbers = giatri;
  }
});
console.log("Gia tri lon nhat trong mang numbers la " + maxOfNumbers);
//1.2.3
let minOfNumbers = numbers[0];
numbers.forEach((giatri) => {
  if (giatri < minOfNumbers) {
    minOfNumbers = giatri;
  }
});
console.log("Gia tri nho nhat trong mang numbers la " + minOfNumbers);

//1.3 Tạo mảng mới từ numbers, mỗi phần tử nhân đôi
let doubleNumbers = [];
numbers.forEach((giatri) => {
  giatri = giatri * 2;
  doubleNumbers.push(giatri);
});

console.log("Mang moi tu NUmber, moi phan tu nhan doi la", doubleNumbers);
