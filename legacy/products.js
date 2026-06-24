document.addEventListener("DOMContentLoaded", function() {
    const productsContainer = document.getElementById('products');
    const categories = document.querySelectorAll('.dropdown-content a');

    const products = [
        { name: 'Product 1', price: 19.99, category: 'clothing', image: 'if275_1_thumb.jpg' },
        { name: 'Product 2', price: 29.99, category: 'clothing', image:'clothes3-Photoroom.png-Photoroom.png' },
        { name: 'Product 3', price: 9.99, category: 'clothing', image: 'OIP.jpg' },
        { name: 'Product 4', price: 15.99, category: 'clothing', image: 'OIP (1).jpg' },
        { name: 'Product 5', price: 4.99, category: 'clothing', image: 'OIP (2).jpg' },
        { name: 'Product 6', price: 7.99, category: 'clothing', image: 'clothes2-Photoroom.png-Photoroom.png' },
        { name: 'Product 7', price: 39.99, category: 'clothing', image: 'nb31418_1_thumb.jpg' },
        { name: 'Product 8', price: 49.99, category: 'clothing', image: 'clothes1-Photoroom.png-Photoroom.png' },
        { name: 'Product 9', price: 14.99, category: 'clothing', image:  'bs30126_1_thumb.jpg' },
        { name: 'Product 10', price: 24.99, category: 'clothing', image: 'lt4980_1_thumb.jpg' },


        { name: 'Product 1', price: 19.99, category: 'electronics', image: 'H554711c447db4c3a939c0bdc58330b0fj.jpg_480x480.jpg_.webp' },
        { name: 'Product 2', price: 29.99, category: 'electronics', image:'Sacce9154443d4ebab9ca01d6e9dafa545.jpg_480x480.jpg_.webp' },
        { name: 'Product 3', price: 9.99, category: 'electronics', image: 'S3563f812160240b58b0d7c27e8ce647aS.jpg_480x480.jpg_.webp' },
        { name: 'Product 4', price: 15.99, category: 'electronics', image: 'S973e9345f0254834b17f8e0511f53d8ez.jpg_480x480.jpg_.webp' },
        { name: 'Product 5', price: 4.99, category: 'electronics', image: 'OIP (3).jpg' },
        { name: 'Product 6', price: 7.99, category: 'electronics', image: 'OIP (4).jpg' },
        { name: 'Product 7', price: 39.99, category: 'electronics', image: 'R.png' },
        { name: 'Product 8', price: 49.99, category: 'electronics', image: 'R (1).png' },
        { name: 'Product 9', price: 14.99, category: 'electronics', image:  'R.jpg' },
        { name: 'Product 10', price: 24.99, category: 'electronics', image: 'R (1).jpg' },


        { name: 'Product 1', price: 19.99, category: 'food', image: 'Apple.jpg' },
        { name: 'Product 2', price: 29.99, category: 'food', image: 'Banana.jpg'},
        { name: 'Product 3', price: 9.99, category: 'food', image: 'Carrot.jpg' },
        { name: 'Product 4', price: 15.99, category: 'food', image: 'garlic.jpg' },
        { name: 'Product 5', price: 4.99, category: 'food', image: 'kharboza.jpg' },
        { name: 'Product 6', price: 7.99, category: 'food', image: 'Lemon.jpg' },
        { name: 'Product 7', price: 39.99, category: 'food', image: 'Onion.jpg' },
        { name: 'Product 8', price: 49.99, category: 'food', image: 'potato.jpg' },
        { name: 'Product 9', price: 14.99, category: 'food', image:  'Tarbooz.jpg' },
        { name: 'Product 10', price: 24.99, category: 'food', image: 'Tomato.jpg' },
    ];

    function displayProducts(category = 'all' ) {
        let filteredProducts = category === 'all' ? products : products.filter(product => product.category === category);

        productsContainer.innerHTML = '';
        filteredProducts.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('product');
            productDiv.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p class="price">$${product.price.toFixed(2)}</p>
                <button onclick="addToCart(this.parentElement)">Add to Cart</button>
            `;
            productsContainer.appendChild(productDiv);
        });
    }

   

    categories.forEach(category => {
        category.addEventListener('click', function(e) {
            e.preventDefault();
            const selectedCategory = category.getAttribute('data-category');
            displayProducts(selectedCategory);
        });
    });
 

    displayProducts(); // Display all products initially
});


function addToCart(productDiv) {
    // Get the img, h3, and p elements from the product div
    let imgElement = productDiv.querySelector('img');
    let h3Element = productDiv.querySelector('h3');
    let pElement = productDiv.querySelector('p');

    let imgSrc = imgElement.src;
    let title = h3Element.innerText;
    let description = pElement.innerText;

    // Create a product object
    let product = {
        id: Math.random().toString(36).slice(2, 15),
        imgSrc: imgSrc,
        title: title,
        description: description
    };

    // Get existing products from local storage (or initialize an empty array)
    let productsInCart = JSON.parse(localStorage.getItem('productsInCart')) || [];
    // Add the new product to the existing products array
    productsInCart.push(product);
    // Store the updated products array in local storage
    localStorage.setItem('productsInCart', JSON.stringify(productsInCart));

    // Show the message box
    var messageBoxContainer = document.getElementById("messageBoxContainer");
    messageBoxContainer.style.display = "block";
}

// Function to hide the message box
function hideMessageBox() {
    var messageBoxContainer = document.getElementById("messageBoxContainer");
    messageBoxContainer.style.display = "none";
}