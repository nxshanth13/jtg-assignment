const products = [
  {
    name: "Veg mix delight pizza",
    price: "₹190",
    discount: "50%",
    rating: 4.7,
    deliveryTime: "50-79 min",
    image: "image/img1.png",
  },
  {
    name: "Paneer Delight Pizza",
    price: "₹123",
    discount: "",
    rating: 4.6,
    deliveryTime: "40-60 min",
    image: "image/img2.jpg",
  },
  {
    name: "Golden Corn",
    price: "₹190",
    discount: "",
    rating: 4.8,
    deliveryTime: "60-90 min",
    image: "image/corn.jpg",
  },
  {
    name: "Onion",
    price: "$19",
    discount: "50%",
    rating: 4.5,
    deliveryTime: "30-50 min",
    image: "image/onion.webp",
  },
  {
    name: "Garlic bread",
    price: "₹190",
    discount: "50%",
    rating: 4.7,
    deliveryTime: "50-79 min",
    image: "image/garlicb.webp",
  },
  {
    name: "Paneer Delight Pizza",
    price: "₹123",
    discount: "",
    rating: 4.6,
    deliveryTime: "40-60 min",
    image: "image/img2.jpg",
  },
  {
    name: "Golden Corn",
    price: "₹190",
    discount: "",
    rating: 4.8,
    deliveryTime: "60-90 min",
    image: "image/corn.jpg",
  },
  {
    name: "Onion",
    price: "$19",
    discount: "50%",
    rating: 4.5,
    deliveryTime: "30-50 min",
    image: "image/onion.webp",
  },
  {
    name: "Veg mix delight pizza",
    price: "₹190",
    discount: "50%",
    rating: 4.7,
    deliveryTime: "50-79 min",
    image: "image/img1.png",
  },
  {
    name: "Paneer Delight Pizza",
    price: "₹123",
    discount: "",
    rating: 4.6,
    deliveryTime: "40-60 min",
    image: "image/img2.jpg",
  },
  {
    name: "Golden Corn",
    price: "₹190",
    discount: "",
    rating: 4.8,
    deliveryTime: "60-90 min",
    image: "image/corn.jpg",
  },
  {
    name: "Onion",
    price: "$19",
    discount: "50%",
    rating: 4.5,
    deliveryTime: "30-50 min",
    image: "image/onion.webp",
  },
];

const container = document.getElementById("product-container");

products.forEach((product) => {
  const card = document.createElement("div");
  card.classList.add("food-card");

  card.innerHTML = `
      ${product.discount
      ? `<div class="discount-tag">${product.discount}</div>`
      : ""
    }
      <img src="${product.image}" alt="${product.name}">
      <div class="food-details">
          <h3>${product.name}</h3>
          <p class="price">${product.price}</p>
          <div class="meta">
              <div>
                  <span class="meta_rating">⭐ ${product.rating}</span>
                  <span class="meta_time">${product.deliveryTime}</span>
              </div>
              <button class="add-to-cart">+</button>
          </div>
      </div>
  `;

  container.appendChild(card);
});



const cartIcon = document.getElementById('cart-icon');
const cartModal = document.getElementById('cart-modal');
const closeModal = document.getElementById('close-modal');
const backToMenu = document.getElementById('back-to-menu');

cartIcon.addEventListener('click', () => {
  cartModal.style.display = 'flex';
});

closeModal.addEventListener('click', () => {
  cartModal.style.display = 'none';
});

backToMenu.addEventListener('click', () => {
  cartModal.style.display = 'none';
});