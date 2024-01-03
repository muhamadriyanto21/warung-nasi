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
      // cek apakah ada barang yang sama dicart
      const cartItem = this.items.find((item) => item.id === newItem.id);
      // jika belum ada / cart masih kosong
      if (cartItem) {  
      this.items.push({...newItem, quantity: 1, total: newItem.price});
      this.quantity++;
      this.total += newItem.price;
      console.log(this.total);
      }else {
        // jika barang sudah ada, cek apakah barang beda atau sama dengan yang ada di cart
         this.items = this.items.map((item) => {
          // jika barang berbeda
            if(item.id !== newItem.id){
              return item;
            }else {
              // jika barang sudah ada, tambah quantity dan sub totalnya 
              item.quantity++;
              item.total = item.price
            }
         });
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
