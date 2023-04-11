# Cài đặt
- git clone https://github.com/taitamfc/C1022M5
- đổi tên C1022M5 thành c1022m5
- cd c1022m5
- npm install
- npm start

# Git flow
- cập nhật code mới nhất: git pull
- tạo nhánh và chuyển nhánh: git checkout -b feature-ten-tinh-nang
- chuyển nhánh: git checkout ten_nhanh

# Tạo pages, route, model
- Users.js
- UserAdd.js
- UserEdit.js
- UserShow.js
# Users.js
- Gọi model
- Hiển thị ra bảng
- Gắn link edit, add
- Tạo phương thức xử lý xóa
- Goi API xóa
# UserAdd.js
- Tạo form
- Validate form
- Tạo phương thức xử lý
- Gọi API thêm
- Chuyển hướng
- Chuyển hướng về /
# UserEdit
- Tạo form
- Validate form
- Lấy tham số trên url
- Gọi API lấy dữ liệu theo ID
- Tạo phương thức xử lý
- Gọi API sửa
- Chuyển hướng về /
# UserShow
- Lấy tham số trên url
- Gọi API lấy dữ liệu theo ID
- Hiển thị ra giao diện

