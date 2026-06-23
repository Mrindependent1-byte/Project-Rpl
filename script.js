// Fungsi untuk memfilter berita berdasarkan kategori
const buttons = document.querySelectorAll('.panel-header button, div[style*="display: flex"] button, .container button'); 
// Nyari semua tombol kategori
const cards = document.querySelectorAll('.card-berita');

// Tombol Tutup/Kembali
const btnClose = document.querySelector('.btn-close');
if (btnClose) {
    btnClose.addEventListener('click', function() {
        alert("Kembali ke halaman utama!");
        window.location.href = "halaman.html"; // Akan kembali ke halaman utama Aspirasiku
    });
}

// Logika klik tombol kategori
buttons.forEach(button => {
    button.addEventListener('click', function() {
        const kategori = this.innerText.trim().toLowerCase();
        
        if (kategori === 'x tutup' || kategori === 'tutup') return;

        cards.forEach(card => {
            const tag = card.querySelector('.tag').innerText.trim().toLowerCase();
            if (kategori === 'semua' || tag.includes(kategori)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});
