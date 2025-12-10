const scores = [85, 90, 78];
const ages = [18, 21, 16, 25];
const words = ["apple", "banana", "cherry", "date"];
const numbers = [1, 2, 3, 4];
const expenses = [50, 100, 150];

// 1.1 Kiểm tra tất cả giá trị trong scores có > 70 không.
const scoresLonHon70 = scores.every((number) => number > 70);
if (scoresLonHon70) {
  console.log("Tất cả giá trị trong scores CÓ > 70.");
} else {
  console.log("Tất cả giá trị trong scores KHÔNG > 70.");
}

// 1.2 Kiểm tra tất cả giá trị trong ages có > 15 không.
const agesLonHon15 = ages.every((number) => number > 15);
if (agesLonHon15) {
  console.log("Tất cả giá trị trong ages CÓ > 15.");
} else {
  console.log("Tất cả giá trị trong ages KHÔNG > 15.");
}

// 1.3 Kiểm tra tất cả từ trong words có độ dài > 3 không.
const wordsLonHon3 = words.every((word) => word.length > 3);
if (wordsLonHon3) {
  console.log("Tất cả từ trong words có độ dài > 3.");
} else {
  console.log("KHÔNG tất cả từ trong words có độ dài > 3.");
}
