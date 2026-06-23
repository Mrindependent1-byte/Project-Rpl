document.addEventListener('DOMContentLoaded', () => {
    const tombol = document.querySelectorAll('.btn-filter');
    const kartu = document.querySelectorAll('.card-berita');

    tombol.forEach(btn => {
        btn.addEventListener('click', function() {
            const filter = this.innerText.toLowerCase();
            kartu.forEach(item => {
                const tag = item.querySelector('.tag').innerText.toLowerCase();
                if (filter === 'semua' || tag === filter) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});
