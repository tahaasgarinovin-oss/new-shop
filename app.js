const data = [
  {
    name: "iPhone 15 Pro",
    price: "85,000,000",
    img: "https://via.placeholder.com/300x200"
  },
  {
    name: "Samsung S24",
    price: "70,000,000",
    img: "https://via.placeholder.com/300x200"
  },
  {
    name: "MacBook M2",
    price: "120,000,000",
    img: "https://via.placeholder.com/300x200"
  },
  {
    name: "Gaming Headset",
    price: "3,500,000",
    img: "https://via.placeholder.com/300x200"
  }
];

function renderProducts() {
  const container = document.getElementById("products");

  container.innerHTML = data.map(p => `
    <div class="card">
      <img src="${p.img}">
      <div class="title">${p.name}</div>
      <div class="price">${p.price} تومان</div>
    </div>
  `).join("");
}

renderProducts();