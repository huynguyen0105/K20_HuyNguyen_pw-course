# Buổi học số 3 – Git & JavaScript Basic (Continue)

## 1. Git – Undo Actions

### 1.1 Undo commit message
Dùng khi commit sai nội dung message.

Lệnh:`git commit --amend -m "new message"`

### 1.2 Undo file ở Staging → Working Directory  
Dùng khi `git add` nhầm file.

- Bỏ staging một file:
`git restore --staged <file_name>`

- Bỏ staging toàn bộ file:
`git restore --staged .`

### 1.3 Undo commit (Un-commit)
Dùng khi commit sai file hoặc sai chức năng.

- Reset 1 commit:
`git reset HEAD~1`

- Reset N commit:
`git reset HEAD~N`

Ghi chú:
- Commit đầu tiên không thể reset.
- Nếu muốn reset toàn bộ repo → xoá thư mục `.git` rồi `git init` lại.

---

## 2. Git Branching

### 2.1 Lấy code từ server (pull)
`git pull origin main`

### 2.2 Tạo và quản lý nhánh
Một số lệnh quan trọng:

- Xem danh sách nhánh: `git branch`

- Tạo nhánh: `git branch <branch_name>`

- Chuyển nhánh: `git checkout <branch_name>`

- Tạo + chuyển cùng lúc: `git checkout -b <branch_name>`

- Xoá nhánh: `git branch -D <branch_name>`

Ghi chú:
- Cần **ít nhất 1 commit** mới thấy danh sách branch.
- Luôn **pull code mới nhất** trước khi tạo nhánh mới.

---

## 3. Git Ignore File (.gitignore)

### 3.1 Tác dụng
`.gitignore` dùng để chỉ định các file/thư mục KHÔNG được Git theo dõi.

### 3.2 Các loại file nên ignore:
- File hệ điều hành: `.DS_Store`, `Thumbs.db`
- Thư mục dependencies: `node_modules/`
- File build: `dist/`, `build/`
- File cấu hình cá nhân: `.vscode/settings.json`
- File nhạy cảm: `.env`, key API
- File log: `*.log`

### 3.3 Cú pháp .gitignore
Ví dụ:
Ignore file
secret.txt

Ignore toàn bộ file .log
```js
*.log
```

Ignore thư mục
```js
node_modules/
build/
```

Ignore file ở mọi thư mục con
```
**/*.tmp
```

Ngoại lệ (không ignore)
```
!important.log
```

Chỉ ignore ở thư mục gốc
```
/TODO
```

Ignore tất cả file .txt trong thư mục doc
```
doc/**/*.txt
```
---
## 4. JavaScript Convention

### 4.1 Mục đích
- Giúp code dễ đọc
- Thống nhất trong team

### 4.2 Các kiểu đặt tên phổ biến
- `snake_case`
- `kebab-case`
- `camelCase`
- `PascalCase`

### Sử dụng trong khóa học:
- File & Folder: **kebab-case**
- Biến & Hàm: **camelCase**
- Class: **PascalCase**
- Không dùng snake_case

---

## 5. Enhanced Console.log

### Cách dùng:
```js
console.log("Hello world");
console.log('Tôi là Nga');
console.log(`Tên tôi là ${name}`);
console.log("Giá:", price);
```
## 6. JavaScript Object
### 6.1 Khai báo object
```js
let user = {
  name: "Alex",
  age: 10,
  email: "alex@gmail.com"
}
```
```js
const product = {
  name: "Laptop",
  price: 500,
  manufacturer: {
    name: "Acer",
    year: 2024
  }
}
```
### 6.2 Truy cập dữ liệu
```js
user.name
product.manufacturer.name
product["price"]
```
### 6.3 Thay đổi dữ liệu
```js
user.age = 28
product.manufacturer.year = 2025
```
## 7. Logical Operators
`&&` – cả hai điều kiện đều đúng

`||` – ít nhất một điều kiện đúng

`!` – phủ định điều kiện

## 8. Array (Mảng)
### 8.1 Tạo mảng:
```js
let students = ["Alex", "Tom", "Anna"];
```
### 8.2 Truy xuất:
```js
students.length
students[0]
```
## 9. Function (Hàm)
### 9.1 Khai báo:
```js
function functionName() {
  // code
}
```
### 9.2 Parameter & Return:
```js
function sum(a, b) {
  return a + b;
}
```