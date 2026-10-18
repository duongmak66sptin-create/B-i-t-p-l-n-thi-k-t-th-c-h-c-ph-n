## Liên kết dự án
* **Website chạy trực tiếp (GitHub Pages): duongmak66sptin-create.github.io/ICT0023-K66-Nhom08-HoTroGVCN/
* **Video thuyết trình & Demo (YouTube):
* **Báo cáo phân công cá nhân:Khai báo trong phần CONTRIBUTIONS.md
* **Kê khai nguồn & Liêm chính học thuật:Khai báo trong phần SOURCES.md
1. Ý tưởng cốt lõi của Website
- Tên đề tài / Sản phẩm: Sổ tay điện tử và Công cụ hỗ trợ Giáo viên chủ nhiệm (GVCN).
- Mục tiêu thực tế: Giải quyết các bài toán "đau đầu" của giáo viên chủ nhiệm thời công nghệ số: Quản lý sĩ số, theo dõi điểm số, tính toán học lực tự động, bốc thăm gọi học sinh kiểm tra bài cũ một cách khách quan, và lưu trữ các biểu mẫu hành chính, xử lý tình huống sư phạm.
- Đối tượng sử dụng: Giáo viên chủ nhiệm các trường phổ thông (THCS, THPT).
2. Điểm sáng qua các đoạn code đã xây dựng
- Trang chủ (index.html): Giao diện chào mừng trang trọng với banner nền tối kết hợp chữ nổi bật, định hướng rõ ràng 3 mục lớn (Kế hoạch, Công cụ, Hỏi đáp).
- Kế hoạch lớp (hoatdong.html): Số hóa kế hoạch công tác chủ nhiệm theo từng tuần/tháng, giúp giáo viên phân chia tiến độ công việc rõ ràng (Tuần 1 ổn định nền nếp, Tuần 2 phát động hoa điểm 10, Tuần 3 sinh hoạt kỹ năng...).
- Công cụ GVCN (congcu.html - Trang tâm đắc nhất):
+ Có thuật toán bốc thăm ngẫu nhiên (tránh tình trạng học sinh kêu giáo viên thiên vị gọi tủ).
+ Tự động thống kê nhanh (Sĩ số, Điểm TB, Max, Min).
+ Form thêm học sinh và hệ thống lọc học lực (Giỏi, Khá, Trung bình) tương tác trực tiếp cực kỳ mượt mà.
- Hỏi đáp & Biểu mẫu (bieumau.html):
+ Tổng hợp các tình huống sư phạm khó (học sinh đi học muộn, tổ chức sinh hoạt lớp không khô khan, chuẩn bị họp phụ huynh đầu năm).
+ Kho biểu mẫu tải về (Word, Excel, PDF) chuẩn hóa theo năm học.
- Liên hệ & Góp ý (lienhe.html): Kênh tương tác để các giáo viên khác cùng đóng góp ý kiến nghiệp vụ.


3. Điểm mạnh và giá trị thực tiễn của đề tài.
- Tính ứng dụng cao: Nhấn mạnh rằng website này không chỉ là bài tập code HTML/CSS/JS đơn thuần, mà giải quyết một nhu cầu nghiệp vụ sư phạm thực tế của một giáo viên chủ nhiệm ngoài đời thực.
- Giao diện Responsive (Bootstrap 5): Thầy cô sẽ rất thích việc trang web co giãn mượt mà trên cả máy tính bảng và điện thoại di động (giáo viên có thể cầm điện thoại điểm danh hoặc gọi tên ngẫu nhiên ngay trên lớp học).
- Hướng phát triển tương lai (Scale-up):
+ Có thể đề xuất tích hợp LocalStorage hoặc Database (Firebase/MySQL) ở các phiên bản sau để dữ liệu học sinh nhập vào không bị mất đi khi người dùng ấn tải lại trang (F5).
+ Thêm tính năng xuất file Excel trực tiếp từ bảng quản lý điểm số.
## Các mốc phiên bản trên Git.
Dự án được lưu lại đầy đủ qua 5 mốc theo yêu cầu:
* v0.1-y-tuong: Chốt đề tài, phác thảo wireframe và tạo khung thư mục dự án.
* v0.2-html: Dựng khung 5 trang HTML tĩnh với menu và footer dùng chung.
* v0.3-giao-dien: Viết CSS ngoài.
* v0.4-tuong-tac: Hoàn thành toàn bộ xử lý JavaScript.
* v1.0-final: Bản nghiệm thu chính thức gồm đầy đủ mã nguồn.
