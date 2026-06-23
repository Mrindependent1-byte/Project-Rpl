// 1. Ambil semua tombol dan semua kartu berita di halaman
const semuaTombol = document.querySelectorAll('button');
const semuaKartu = document.querySelectorAll('.card-berita');

// 2. Pasang fungsi klik ke setiap tombol yang ada
semuaTombol.forEach(tombol => {
    tombol.addEventListener('click', function() {
        const namaTombol = this.innerText.trim().toLowerCase();

        // JIKA YANG DIKLIK ADALAH TOMBOL TUTUP
        if (namaTombol.includes('tutup')) {
            alert("Kembali ke halaman utama!");
            window.location.href = "halaman.html";
            return;
        }

        // JIKA YANG DIKLIK ADALAH TOMBOL KATEGORI BERITA
        semuaKartu.forEach(kartu => {
            const elemenTag = kartu.querySelector('.tag');
            if (!elemenTag) return; // Lewati jika kartu tidak punya tag

            const namaTag = elemenTag.innerText.trim().toLowerCase();

            // Kalau klik 'semua', tampilkan semua. Kalau cocok sama tag, tampilkan juga.
            if (namaTombol === 'semua' || namaTag.includes(namaTombol)) {
                kartu.style.display = 'block';
            } else {
                kartu.style.display = 'none';
            }
        });
    });
});
