function openTab(evt, tabId) {
  // sembunyikan semua
  document.querySelectorAll(".tab-content").forEach(c => c.classList.remove("active"));
  document.querySelectorAll(".tab-link").forEach(b => b.classList.remove("active"));

  // tampilkan yang dipilih
  document.getElementById(tabId).classList.add("active");
  evt.currentTarget.classList.add("active");
}

// Jumlah sertifikat awal yang tampil (harus sama dengan CSS nth-child)
let currentCerts = 4; 

function loadMoreCerts() {
  const certs = document.querySelectorAll('.cert-item');
  const maxCerts = certs.length;
  
  // Jumlah sertifikat baru yang akan dimunculkan setiap kali klik
  let nextCerts = currentCerts + 4; 

  // Loop untuk memunculkan display gambar selanjutnya
  for (let i = currentCerts; i < nextCerts && i < maxCerts; i++) {
    certs[i].style.display = 'block';
  }

  currentCerts = nextCerts;

  // Sembunyikan tombol 'Load More' jika semua sertifikat sudah ditampilkan
  if (currentCerts >= maxCerts) {
    document.getElementById('loadMoreBtn').style.display = 'none';
  }
}