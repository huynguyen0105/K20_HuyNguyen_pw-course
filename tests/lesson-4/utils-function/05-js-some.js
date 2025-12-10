const scores = [85, 90, 78];
const ages = [18, 21, 16, 25];
const words = ["apple", "banana", "cherry", "date"];
const numbers = [1, 2, 3, 4];
const expenses = [50, 100, 150];

//5.1 Kiểm tra scores có giá trị nào > 80 không.
const hasValueBigger80 = scores.some((score) => score > 80);
if (hasValueBigger80) {
  console.log("Scores co gia tri lon hon 80");
} else {
  console.log("Scores khong co gia tri lon hon 80");
}

//5.2 Kiểm tra ages có giá trị nào < 18 không.
console.log(
  ages.some((age) => age < 18)
    ? "Ages co gia tri < 18"
    : "Ages khong co gia tri <18"
);

//5.3 Kiểm tra words có từ nào dài > 5 không.
console.log(
  words.some((word) => word.length > 5)
    ? "Words co tu dai > 5"
    : "Words khong co tu dai > 5"
);
