//corousel slider
let slideIndex = 0;

function showSlides() {
    const slides = document.querySelectorAll('.carousel-images img');
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.transform = `translateX(-${slideIndex * 100}%)`;
    }
}

function prevSlide() {
    slideIndex--;
    showSlides();
}

function nextSlide() {
    slideIndex++;
    showSlides();
}
function togglePause() {
    if (timer) {
        clearInterval(timer); // Pause autoplay
        timer = null;
        document.querySelector('.pause').textContent = 'Resume';
    } else {
        autoPlay(); // Resume autoplay
        document.querySelector('.pause').textContent = 'Pause';
    }
}

// Automatically advance slides every 3 seconds
setInterval(nextSlide, 2000);

//product slider

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


// Function to hide the message box
function hideMessageBox() {
    var messageBoxContainer = document.getElementById("messageBoxContainer");
            messageBoxContainer.style.display = "none";
}
