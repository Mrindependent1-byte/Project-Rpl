document.addEventListener('DOMContentLoaded', () => {
    const tombol = document.querySelectorAll('.btn-filter');
    const kartu = document.querySelectorAll('.card-berita');

    tombol.forEach(btn => {
        btn.addEventListener('click', function(e) {
            // Kalau tombol adalah link (<a>), biarkan dia pindah halaman
            if (this.tagName === 'A') return; 

            // Kalau tombol filter (<button>), jangan pindah halaman, tapi saring berita
            e.preventDefault();
            const filter = this.innerText.trim().toLowerCase();

            kartu.forEach(item => {
                const tag = item.querySelector('.tag').innerText.trim().toLowerCase();
                if (filter === 'semua' || tag.includes(filter)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});
