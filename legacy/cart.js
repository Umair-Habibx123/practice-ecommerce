document.addEventListener("DOMContentLoaded", function() {
    const cartItemsList = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');
    const checkoutButton = document.getElementById('checkout');
   
    // Retrieve cart data from localStorage or initialize an empty array
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Function to display cart items on the cart page
    function displayCartItems() {
        cartItemsList.innerHTML = '';
        cart.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
            cartItemsList.appendChild(li);
        });
        updateCartTotal();
    }

    // Function to update the total price of the cart
    function updateCartTotal() {
        const cartTotal = cart.reduce((total, item) => total + item.price, 0).toFixed(2);
        cartTotalElement.textContent = cartTotal;
    }

    // Display cart items and total on page load
    displayCartItems();

    // Checkout button event listener
    checkoutButton.addEventListener('click', function() {
        // Implement your checkout logic here
        alert('Checkout button clicked!');
        // Clear the cart after checkout
        localStorage.removeItem('cart');
        displayCartItems(); // Update cart display after clearing
    });
});




document.addEventListener('DOMContentLoaded', function() {
    // Get the cart items container
    let cartItemsContainer = document.getElementById('cart');

    // Retrieve products array from local storage
    let productsInCart = JSON.parse(localStorage.getItem('productsInCart')) || [];

    // Loop through each product and create elements
    productsInCart.forEach(function(product) {
        // Create a new div element for the cloned product
        let clonedProductDiv = document.createElement('div');
        clonedProductDiv.classList.add('product');



        // Create img element
        let imgElement = document.createElement('img');
        imgElement.src = product.imgSrc;
        clonedProductDiv.appendChild(imgElement);

        // Create h3 element for title
        let h3Element = document.createElement('h3');
        h3Element.innerText = product.title;
        clonedProductDiv.appendChild(h3Element);

        // Create p element for description
        let pElement = document.createElement('p');
        pElement.innerText = product.description;
        clonedProductDiv.appendChild(pElement);

 // Create a "remove" button
 let removeButton = document.createElement('button');
 removeButton.innerText = 'Remove';
 clonedProductDiv.appendChild(removeButton);
  // Add click event listener to remove button
  removeButton.addEventListener('click', function() {
    removeFromCart(product.id); // Pass product ID for removal
  });

        // Append the cloned product div to the cart items container
        cartItemsContainer.appendChild(clonedProductDiv);
    });
    TotalCalculator()
        });

        function clearLocalStorage() {
            localStorage.clear();
            location.reload();
        }



        function removeFromCart(productId) {
            let productsInCart = JSON.parse(localStorage.getItem('productsInCart')) || [];
            let filteredProducts = productsInCart.filter(product => product.id !== productId);
            localStorage.setItem('productsInCart', JSON.stringify(filteredProducts));
          
            // Optional: Update cart display by removing the corresponding element
            let productDivToRemove = document.querySelector(`.product[data-product-id="${productId}"]`); // Assuming you add a data attribute for product ID
            if (productDivToRemove) {
              productDivToRemove.parentNode.removeChild(productDivToRemove);
             
            }
            location.reload();
          }


          function TotalCalculator() {
            const pTags = document.querySelectorAll('.product p');
            const pContents = [];
        
            pTags.forEach(pTag => {
                const priceText = pTag.innerText.replace('$', ''); // remove '$' sign
                const intValue = parseFloat(priceText); // convert to number
                pContents.push(intValue);
            });
        
            const total = pContents.reduce((a, b) => a + b, 0);
            document.getElementById("cart-total").innerHTML = total.toFixed(2); // display total with 2 decimal places
        }
        function checkout() {
            var messageBoxContainer = document.getElementById("clonnerContainer");
            messageBoxContainer.style.display = "block"; // Make the container visible
        }
        function hideMessageBox() {
            var messageBoxContainer = document.getElementById("clonnerContainer");
            messageBoxContainer.style.display = "none";
        }

document.getElementById("checkoutForm").addEventListener("submit", function(event) {
    event.preventDefault();
    // You can handle form submission here, such as validating the data or sending it to a server.
    // Example: 
    var formData = new FormData(this);
    for (var pair of formData.entries()) {
        console.log(pair[0] + ': ' + pair[1]);
    }

});