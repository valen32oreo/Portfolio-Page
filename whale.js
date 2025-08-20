function showAddToCartPopup(message) {
  const popup = document.getElementById("popupAddCart");
  popup.textContent = message;
  popup.classList.add("show");

  setTimeout(() => {
    popup.classList.remove("show");
  }, 3000); // 3 detik
}
