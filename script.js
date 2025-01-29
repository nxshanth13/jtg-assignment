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
    price: "₹210",
    discount: "20%",
    rating: 4.5,
    deliveryTime: "30-50 min",
    image: "image/onion.webp",
  },
  {
    name: "Garlic bread",
    price: "₹210",
    discount: "30%",
    rating: 4.7,
    deliveryTime: "50-79 min",
    image: "image/garlicb.webp",
  },
  {
    name: "Korean Paneer Bread",
    price: "₹123",
    discount: "30%",
    rating: 4.6,
    deliveryTime: "40-60 min",
    image: "image/k.jpg",
  },
  {
    name: "Volcano Peppy Paneer",
    price: "₹390",
    discount: "",
    rating: 4.8,
    deliveryTime: "60-90 min",
    image: "image/pp.jpg",
  },
  {
    name: "Volcano Blazing Chicken",
    price: "₹100",
    discount: "25%",
    rating: 4.5,
    deliveryTime: "30-50 min",
    image: "image/vbc.jpg",
  },
  {
    name: "Veg mix delight pizza",
    price: "₹160",
    discount: "20%",
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
    price: "₹140",
    discount: "",
    rating: 4.8,
    deliveryTime: "60-90 min",
    image: "image/corn.jpg",
  },
  {
    name: "Onion",
    price: "₹210",
    discount: "30%",
    rating: 4.5,
    deliveryTime: "30-50 min",
    image: "image/onion.webp",
  },
];

const container = document.getElementById("product-container");

products.forEach((product, index) => {
  const card = document.createElement("div");
  card.classList.add("food-card");

  card.innerHTML = `
      <div class="image-container">
          ${product.discount ? `<div class="discount-tag">${product.discount}</div>` : ""}
          <img src="${product.image}" alt="${product.name}">
      </div>
      
      <div class="food-details">
         <div class="food-header">
            <p>${product.name}</p>
            <p class="price">${product.price}</p>
         </div>
          
         <div class="meta">
              <div class="meta-left">
                  <span class="meta_rating">⭐ ${product.rating}</span>
                  <span class="meta_time">${product.deliveryTime}</span>
              </div>

              <!-- Counter Section (Hidden Initially) -->
              <div class="counter" id="counter-${index}" style="display: none;">
                  <button class="decrement" data-index="${index}">-</button>
                  <span class="quantity" id="quantity-${index}">1</span>
                  <button class="increment" data-index="${index}">+</button>
              </div>

              <button class="add-to-cart" id="add-to-cart-${index}" data-index="${index}">+</button>
         </div>
      </div>
  `;

  container.appendChild(card);
});


// add cart increment option
container.addEventListener("click", (event) => {
  const target = event.target;
  const index = target.getAttribute("data-index");

  if (!index) return;

  const counter = document.getElementById(`counter-${index}`);
  const quantitySpan = document.getElementById(`quantity-${index}`);
  const addToCartBtn = document.getElementById(`add-to-cart-${index}`);

  if (target.classList.contains("add-to-cart")) {
    addToCartBtn.style.display = "none"; 
    counter.style.display = "flex"; 
  } else if (target.classList.contains("increment")) {
    quantitySpan.textContent = parseInt(quantitySpan.textContent);
  } else if (target.classList.contains("decrement")) {
    let currentValue = parseInt(quantitySpan.textContent);
    if (currentValue > 1) {
      quantitySpan.textContent = currentValue - 1;
    } else {
      counter.style.display = "none"; 
      addToCartBtn.style.display = "inline-block"; 
    }
  }
});


// caroseul
container.addEventListener("click", (event) => {
  const target = event.target;
  const index = target.getAttribute("data-index");

  if (!index) return;

  const counter = document.getElementById(`counter-${index}`);
  const quantitySpan = document.getElementById(`quantity-${index}`);
  const addToCartBtn = document.getElementById(`add-to-cart-${index}`);

  if (target.classList.contains("add-to-cart")) {
    addToCartBtn.style.display = "none"; 
    counter.style.display = "flex"; 
  } else if (target.classList.contains("increment")) {
    quantitySpan.textContent = parseInt(quantitySpan.textContent) + 1;
  } else if (target.classList.contains("decrement")) {
    let currentValue = parseInt(quantitySpan.textContent);
    if (currentValue > 1) {
      quantitySpan.textContent = currentValue - 1;
    } else {
      counter.style.display = "none";
      addToCartBtn.style.display = "inline-block"; 
    }
  }
});


// cart popup functionality
const cartIcon = document.getElementById('cart-icon');
const cartModal = document.getElementById('cart-modal');
const closeModal = document.getElementById('close-modal');
const backToMenu = document.getElementById('back-to-menu');

function disableScroll() {
  document.body.style.overflow = 'hidden';
}

function enableScroll() {
  document.body.style.overflow = '';
}

cartIcon.addEventListener('click', () => {
  cartModal.style.display = 'flex';
  disableScroll();
});

closeModal.addEventListener('click', () => {
  cartModal.style.display = 'none';
  enableScroll();
});

backToMenu.addEventListener('click', () => {
  cartModal.style.display = 'none';
  enableScroll();
});


// video section
const videoElement = document.getElementById('videoElement');
const playPauseButton = document.getElementById('playPauseButton');

playPauseButton.addEventListener('click', () => {
  if (videoElement.paused) {
    videoElement.play();
    playPauseButton.textContent = '';
  } else {
    videoElement.pause();
    playPauseButton.textContent = '';
  }
});


// Carousel
const track = document.querySelector('.carousel-track');
const items = Array.from(track.children);
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

const visibleItems = 3;
let middle = 1;

const itemWidth = items[0].getBoundingClientRect().width + 20;
const totalItems = items.length;
let currentIndex = 0;

function updateMiddleHighlight() {
  items.forEach((item, index) => {
    item.classList.remove('active');
    if (index === currentIndex + middle) {
      item.classList.add('active');
    }
  });
}

function updateCarousel() {
  track.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
  track.style.transition = "transform 0.5s ease-in-out";
  prevBtn.disabled = currentIndex === 0;
  nextBtn.disabled = currentIndex >= totalItems - visibleItems;

  updateMiddleHighlight();
}

nextBtn.addEventListener('click', () => {
  if (currentIndex < totalItems - visibleItems) {
    currentIndex++;
    updateCarousel();
  }
});
prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
});

updateCarousel();


document.addEventListener("DOMContentLoaded", function () {
  const requestDishBtn = document.getElementById('requestDishBtn');
  const requestModal = document.getElementById('request-modal');
  const closeX = document.getElementById('close-x');
  const closeModalBtn = document.getElementById('close-modal');

  requestDishBtn.addEventListener('click', () => {
    requestModal.style.display = 'flex';
    document.body.classList.add('no-scroll');
  });

  const closeModal = () => {
    requestModal.style.display = 'none';
    document.body.classList.remove('no-scroll');
  };

  closeX.addEventListener('click', closeModal);
  closeModalBtn.addEventListener('click', closeModal);
});

