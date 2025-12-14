/*
Cân cân nặng lý tưởng của bạn là: 70 x 9: 10 = 63 kg
Cân nặng tối đa là: 70kg
Cân nặng tối thiểu là: 70 x 8 :10 = 56 kg
Tạo file ex4.js, thêm vào code đáp án cho đề bài sau:
a. Khai báo chiều cao của bạn (cm)
b. In ra cân nặng lý tưởng, cân nặng tối đa, cân nặng tối thiểu trên cùng một dòng.
*/
const chieuCaoCuaBanCentimet = 172;
let soLeCuaChieuCao = chieuCaoCuaBanCentimet % 100;
// console.log("Số lẻ của chiều cao là"+soLeCuaChieuCao);

let canNangLiTuongCuaBan = soLeCuaChieuCao * 9 / 10;
// console.log("Cân nặng lý tưởng "+canNangLiTuongCuaBan+" kg");

let canNangToiDa = soLeCuaChieuCao;
// console.log("Cân nặng tối đa "+canNangToiDa+" kg");

let canNangToiThieu = soLeCuaChieuCao * 8 / 10
// console.log("Cân nặng tối thiểu "+canNangToiThieu+" kg");

console.log("Cân nặng lý tưởng "+canNangLiTuongCuaBan+" kg."
    +" Cân nặng tối đa "+canNangToiDa+" kg."
    +" Cân nặng tối thiểu "+canNangToiThieu+" kg."
);
