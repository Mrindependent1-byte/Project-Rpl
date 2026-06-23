document.addEventListener('DOMContentLoaded', () => {
    const tombolKategori = document.querySelectorAll('.btn-filter');
    const semuaKartu = document.querySelectorAll('.card-berita');

    tombolKategori.forEach(btn => {
        btn.addEventListener('click', function(e) {
            // Jika tombol punya link (seperti di header), biarkan berfungsi normal
            if (this.tagName === 'A') return;

            // Jika tombol kategori, jalankan filter
            e.preventDefault();
            const filter = this.innerText.trim().toLowerCase();

            semuaKartu.forEach(kartu => {
                const tag = kartu.querySelector('.tag').innerText.trim().toLowerCase();
                if (filter === 'semua' || tag.includes(filter)) {
                    kartu.style.display = 'block';
                } else {
                    kartu.style.display = 'none';
                }
            });
        });
    });
});
