document.addEventListener('DOMContentLoaded', function() {
    const btnDangChieu = document.getElementById('btn-dangchieu');
    const btnSapChieu = document.getElementById('btn-sapchieu');
    const dangChieuSection = document.getElementById('dangchieu');
    const sapChieuSection = document.getElementById('sapchieu');
    const popupDetail = document.getElementById('popup-detail');
    const popupTitle = document.getElementById('popup-title');
    const popupDescription = document.getElementById('popup-description');
  
    // Ẩn popup khi click ra ngoài
    window.addEventListener('click', function(event) {
      if (event.target === popupDetail) {
        popupDetail.style.display = 'none';
      }
    });
  
    // Hàm hiển thị chi tiết phim
    function showMovieDetails(movieTitle, descriptionText) {
      popupTitle.textContent = `Chi tiết phim: ${movieTitle}`;
      popupDescription.textContent = descriptionText;
      popupDetail.style.display = 'block';
    }
  
    // Dữ liệu chi tiết phim (ví dụ)
    const movieDetails = {
      'Lật Mặt 8: Tấm Vé Định Mệnh': 'Phim hành động, hài hước, kịch tính của Việt Nam, đạo diễn Lý Hải.',
      'Thám Tử Kiên': 'Phim trinh thám, hành động hấp dẫn.',
      'Gia Tài Của Ngoại': 'Phim tâm lý, tình cảm gia đình cảm động.',
      'Những Gã Trai Hư: Chơi Hay Bị Xơi': 'Phim hành động, hài hước của Hollywood.',
      'Linh Hồn Vũ Nữ 2: Nghi Thức Hồi Sinh': 'Phim kinh dị, rùng rợn.',
      'Móng Vuốt': 'Phim hành động, phiêu lưu.',
      'Harry Potter Và Đứa Trẻ Bị Nguyền': 'Phần tiếp theo của loạt phim Harry Potter.',
      'Avengers: Secret Wars': 'Bom tấn siêu anh hùng của Marvel.',
      'Inside Out 2': 'Phim hoạt hình của Pixar.',
    };
  
    // Lắng nghe sự kiện click trên toàn bộ trang main
    document.querySelector('main').addEventListener('click', function(event) {
      const target = event.target;
  
      // Kiểm tra nếu nút "Chi tiết" được bấm
      if (target.classList.contains('btn-detail')) {
        const movieItem = target.closest('.movie-item');
        if (movieItem) {
          const movieTitle = movieItem.querySelector('h3').textContent;
          showMovieDetails(movieTitle, movieDetails[movieTitle] || 'Thông tin chi tiết phim đang được cập nhật.');
        }
      }
    });
  
    // Xử lý khi click vào nút "Phim Đang Chiếu"
    btnDangChieu.addEventListener('click', function() {
      btnDangChieu.classList.add('active');
      btnSapChieu.classList.remove('active');
      dangChieuSection.style.display = 'block';
      sapChieuSection.style.display = 'none';
    });
  
    // Xử lý khi click vào nút "Phim Sắp Chiếu"
    btnSapChieu.addEventListener('click', function() {
      btnSapChieu.classList.add('active');
      btnDangChieu.classList.remove('active');
      sapChieuSection.style.display = 'block';
      dangChieuSection.style.display = 'none';
    });
  });