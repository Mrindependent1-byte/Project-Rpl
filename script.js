function prosesLogin() {
    // Dua baris ini wajib ada agar program bisa membaca apa yang diketik user
    var userInput = document.getElementById("username").value;
    var passInput = document.getElementById("password").value;

    // Logika pencocokan akun Anda
    if (userInput === "admin" && passInput === "admin123") {
        alert("Login Sukses sebagai Admin!");
        window.location.href = "admin.html";
    } 
    else if (userInput === "petugas1" && passInput === "petugas123") {
        alert("Login Sukses sebagai Petugas!");
        window.location.href = "petugas.html";
    } 
    else if (userInput === "user a" && passInput === "a") {
        alert("Login Sukses sebagai User!");
        window.location.href = "halaman.html";
    } 
    else {
        alert("Username atau Password Salah!");
    }
}