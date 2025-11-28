// bai 1
let tongTuMotDenMotTram = 0;
for (let i = 1; i <= 100; i++) {
  tongTuMotDenMotTram = tongTuMotDenMotTram + i;
}
console.log("1. Tong tu 1 den 100 la " + tongTuMotDenMotTram);
// bai 2
for (let i = 2; i <= 9; i++) {
  console.log("Bang cuu chuong " + i);
  for (let j = 1; j <= 10; j++) {
    console.log(i + " x " + j + " = " + i * j);
  }
}
// bai 3
let mangSoLeTuMotDenChinChin = [];
for (let i = 1; i < 100; i++) {
  if (i % 2 !== 0) {
    mangSoLeTuMotDenChinChin.push(i);
  }
}
console.log("3. Mang so le tu 1 toi 99", mangSoLeTuMotDenChinChin);
// bai 4
for (let j = 1; j <= 10; j++) {
  console.log("user" + j + "@example.com");
}
// bai 5
const mangDoanhThu = [
  { month: 1, total: 101 },
  { month: 2, total: 102 },
  { month: 3, total: 103 },
  { month: 4, total: 104 },
  { month: 5, total: 105 },
  { month: 6, total: 106 },
  { month: 7, total: 107 },
  { month: 8, total: 108 },
  { month: 9, total: 109 },
  { month: 10, total: 110 },
  { month: 11, total: 111 },
  { month: 12, total: 112 },
];

let tongDoanhThuCua12Thang = 0;
for (let j = 0; j < mangDoanhThu.length; j++) {
  tongDoanhThuCua12Thang = tongDoanhThuCua12Thang + mangDoanhThu[j].total;
}

console.log("5. Tong doanh thu 12 thang la " + tongDoanhThuCua12Thang);
