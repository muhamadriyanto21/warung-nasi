document.addEventListener("alpine:init", () => {
  Alpine.data("products", () => ({
    items: [
      { id: 1, name: "Nasi Pecel", img: "pecel.png", price: "IDR 9K" },
      { id: 2, name: "Nasi Ayam", img: "ayam.png", price: "IDR 9K" },
      { id: 3, name: "Sayur Sup", img: "sup.png", price: "IDR 9K" },
      { id: 4, name: "Nasi Lodeh", img: "nasi-pecel.png", price: "IDR 9K" },
      { id: 5, name: "Nasi Penyetan Lele", img: "lele.png", price: "IDR 9K" },
    ],
  }));
});

// konversi ke rupiah
const rupiah = (number) => {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
    }).format(number);
}