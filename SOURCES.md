**1. Tài liệu**
#### Bootstrap 5.3.3
- URL: https://getbootstrap.com/docs/5.3/
- Tác giả: The Bootstrap Authors
- Sử dụng: Các class giao diện và responsive.
#### jQuery 3.7.1
- URL: https://jquery.com/
- Tác giả: jQuery Team
- Sử dụng: Xử lý sự kiện, DOM và hiệu ứng đóng/mở.
#### Be Vietnam Pro
- URL: https://fonts.google.com/specimen/Be+Vietnam+Pro
- Nền tảng: Google Fonts
- Sử dụng: Font chữ chính.
- 
**2. Mã tham khảo**
#### Bootstrap
- URL: https://getbootstrap.com/docs/5.3/
- Chỉnh sửa: Kết hợp với HTML/CSS tự viết.
- Kiểm thử: Kiểm tra giao diện và responsive.
#### jQuery
- URL: https://api.jquery.com/
- Chỉnh sửa: Áp dụng vào accordion và khối thống kê.
- Kiểm thử: Kiểm tra các thao tác mở/đóng.

**3. Ảnh/Dữ liệu**
#### Dữ liệu học sinh mẫu
- Nguồn: Dữ liệu mẫu do nhóm tự tạo để phục vụ kiểm thử.
- Phần sử dụng:
  - Danh sách học sinh ban đầu trong chức năng quản lý điểm.
#### Ảnh `images/anhutb.jpg`
- Nguồn: Website trường Đại học Tây Bắc
- URL: https://utb.edu.vn/wp-content/uploads/2026/05/overview_utb.jpeg
- Phần sử dụng: Hình nền banner của website.

**4. Công cụ AI**

#### a. AI hỗ trợ trong code css: giao diện toàn trang

| STT | Công cụ | Ngày | Promt chính | Phần tiếp nhận | Phần loại bỏ | Cách kiểm chứng |
|---|---|---|---|---|---|---|
|01| Claude.ai | 10/10/2026 | Gợi ý template chính cho code css thiết kế giao diện hỗ trợ gvcn gồm: trang chủ, kế hoạch, công cụ (bốc thăm hs ngẫu nhiên,...), liên hệ; tôi muốn đặt một số biến như màu nền, viền và các màu chủ đạo như xanh, xanh pastel để tiện sử dụng. | Cách chia file CSS thành các mục có đánh số; hệ biến :root; khung cho navbar, banner, thẻ, bảng, biểu mẫu, chân trang | Thành phần không dùng tới: Khu vực chào mừng. | Đối chiếu từng mục CSS với từng trang HTML |
|02| ChatGPT.com | 10/10/2026 | Gợi ý một số phông chữ đẹp mắt, hiển thị tốt tiếng Việt, phù hợp web giáo dục |	Be Vietnam Pro (nhúng bằng Google Fonts) | Các phông còn lại trong danh sách gợi ý; phông dự phòng chỉ giữ 'Segoe UI', Arial, sans-serif | Check lỗi hiển thị bằng cách gõ trên Google Fonts trên máy tính và điện thoại |
|03| Gemini.google.com | 10/10/2026 | Gợi ý một số mã màu chữ và màu nền trong tone xanh dương pastel, kèm chỗ nên dùng cho từng màu | Bộ màu đang dùng trong code | Các màu còn lại trong danh sách gợi ý: màu lệch tone hoặc quá chói; màu nền tối | Xem độ tương phản chữ và nền bằng công cụ gemini tạo trực tiếp; xem hiển thị màu trên trang web qua StackBlitz |
|04| Claude.ai | 17/10/2026 | (Dán code HTML thẻ <main> trong hoatdong.html) Gợi ý code CSS cho các mục HTML đã cho |	Dòng thời gian dọc (.kh) có đường kẻ bên trái và chấm mốc; mỗi tháng là một thẻ bo góc; nút chọn trạng thái làm bằng radio ẩn kết hợp :has(:checked); chọn “Hoàn thành” thì thẻ và nút đổi sang xanh lá; dùng lại biến màu có sẵn | Code css gạch chữ khi ấn nút hoàn thành | Test code trên StackBlitz |
