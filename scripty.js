window.addEventListener('scroll', function() {
    const checkbox = document.getElementById('check');
  
    if (window.scrollY > 50) {
      checkbox.checked = false;
    }
  });

  // Klik otomatis setiap detik
setInterval(() => {
  document.getElementById("page").click();
}, 1000);

// Aksi saat tombol diklik
document.getElementById("page").addEventListener("click", () => {
  console.log("Tombol #page diklik otomatis.");
  // Tambah aksi di sini
});