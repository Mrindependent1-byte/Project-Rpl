function initDatabaseBerita() {
    const BERITA_KEY = 'aspirasi_berita';
    
    // Cek apakah database berita sudah ada
    if (!localStorage.getItem(BERITA_KEY)) {
        const dataBerita = [
            {
                id: "B-001",
                tipe: "Pengumuman",
                kategori: "Umum",
                judul: "Jadwal Pemeliharaan Sistem Layanan Aspirasi",
                isi: "Diberitahukan kepada seluruh warga, sistem AspirasiKu akan mengalami pemeliharaan rutin pada hari Sabtu pukul 00:00 hingga 04:00 WIB. Laporan yang masuk pada jam tersebut akan diproses setelah sistem kembali normal.",
                tanggal: "2026-06-20",
                penulis: "Admin Sistem"
            },
            {
                id: "B-002",
                tipe: "Berita",
                kategori: "Infrastruktur",
                judul: "Perbaikan Jalan Protokol Jakarta Telah Selesai",
                isi: "Menindaklanjuti laporan warga terkait jalan berlubang di jalan protokol, dinas terkait telah menyelesaikan perbaikan pada malam tadi. Arus lalu lintas kini sudah kembali lancar dan aman untuk dilalui.",
                tanggal: "2026-06-21",
                penulis: "Dinas Bina Marga"
            },
            {
                id: "B-003",
                tipe: "Berita",
                kategori: "Lingkungan",
                judul: "Program Penanaman 1000 Pohon di Taman Kota",
                isi: "Sebagai upaya meningkatkan ruang terbuka hijau, pemerintah kota bekerja sama dengan komunitas lokal akan mengadakan program penanaman 1000 pohon. Warga diundang untuk berpartisipasi pada akhir pekan ini.",
                tanggal: "2026-06-22",
                penulis: "Dinas Lingkungan Hidup"
            },
            {
                id: "B-004",
                tipe: "Pengumuman",
                kategori: "Kesehatan",
                judul: "Vaksinasi Massal Gratis di Balai Warga",
                isi: "Bagi warga yang belum mendapatkan vaksin booster, akan diadakan vaksinasi massal gratis di Balai Warga pada hari Minggu. Harap membawa KTP dan mendaftar melalui aplikasi AspirasiKu.",
                tanggal: "2026-06-23",
                penulis: "Dinas Kesehatan"
            }
        ];
        
        // Simpan ke localStorage
        localStorage.setItem(BERITA_KEY, JSON.stringify(dataBerita));
        console.log("Database berita berhasil diinisialisasi.");
    }
}

// Panggil fungsi ini sebelum merender berita
initDatabaseBerita();