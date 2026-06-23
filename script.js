document.addEventListener('DOMContentLoaded', () => {
    // 1. Ambil semua tombol filter dan kartu berita
    const tombol = document.querySelectorAll('.btn-filter');
    const kartu = document.querySelectorAll('.card-berita');

    // 2. Pasang perintah "klik" untuk setiap tombol
    tombol.forEach(btn => {
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
