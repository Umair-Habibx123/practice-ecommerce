// Single source of truth for the catalogue.
// In the legacy version this list was duplicated and product names
// collided (three "Product 7"s). Here every product has a stable id.

const IMG = "./assets/img/";

export const categories = [
  { id: "food", label: "Food", image: IMG + "foodCategory.png" },
  { id: "clothing", label: "Clothing", image: IMG + "clothingCategory.jpg" },
  { id: "electronics", label: "Electronics", image: IMG + "ROW-19392_Fallback_Electronics_770x270.png" },
];

export const products = [
  // ---- Food ----
  { id: "food-apple", name: "Fresh Apple", price: 1.99, category: "food", image: IMG + "Apple.jpg" },
  { id: "food-banana", name: "Banana Bunch", price: 2.49, category: "food", image: IMG + "Banana.jpg" },
  { id: "food-carrot", name: "Carrots", price: 1.49, category: "food", image: IMG + "Carrot.jpg" },
  { id: "food-garlic", name: "Garlic", price: 0.99, category: "food", image: IMG + "garlic.jpg" },
  { id: "food-melon", name: "Sweet Melon", price: 4.99, category: "food", image: IMG + "kharboza.jpg" },
  { id: "food-lemon", name: "Lemons", price: 2.29, category: "food", image: IMG + "Lemon.jpg" },
  { id: "food-onion", name: "Onions", price: 1.19, category: "food", image: IMG + "Onion.jpg" },
  { id: "food-potato", name: "Potatoes", price: 1.79, category: "food", image: IMG + "potato.jpg" },
  { id: "food-watermelon", name: "Watermelon", price: 5.99, category: "food", image: IMG + "Tarbooz.jpg" },
  { id: "food-tomato", name: "Tomatoes", price: 2.09, category: "food", image: IMG + "Tomato.jpg" },

  // ---- Clothing ----
  { id: "cloth-tee", name: "Cotton T-Shirt", price: 19.99, category: "clothing", image: IMG + "if275_1_thumb.jpg" },
  { id: "cloth-jacket", name: "Denim Jacket", price: 49.99, category: "clothing", image: IMG + "clothes1-Photoroom.png-Photoroom.png" },
  { id: "cloth-hoodie", name: "Pullover Hoodie", price: 39.99, category: "clothing", image: IMG + "clothes2-Photoroom.png-Photoroom.png" },
  { id: "cloth-shirt", name: "Casual Shirt", price: 29.99, category: "clothing", image: IMG + "clothes3-Photoroom.png-Photoroom.png" },
  { id: "cloth-shoes", name: "Sneakers", price: 24.99, category: "clothing", image: IMG + "lt4980_1_thumb.jpg" },
  { id: "cloth-boots", name: "Leather Boots", price: 59.99, category: "clothing", image: IMG + "nb31418_1_thumb.jpg" },
  { id: "cloth-bag", name: "Tote Bag", price: 14.99, category: "clothing", image: IMG + "bs30126_1_thumb.jpg" },
  { id: "cloth-cap", name: "Baseball Cap", price: 9.99, category: "clothing", image: IMG + "OIP.jpg" },

  // ---- Electronics ----
  { id: "elec-earbuds", name: "Wireless Earbuds", price: 19.99, category: "electronics", image: IMG + "H554711c447db4c3a939c0bdc58330b0fj.jpg_480x480.jpg_.webp" },
  { id: "elec-speaker", name: "Bluetooth Speaker", price: 29.99, category: "electronics", image: IMG + "Sacce9154443d4ebab9ca01d6e9dafa545.jpg_480x480.jpg_.webp" },
  { id: "elec-mouse", name: "Wireless Mouse", price: 9.99, category: "electronics", image: IMG + "S3563f812160240b58b0d7c27e8ce647aS.jpg_480x480.jpg_.webp" },
  { id: "elec-keyboard", name: "Mechanical Keyboard", price: 49.99, category: "electronics", image: IMG + "S973e9345f0254834b17f8e0511f53d8ez.jpg_480x480.jpg_.webp" },
  { id: "elec-charger", name: "Fast Charger", price: 15.99, category: "electronics", image: IMG + "OIP (3).jpg" },
  { id: "elec-cable", name: "USB-C Cable", price: 7.99, category: "electronics", image: IMG + "OIP (4).jpg" },
  { id: "elec-watch", name: "Smart Watch", price: 39.99, category: "electronics", image: IMG + "R.png" },
  { id: "elec-headphones", name: "Over-Ear Headphones", price: 24.99, category: "electronics", image: IMG + "R (1).jpg" },
];

export const productById = id => products.find(p => p.id === id);
