document.addEventListener("DOMContentLoaded", function () {
  // Slider tự động
  let currentSlide = 0;
  const slides = document.querySelectorAll(".slide");

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  setInterval(nextSlide, 5000);
  showSlide(currentSlide);

  // Dữ liệu chi tiết phim
  const movieDetails = {
    "Lật Mặt 8: Tấm Vé Định Mệnh": {
      title: "Lật Mặt 8: Tấm Vé Định Mệnh",
      description: "Thể loại: Hành động, Hài hước\nThời lượng: 120 phút\nKhởi chiếu: 26/04/2024"
    },
    "Thám Tử Kiên": {
      title: "Thám Tử Kiên",
      description: "Thể loại: Hành động, Trinh thám\nThời lượng: 110 phút\nKhởi chiếu: 15/05/2024"
    },
    "Gia Tài Của Ngoại": {
      title: "Gia Tài Của Ngoại",
      description: "Thể loại: Hài hước, Tình cảm\nThời lượng: 115 phút\nKhởi chiếu: 07/06/2024"
    },
    "Những Gã Trai Hư: Chơi Hay Bị Xơi": {
      title: "Những Gã Trai Hư: Chơi Hay Bị Xơi",
      description: "Thể loại: Hành động, Hài hước\nThời lượng: 115 phút\nKhởi chiếu: 07/06/2024"
    },
    "Linh Hồn Vũ Nữ 2: Nghi Thức Hồi Sinh": {
      title: "Linh Hồn Vũ Nữ 2: Nghi Thức Hồi Sinh",
      description: "Thể loại: Kinh dị\nThời lượng: 122 phút\nKhởi chiếu: 07/06/2024"
    },
    "Móng Vuốt": {
      title: "Móng Vuốt",
      description: "Thể loại: Kinh dị\nThời lượng: Chưa công bố\nKhởi chiếu: 07/06/2024"
    }
  };

  // Nút Chi tiết phim
  const detailButtons = document.querySelectorAll(".btn-detail");
  const popup = document.getElementById("popup-detail");
  const popupTitle = document.getElementById("popup-title");
  const popupDescription = document.getElementById("popup-description");

  detailButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
      const movieTitle = this.closest(".movie-item").querySelector("h3").innerText;
      const details = movieDetails[movieTitle];

      if (details) {
        popupTitle.innerText = details.title;
        popupDescription.innerText = details.description;
      } else {
        popupTitle.innerText = "Không có thông tin chi tiết";
        popupDescription.innerText = "Không có thông tin cho phim này.";
      }

      popup.style.display = "flex";
    });
  });

  // Đóng popup khi bấm ra ngoài
  popup.addEventListener("click", function (e) {
    if (e.target === popup) {
      popup.style.display = "none";
    }
  });
});