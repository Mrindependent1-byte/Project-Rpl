CREATE TABLE berita_pengumuman (
    id INT AUTO_INCREMENT PRIMARY KEY,
    tipe ENUM('Berita', 'Pengumuman') NOT NULL DEFAULT 'Berita',
    kategori VARCHAR(50) NOT NULL,
    judul VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    isi TEXT NOT NULL,
    gambar_cover VARCHAR(255) NULL,
    penulis_id INT NOT NULL,
    status ENUM('Draft', 'Published', 'Archived') DEFAULT 'Published',
    tanggal_publikasi DATE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);