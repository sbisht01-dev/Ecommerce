const products = [
  {
    name: "Eternal Essence",
    rating: 4.7,
    image: "assets/1.jpg",
    description:
      "Eternal Essence is an enchanting perfume that captivates your senses with its timeless fragrance. Immerse yourself in a blend of floral and woody notes, creating an aura of sophistication and allure. This fragrance is perfect for those seeking a lasting and memorable experience.",
    price: 69.99,
  },
  {
    name: "Mystic Mirage",
    rating: 4.5,
    image: "assets/2.jpg",
    description:
      "Mystic Mirage unveils a mystical journey of scents, blending oriental and spicy notes. This unique perfume offers an exotic and alluring aroma that lingers throughout the day. Embark on a sensorial adventure with the captivating fragrance of Mystic Mirage.",
    price: 89.99,
  },
  {
    name: "Serene Breeze",
    rating: 4.8,
    image: "assets/3.jpg",
    description:
      "Experience the calm and refreshing aura of Serene Breeze. This perfume is a harmonious blend of citrus and floral notes that evoke a sense of tranquility. The light and airy fragrance of Serene Breeze is perfect for everyday elegance.",
    price: 49.99,
  },
  {
    name: "Opulent Orchid",
    rating: 4.9,
    image: "assets/4.jpg",
    description:
      "Opulent Orchid is a luxurious and sophisticated fragrance that combines the rich floral notes of orchids with warm and sensual undertones. Elevate your presence with the opulence of this exquisite perfume, designed for those who appreciate timeless elegance.",
    price: 129.99,
  },
  {
    name: "Midnight Velvet",
    rating: 4.6,
    image: "assets/5.jpg",
    description:
      "Indulge in the allure of Midnight Velvet, a captivating perfume that unfolds a mysterious blend of dark woods and velvety florals. This fragrance is an embodiment of sophistication and sensuality, making it an ideal choice for evening affairs.",
    price: 79.99,
  },
  {
    name: "Radiant Bloom",
    rating: 4.4,
    image: "assets/6.jpg",
    description:
      "Radiant Bloom is a burst of floral brilliance that celebrates the beauty of blooming flowers. With a fresh and vibrant scent, this perfume is a symbol of joy and positivity. Embrace the radiance with every spritz of Radiant Bloom.",
    price: 59.99,
  },
  {
    name: "Golden Elixir",
    rating: 4.6,
    image: "assets/7.jpg",
    description:
      "Golden Elixir is a luxurious fragrance that envelops you in a golden aura of warmth and sophistication. The scent, a harmonious blend of amber and vanilla, evokes a sense of opulence and timeless elegance. Elevate your presence with the enchanting allure of Golden Elixir.",
    price: 109.99,
  },
  {
    name: "Sapphire Sky",
    rating: 4.7,
    image: "assets/8.jpg",
    description:
      "Sapphire Sky takes you on a journey through the azure heavens with its fresh and invigorating fragrance. Infused with notes of citrus and aquatic elements, this perfume captures the essence of a clear, vibrant sky. Unleash your inner vitality with the breezy charm of Sapphire Sky.",
    price: 79.99,
  },
  {
    name: "Enigmatic Noir",
    rating: 4.8,
    image: "assets/9.jpg",
    description:
      "Dive into the mystery of Enigmatic Noir, a perfume that embodies the essence of a starlit night. Dark and sensual, this fragrance combines spicy notes with woody undertones, creating an enigmatic allure. Let the allure of Enigmatic Noir captivate your senses.",
    price: 89.99,
  },
  {
    name: "Velvet Rose",
    rating: 4.5,
    image: "assets/10.jpg",
    description:
      "Velvet Rose is a timeless classic that captures the essence of a blooming rose garden. With its floral richness and velvety softness, this perfume radiates romance and femininity. Indulge in the elegance of Velvet Rose and embrace the allure of timeless beauty.",
    price: 69.99,
  },
  {
    name: "Whispering Woods",
    rating: 4.6,
    image: "assets/11.jpg",
    description:
      "Whispering Woods invites you into the heart of a serene forest with its earthy and woody fragrance. The blend of cedarwood and vetiver creates a calming and grounding experience, perfect for those who appreciate the tranquility of nature. Immerse yourself in the whispers of Whispering Woods.",
    price: 99.99,
  },
  {
    name: "Celestial Charm",
    rating: 4.9,
    image: "assets/12.jpg",
    description:
      "Celestial Charm is an ethereal fragrance that transports you to the celestial realms. Infused with celestial notes and a touch of sweetness, this perfume is a celestial dance of enchantment. Embrace the charm of the cosmos with Celestial Charm.",
    price: 119.99,
  },
];

// const productGrid = document.getElementById("productGrid");
// products.forEach((item, index) => {
//   // Create a product item element
//   const productItem = document.createElement("div");
//   productItem.classList.add("items");

//   productItem.innerHTML = `
//                 <div id="image">
//                 </div>
//                 <div class="detail">
//                     <p>${item.name}</p>
//                     <div class="description">
//                         <div class="rate">${item.price}$</div>
//                         <div class="rating">${item.rating}</div>
//                     </div>
//                 </div>
//             `;

//   productGrid.appendChild(productItem);
// });

const productGrid = document.getElementById("productGrid");

products.forEach((item, index) => {
  // Create a product item element
  const productItem = document.createElement("div");
  productItem.classList.add("items");

  // Create the #image element
  const imageElement = document.createElement("div");
  imageElement.id = "image";

  // Set the background image dynamically
  imageElement.style.backgroundImage = `url("${item.image}")`;

  // Add the #image element to the product item
  productItem.appendChild(imageElement);

  // Add content to the product item
  productItem.innerHTML += `
    <div class="detail">
      <p>${item.name}</p>
      <div class="description">
        <div class="rate">${item.price}$</div>
        <div class="rating"><img src="assets\star.png" alt="rating">${item.rating}</div>
      </div>
    </div>
  `;

  // Add the product item to the product grid
  productGrid.appendChild(productItem);
});
