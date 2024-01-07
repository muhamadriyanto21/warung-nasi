document.addEventListener("alpine:init", () => {
  Alpine.data("products", () => ({
    items: [
      { id: 1, name: "Nasi Pecel", img: "pecel.png", price: "9000" },
      { id: 2, name: "Nasi Ayam", img: "ayam.png", price: "13000" },
      { id: 3, name: "Sayur Sup", img: "sup.png", price: "10000" },
      { id: 4, name: "Nasi Lodeh", img: "nasi-pecel.png", price: "12000" },
      { id: 5, name: "Nasi Penyetan Lele", img: "lele.png", price: "11000" },
    ],
  }));

  Alpine.store("cart", {
    items: [],
    total: 0,
    quantity: 0,
    add(newItem) {
      console.log("oke");
      // cek apakah ada barang yang sama di cart
      const cartItem = this.items.find((item) => item.id === newItem.id);
    
      // jika belum ada / cart masih kosong
      if (!cartItem) {
        this.items.push({ ...newItem, quantity: 1, total: parseFloat(newItem.price) });
      } else {
        // Jika item sudah ada di keranjang, tingkatkan jumlah dan perbarui total
        cartItem.quantity++;
        cartItem.total = parseFloat(cartItem.price) * cartItem.quantity;
      }
    
      // Update total dan quantity
      this.quantity++;
      this.total = this.items.reduce((sum, item) => sum + parseFloat(item.total), 0);
    },   
    remove(id) {
      // Cari index dari produk yang akan dihapus
      const index = this.items.findIndex((item) => item.id === id);

      if (index !== -1) {
        const cartItem = this.items[index];

        if (cartItem.quantity > 1) {
          // Jika quantity lebih dari 1, kurangi quantity dan update total
          cartItem.quantity--;
          cartItem.total -= cartItem.price;
          this.quantity--;
          this.total -= cartItem.price;
        } else {
          // Jika quantity adalah 1, hapus item dari keranjang
          this.quantity--;
          this.total -= cartItem.price;
          this.items.splice(index, 1);
        }
      }
    },
  });
});

// konversi ke rupiah

const rupiah = (number) => {
  // Convert the input to a number
  const parsedNumber = parseFloat(number);

  if (isNaN(parsedNumber)) {
    console.error("Invalid number:", number);
    return "Invalid number";
  }

  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(parsedNumber);
};
