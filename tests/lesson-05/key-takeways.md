# Buổi học số 5 – DOM terminology, Playwright basic

## 1. Javascript Function Advance
### 1.1 Function Expression
- Function gán vào biến.
```js
const add = function(a, b) {
  return a + b;
};
```
### 1.2 Arrow Function (Lambda)
Cú pháp ngắn gọn hơn.
```js
const add = (a, b) => a + b;
const greet = () => console.log("Hello");
```
### 1.3 Anonymous Function
Hàm không tên, dùng khi làm callback hoặc gán tạm.
```js
setTimeout(function() {
  console.log("Hello");
}, 1000);
```
## 2. DOM (Document Object Model)
DOM là cấu trúc dạng cây của website.

Mở bằng F12 → Elements.

Một element gồm:
- Thẻ mở
- Thẻ đóng
- Thuộc tính
- Giá trị
- Text

Ví dụ:
```html
<option value="usa">United States</option>
```
Các thẻ HTML thường gặp

Cấu trúc: 
```html
<html>, <body>, <div>, <span>, <header>, …
```
Nội dung:
```html
<h1>–<h6>, <p>, <a>, <img> …
```
Form: 
```html
<form>, <input>, <button>, <select>, <textarea>
```
## 3. Selector

Automation cần selector để tìm phần tử.

#### 3 loại selector:
##### 3.1. XPath

Mạnh nhất, dùng được mọi trường hợp.

Ví dụ:
```
//button[normalize-space()='Add to cart']
```
##### 3.2. CSS Selector

Ngắn gọn, nhanh.

Ví dụ:
```
.add-to-cart
```
##### 3.5 Playwright Selector

Ngắn nhất, dễ dùng.

Ví dụ:
```
page.getByText("Add to cart")
```
Khi nào dùng gì?
```
Playwright selector > CSS > XPath
```
## 4. Playwright Basic Syntax
### 4.1 Tạo test
```ts
import { test } from '@playwright/test';

test('Tên test', async ({ page }) => {
  // code
});
```
### 4.2 Step trong test
```ts
await test.step('Tên step', async () => {
  // code
});
```
### 4.3 Navigate
```ts
await page.goto('https://example.com');
```
### 4.4 Locate element
```ts
page.locator("//input[@id='email']");
```
### 4.5 Click
```ts
await page.locator("//button").click();
```
### 4.6 Input (fill / type)
```ts
page.locator("//input").fill("Playwright VN");
page.locator("//input").pressSequentially("Hello", { delay: 100 });
```
### 4.7 Radio / Checkbox
```ts
page.locator("//input").check();
page.locator("//input").setChecked(false);
```
### 4.8 Select dropdown
```ts
await page.locator('//select').selectOption({ label: 'USA' });
```
### 4.9 Upload file
```ts
page.locator("//input[@type='file']").setInputFiles("path/to/file");
```