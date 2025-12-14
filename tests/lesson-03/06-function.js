// Bai 1
function multiply(a, b) {
  console.log("Tich của " + a + " va " + b + " la", a * b);
}
multiply(2, 3);
multiply(3, 4);
// Bai 2
function findMin(a, b, c) {
  let minium = a;
  if (minium > b) {
    return b;
  }
  if (minium > c) {
    return c;
  }
  return minium;
}
let boSo1 = findMin(1, 2, 3);
console.log("So nho nhat trong (1, 2, 3) la " + boSo1);
let boSo2 = findMin(10, 8, 14);
console.log("So nho nhat trong (10, 8, 14) la " + boSo2);

//bai 3
/*
Viết hàm getTopStudents nhận 2 tham số:
● students: mảng các object, mỗi object chứa name (tên) và score (điểm).
● threshold: ngưỡng điểm để được coi là "top" (số).
Hàm trả về mảng mới chứa tên của những học sinh có điểm >= threshold.
Gọi hàm với danh sách thực tế và in kết quả.
*/

function getTopStudents(students, threshold) {
  let topStudents = [];
  for (let i = 0; i < students.length; i++) {
    if (students[i].score >= threshold) {
      topStudents.push(students[i]);
    }
  }
  return topStudents;
}
const students = [
  { name: "Huy", score: 5.5 },
  { name: "HuyVuyp", score: 7.8 },
  { name: "HuyNgoo", score: 6.5 },
];
console.log(getTopStudents(students, 6.5));
// bai 4
/*
Viết hàm calculateInterest nhận 3 tham số:
● principal: số tiền gửi ban đầu (số).● rate: lãi suất hàng năm (phần trăm, ví dụ 5 nghĩa là 5%).
● years: số năm gửi.
Hàm tính và trả về tổng số tiền (gốc + lãi) sau years năm, sử dụng công thức lãi
đơn: total = principal + principal * rate * years / 100. Gọi hàm với ví dụ thực tế và
in kết quả.
*/
function calculateInterest(principal, rate, years) {
  let total = principal + (principal * rate * years) / 100;
  return total;
}
console.log(
  "Tong tien sau khi gui 1 trieu voi lai 1.2 sau 3 nam la " + calculateInterest(1_000_000, 1.2, 3)
);
