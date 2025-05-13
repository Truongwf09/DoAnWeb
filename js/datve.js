const showtimeData = {
    "Dune": ["10:00", "13:30", "17:00", "20:30"], // Thám Tử Kiên
    "Godzilla": ["09:45", "12:15", "15:45", "19:15"], // Lật Mặt 8
    "Kungfu": ["08:30", "11:00", "14:30", "18:00"] // Móng Vuốt
};

const movieSelect = document.getElementById("movie");
const showtimeSelect = document.getElementById("showtime");
const bookingForm = document.getElementById("booking-form");
const downloadBtn = document.getElementById("download-btn");
const invoice = document.getElementById("invoice");

function updateShowtimes() {
    const selectedMovie = movieSelect.value; // Lấy phim được chọn
    const times = showtimeData[selectedMovie] || []; // Lấy suất chiếu từ dữ liệu

    showtimeSelect.innerHTML = ""; // Xóa các tùy chọn cũ

    if (times.length > 0) {
        // Nếu có suất chiếu, thêm các tùy chọn vào danh sách
        times.forEach((time) => {
            const option = document.createElement("option");
            option.textContent = time;
            option.value = time; // Đảm bảo giá trị được gán đúng
            showtimeSelect.appendChild(option);
        });
    } else {
        // Nếu không có suất chiếu, hiển thị thông báo
        const noOption = document.createElement("option");
        noOption.textContent = "Không có suất chiếu";
        noOption.disabled = true;
        noOption.selected = true;
        showtimeSelect.appendChild(noOption);
    }
}

// Cập nhật suất chiếu khi thay đổi phim
movieSelect.addEventListener("change", updateShowtimes);

// Cập nhật suất chiếu khi trang tải xong
document.addEventListener("DOMContentLoaded", updateShowtimes);

bookingForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const cinema = document.getElementById("cinema").value.trim();
    const movie = movieSelect.options[movieSelect.selectedIndex]?.text || "N/A";
    const showtime = showtimeSelect.value || "N/A";
    const quantity = parseInt(document.getElementById("quantity").value) || 0;

    if (!cinema || quantity <= 0) {
        alert("Vui lòng nhập đầy đủ thông tin và số lượng vé hợp lệ.");
        return;
    }

    const total = quantity * 75000;

    // Hiển thị thông tin hóa đơn
    document.getElementById("inv-cinema").textContent = cinema;
    document.getElementById("inv-movie").textContent = movie;
    document.getElementById("inv-showtime").textContent = showtime;
    document.getElementById("inv-quantity").textContent = quantity;
    document.getElementById("inv-total").textContent = total.toLocaleString();

    invoice.style.display = "block";
    downloadBtn.style.display = "inline-block";
});

downloadBtn.addEventListener("click", function () {
    html2canvas(invoice).then((canvas) => {
        const link = document.createElement("a");
        link.download = "hoa-don.png";
        link.href = canvas.toDataURL();
        link.click();
    });
});