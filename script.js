function openTab(evt, tabId) {
  // sembunyikan semua
  document.querySelectorAll(".tab-content").forEach(c => c.classList.remove("active"));
  document.querySelectorAll(".tab-link").forEach(b => b.classList.remove("active"));

  // tampilkan yang dipilih
  document.getElementById(tabId).classList.add("active");
  evt.currentTarget.classList.add("active");
}
