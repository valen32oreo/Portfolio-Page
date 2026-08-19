function openTab(evt, tabId) {
  // sembunyikan semua
  document.querySelectorAll(".tab-content").forEach(c => c.classList.remove("active"));
  document.querySelectorAll(".tab-link").forEach(b => b.classList.remove("active"));

  // tampilkan yang dipilih
  document.getElementById(tabId).classList.add("active");
  evt.currentTarget.classList.add("active");
}

let currentCerts = window.innerWidth <= 600 ? 4 : 6; 

function loadMoreCerts() {
  const certs = document.querySelectorAll('.cert-item');
  const maxCerts = certs.length;
  
  // Tentukan jumlah tambahan saat tombol diklik (Load 4 untuk mobile, 6 untuk desktop/tablet)
  let loadStep = window.innerWidth <= 600 ? 4 : 6; 
  let nextCerts = currentCerts + loadStep; 

  // Loop untuk memunculkan gambar selanjutnya
  for (let i = currentCerts; i < nextCerts && i < maxCerts; i++) {
    certs[i].style.display = 'block';
  }

  currentCerts = nextCerts;

  // Sembunyikan tombol 'Load More' jika semua sertifikat sudah ditampilkan
  if (currentCerts >= maxCerts) {
    document.getElementById('loadMoreBtn').style.display = 'none';
  }
}