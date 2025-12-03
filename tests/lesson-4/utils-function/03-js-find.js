const scores = [85, 90, 78];
const ages = [18, 21, 16, 25];
const words = ["apple", "banana", "cherry", "date"];
const numbers = [1, 2, 3, 4];
const expenses = [50, 100, 150];

// 3.1 Tìm giá trị đầu tiên trong scores > 80.
const firstValueScoreBigger80 = scores.find((score) => score > 80);
console.log("Gia tri dau tien trong scores > 80 la ", firstValueScoreBigger80);

// 3.2 Tìm giá trị đầu tiên trong ages > 20.
const firstValueAgeBigger20 = ages.find((age) => age > 20);
console.log("Gia tri dau tien trong ages > 20 la ", firstValueAgeBigger20);

// 3.3 Tìm từ đầu tiên trong words có độ dài > 5.
const firstValueWorldLonger5 = words.find((word) => word.length > 5);
console.log(
  "Tu dau tien trong words co do dai > 5 la ",
  firstValueWorldLonger5
);
