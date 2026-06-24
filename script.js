document.addEventListener("DOMContentLoaded", function() {
    // 1. Ambil data dari localStorage
    const dataLaporan = JSON.parse(localStorage.getItem('aspirasi_laporan'));

    // 2. Cek apakah ada tabelnya
    const tabelBody = document.getElementById("tabel-aspirasi"); 

    if (dataLaporan && tabelBody) {
        // 3. Masukkan data ke tabel
        tabelBody.innerHTML = ""; // Kosongkan dulu tabelnya
        dataLaporan.forEach((item, index) => {
            tabelBody.innerHTML += `
                <tr>
                    <td>${index + 1}</td>
                    <td>${item.judul}</td>
                    <td>${item.kategori}</td>
                    <td>${item.tanggal}</td>
                </tr>
            `;
        });
    } else {
        console.log("Data atau Tabel tidak ditemukan!");
    }
});
        btn.addEventListener('click', function() {
            // Ambil teks dari tombol yang diklik, ubah ke huruf kecil
            const filter = this.innerText.toLowerCase();

            // 3. Cek setiap kartu
            kartu.forEach(item => {
                // Ambil kategori dari data-tag kartu tersebut
                const tag = item.getAttribute('data-tag').toLowerCase();

                // 4. Jika tombol "semua" diklik ATAU tag kartu cocok dengan filter, tampilkan
                if (filter === 'semua' || tag === filter) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none'; // Sembunyikan kalau tidak cocok
                }
            });
        });
    });
});
