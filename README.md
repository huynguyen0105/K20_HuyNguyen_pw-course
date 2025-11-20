K20 Playwright VietNam – Tài liệu học tập  
🎁Repo này được tạo để học và luyện tập Playwright dành cho lớp K20 – Playwright VietNam.  
Bao gồm:  
- Cấu trúc dự án Playwright chuẩn  
- Ví dụ test cơ bản  
- Hướng dẫn chạy test  
- Ghi chú & bài tập xuyên suốt quá trình học  
🚀 Công nghệ sử dụng  
- Node.js  
- Playwright  
- VS Code  
- NPM / NVM  
- Git & GitHub
   
📦 Cài đặt dự án  
- Clone project:  
- git clone <link-repo>  
- cd K20-PlaywrightVietNam  
- Cài dependencies:  
npm install

🧪 Chạy test  
- Chạy toàn bộ test:  
npx playwright test  
- Chạy test trong UI mode:  
npx playwright test --ui  
- Chạy 1 test file cụ thể:  
npx playwright test tests/example.spec.js

📊 Xem report  
- Sau khi chạy test, xem report:  
npx playwright show-report  

📁 Cấu trúc thư mục  
├── tests/                 # Thư mục chứa test  
├── playwright-report/     # Report (ignored by Git)  
├── test-results/          # Kết quả test tạm  
├── playwright.config.js   # File config chính  
└── README.md              # Tài liệu repo  
