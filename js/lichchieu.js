const showtimesData = {
    "2025-05-10": [
        { title: "Thám Tử Kiên", times: ["10:00", "13:30", "17:00", "20:30"] },
        { title: "Lật Mặt 8", times: ["09:45", "12:15", "15:45", "19:15"] }
    ],
    "2025-05-11": [
        { title: "Móng Vuốt", times: ["08:30", "11:00", "14:30", "18:00"] }
    ]
};

const showtimesEl = document.getElementById("showtimes");
const seatSection = document.getElementById("seat-selection");
const seatsEl = document.getElementById("seats");
let selectedShowtime = null;

document.querySelectorAll(".date-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
        document.querySelectorAll(".date-btn").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        loadShowtimes(btn.dataset.date);
    });
});

function loadShowtimes(date) {
    showtimesEl.innerHTML = "";
    seatSection.style.display = "none";

    const shows = showtimesData[date] || [];
    shows.forEach((movie) => {
        const movieDiv = document.createElement("div");
        movieDiv.className = "movie";
        movieDiv.innerHTML = `<h3>${movie.title}</h3>`;

        movie.times.forEach((time) => {
            const btn = document.createElement("button");
            btn.className = "showtime-btn";
            btn.textContent = time;
            btn.addEventListener("click", () => {
                selectedShowtime = { title: movie.title, time };
                showSeatSelection();
            });
            movieDiv.appendChild(btn);
        });

        showtimesEl.appendChild(movieDiv);
    });
}

function showSeatSelection() {
    seatSection.style.display = "block";
    seatsEl.innerHTML = "";

    for (let i = 0; i < 64; i++) {
        const seat = document.createElement("div");
        seat.className = "seat";
        seat.addEventListener("click", () => {
            if (!seat.classList.contains("occupied")) {
                seat.classList.toggle("selected");
            }
        });
        seatsEl.appendChild(seat);
    }
}

document.getElementById("confirm-seat").addEventListener("click", () => {
    const selectedSeats = document.querySelectorAll(".seat.selected");
    alert(
        `Bạn đã đặt ${selectedSeats.length} ghế cho phim "${selectedShowtime.title}" lúc ${selectedShowtime.time}`
    );
});

window.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const tenPhim = params.get('phim');
    const suatChieu = params.get('suat');
    const ngayChieu = params.get('ngay');

    const movieSelect = document.getElementById('movie');
    const showtimeSelect = document.getElementById('showtime');

    // Chọn đúng phim
    if (tenPhim) {
        let found = false;
        for (let i = 0; i < movieSelect.options.length; i++) {
            if (movieSelect.options[i].text === tenPhim) {
                movieSelect.selectedIndex = i;
                found = true;
                break;
            }
        }
        if (!found) {
            const newOption = new Option(tenPhim, tenPhim, true, true);
            movieSelect.add(newOption);
        }
    }

    // Gọi change để cập nhật showtime trước khi gán suất
    if (movieSelect) {
        movieSelect.dispatchEvent(new Event("change"));
    }

    // Gán suất chiếu nếu có
    if (suatChieu) {
        setTimeout(() => {
            for (let i = 0; i < showtimeSelect.options.length; i++) {
                if (showtimeSelect.options[i].value === suatChieu) {
                    showtimeSelect.selectedIndex = i;
                    break;
                }
            }
        }, 100); // Đợi dropdown showtime cập nhật xong
    }
});