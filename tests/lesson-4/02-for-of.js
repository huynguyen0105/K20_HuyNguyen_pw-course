const numbers = [1, 2, 3];
const str = "Playwright";
const student = { name: "Alex", age: 10, salary: 20 };
const arr = [1, 2, 3, 4, 3, 55, 23];
const dupArr = [1, 2, 3, 1, 2, 4, 5];

/*
2. for...of
Thêm vào file 02-for-of.js và thêm vào lời giải cho các bài sau:
2.1 In lần lượt từng ký tự của str
2.2 Tạo mảng đảo ngược từ str
2.3 Tìm và in vị trí đầu tiên và cuối cùng của giá trị 3 trong arr
2.4 Lọc các phần tử xuất hiện 1 lần trong dupArr
*/

// 2.1
for (let value of str) {
  console.log(value);
}
// 2.2
let arrayOfStr = [];
let reverseArrayOfStr = [];
for (let value of str) {
  arrayOfStr.push(value);
}
console.log("arrayOfStr ", arrayOfStr);
for (let i = arrayOfStr.length - 1; i >= 0; i--) {
  reverseArrayOfStr.push(arrayOfStr[i]);
}
console.log("reverseArrayOfStr ", reverseArrayOfStr);

// 2.3.1
let viTriXuatHienSo3DauTien = -1;
let temp = 0;
for (let value of arr) {
  if (value === 3) {
    viTriXuatHienSo3DauTien = temp;
    break;
  }
  temp = temp + 1;
}
if (viTriXuatHienSo3DauTien === -1) {
  console.log("Mang khong co so 3");
} else {
  console.log(
    `Vi tri xuat hien so 3 dau tien trong mang la arr[${viTriXuatHienSo3DauTien}]`
  );
}

// console.log(arr.indexOf(3));

// 2.3.2

let viTriXuatHienSo3CuoiCung = -1;
let temp1 = 0;
for (let value of arr) {
  if (value === 3) {
    viTriXuatHienSo3CuoiCung = temp1;
  }
  temp1 = temp1 + 1;
}
if (viTriXuatHienSo3DauTien === -1) {
  console.log("Mang khong co so 3");
} else {
  console.log(
    "Vi tri xuat hien so 3 cuoi cung trong mang la arr[" +
      viTriXuatHienSo3CuoiCung +
      "]"
  );
}

// console.log(arr.lastIndexOf(3));

//2.4
// console.log(dupArr);
// const dupArr = [1, 2, 3, 1, 2, 4, 5];
let soLanXuatHienTrongMang = {};

// Dem so lan xuat hien
for (let value of dupArr) {
  if (soLanXuatHienTrongMang[value] === undefined) {
    soLanXuatHienTrongMang[value] = 1;
  } else {
    soLanXuatHienTrongMang[value]++;
  }
}
console.log(soLanXuatHienTrongMang);

//loc cac phan tu xuat hien 1 lan
let phanTuXuatHien1Lan = [];
for (let value of dupArr) {
  if (soLanXuatHienTrongMang[value] === 1) {
    phanTuXuatHien1Lan.push(value);
  }
}
console.log(
  "Cac phan tu xuat hien 1 lan trong mang dupArrr",
  phanTuXuatHien1Lan
);
