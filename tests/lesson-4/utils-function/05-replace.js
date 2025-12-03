const phoneNumber = "0123 456 789";
const report = "Có một lỗi trong hệ thống.";
const numbersStr = "1,234,567";

// 1. Thay khoảng trắng bằng "." trong phoneNumber.
const updatePhoneNumber = phoneNumber.replaceAll(" ",".");
console.log("Thay khoảng trắng bằng . trong phoneNumber: ",updatePhoneNumber);

// 2. Thay "lỗi" bằng "bug" trong report.
const updateReport = report.replace("lỗi","bug");
console.log("Thay lỗi bằng bug trong report: ",updateReport);

// 3. Thay "," bằng "." trong numbersStr.
const updateNumbersStr = numbersStr.replaceAll(",",".");
console.log("Thay , bằng . trong numbersStr: ",updateNumbersStr);
