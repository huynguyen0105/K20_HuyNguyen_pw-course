const scores = [85, 90, 78];
const ages = [18, 21, 16, 25];
const words = ["apple", "banana", "cherry", "date"];
const numbers = [1, 2, 3, 4];
const expenses = [50, 100, 150];

// 4.1 Từ scores, tạo mảng mới: tăng 10% nếu < 90, giảm 5% nếu ≥ 90.
const updateScores4_1 = scores.map((score) => {
  if (score < 90) {
    return score + (score * 10) / 100;
  }
  if (score >= 90) {
    return score - (score * 5) / 100;
  }
});
console.log(
  "tạo mảng mới: tăng 10% nếu < 90, giảm 5% nếu ≥ 90 la ",
  updateScores4_1
);

// 4.2 Từ numbers = [1, 2, 3], chuyển thành mảng chuỗi.
const mangChuoiCuaNumbers = numbers.map((num) => num.toString());
console.log("Mang chuoi cua numbers la ", mangChuoiCuaNumbers);

//4.3 Từ numbers = [1, 2, 3], nhân đôi mỗi giá trị.
const doubleNumbers = numbers.map((num) => num * 2);
console.log("Mang nhan doi moi gia tri la ", doubleNumbers);
