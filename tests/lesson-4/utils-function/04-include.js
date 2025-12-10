const name = "Nguyễn Văn A";
const email = "example@gmail.com";
const productName = "MacBook Pro";
const description = "Khóa học JavaScript cơ bản";

// 1.1 Kiểm tra "Nguyễn" trong name.
console.log(
  name.includes("Nguyễn") ? "Name co Nguyễn" : "Name khong co Nguyễn"
);
// 1.2 Kiểm tra "@" trong email.
console.log(
  email.includes("@") ? "Co @ trong email" : "Khong co @ trong email"
);
// 1.3 Kiểm tra "Pro" trong productName.
console.log(
  email.includes("Pro") ? "Product name co Pro" : "Product name khong co Pro"
);
