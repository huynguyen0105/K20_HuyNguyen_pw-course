# Buổi học số 2: Git & Javascript basic

## 1. Version Control System (VCS)
Version Control System là hệ thống quản lý phiên bản.

### Lợi ích:
- Xem lịch sử thay đổi
- Quay lại phiên bản trước
- Hỗ trợ làm việc nhóm
- Theo dõi từng phiên bản file

### Các loại VCS:
- Local
- Centralized
- Distributed (Git thuộc loại này)

## 2. Git cơ bản
### Git vs GitHub
| Git | GitHub |
|-----|--------|
| Phần mềm quản lý phiên bản trên máy | Dịch vụ lưu trữ repo online |
| Dùng command-line | Có giao diện web |
| Không lưu trữ code online | Là nơi push/pull repo |

### Three Git States
Git quản lý file qua 3 vùng:
1. **Working Directory** – nơi bạn chỉnh sửa file  
2. **Staging Area** – nơi file được chuẩn bị để commit  
3. **Repository** – nơi lưu lịch sử commit

### Quy trình cơ bản:
git init -> git add . -> git commit -m "message" -> git push origin branchName


### Lệnh quan trọng:
- git status
- git add
- git commit
- git log

---

## Commit Convention

Cú pháp:

Các type thường dùng:
- feat: thêm tính năng
- fix: sửa lỗi
- chore: chỉnh sửa nhỏ

---

## 3. JavaScript Basic

### In ra màn hình
```js 
console.log("Hello world!");
```
#### Chạy file bằng Node:
```terminal
node file.js
```

#### Comments
```js
// comment 1 dòng

/*
  comment nhiều dòng
*/
```
#### Biến và hằng
Khai báo:
- var → không dùng nữa
- let → biến
- const → hằng số

#### Kiểu dữ liệu trong JavaScript
1. Primitive Types:
    - Number
    - String
    - Boolean
    - Undefined
    - Null
    - Symbol
    - BigInt
2. Reference Type:
    - Object

**Xem kiểu:*
```js
typeof variable
```

#### Toán tử so sánh
1. "==" so giá trị (ép kiểu)
2. "===" so giá trị và kiểu (nên dùng)

#### Toán tử logic
1. &&
2. ||

#### Toán tử một ngôi
1. Prefix: ++x, --x
2. Postfix: x++, x--

#### Toán tử toán học
1. +, -, *, /
2. Chia 0 → Infinity

#### Câu điều kiện
if (condition) {
} else if (other) {
} else {
}

Hoặc:

switch(value) {
  case 1:
    break;
}

#### Vòng lặp
Ví dụ vòng lặp for:
for (let i = 0; i < 5; i++) {
  console.log("Hello");
}


Các vòng lặp khác:

for...of

for...in

while

do...while

array.forEach()