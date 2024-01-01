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
      this.items.push(newItem);
      this.quantity++;
      this.total += newItem.price;
      console.log(this.total);
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
