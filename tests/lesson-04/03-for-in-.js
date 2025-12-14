const numbers = [1, 2, 3];
const str = "Playwright";
const student = { name: "Alex", age: 10, salary: 20 };
const arr = [1, 2, 3, 4, 3, 55, 23];
const dupArr = [1, 2, 3, 1, 2, 4, 5];

//3.1 In tên và giá trị mỗi thuộc tính của student
for (let value in student) {
  console.log("Gia tri thuoc tinh " + value + " la " + student[value]);
}

//3.2 Tính tổng các giá trị số trong student
let tongCacGiaTriSoTrongStudent = 0;
for (let value in student){
    if (typeof student[value]==="number"){
        tongCacGiaTriSoTrongStudent = tongCacGiaTriSoTrongStudent + student[value];
    }
}
console.log("Tong cac gia tri so cua student la "+tongCacGiaTriSoTrongStudent);

//3.3 Tạo mảng chứa tên các thuộc tính của student
let mangChuaTenCacThuocTinhCuaStudent = [];
for (let value in student) {
    mangChuaTenCacThuocTinhCuaStudent.push(value);
}
console.log("Mang chua ten cac thuoc tinh cua Student ",mangChuaTenCacThuocTinhCuaStudent);