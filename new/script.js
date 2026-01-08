// --- 1. PRODUCT DATA ---
const products = [
    { id: 1, name: "Floral Summer Dress", price: 1499, category: "dresses", image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400" },
    { id: 7, name: "Elegant Evening Gown", price: 3499, category: "dresses", image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=400" },
    { id: 9, name: "Boho Maxi Dress", price: 1899, category: "dresses", image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400" },
    { id: 4, name: "Silk Blouse", price: 1299, category: "tops", image: "https://images.unsplash.com/photo-1589810635657-232948472d98?w=400" },
    { id: 8, name: "Casual Crop Top", price: 699, category: "tops", image: "https://images.unsplash.com/photo-1503342394128-c104d54dba01?w=400" },
    { id: 10, name: "Striped Cotton Shirt", price: 999, category: "tops", image: "https://images.unsplash.com/photo-1551163943-3f6a29e39bb7?w=400" },
    { id: 11, name: "Graphic Tee", price: 599, category: "tops", image: "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?w=400" },
    { id: 3, name: "High-Waist Jeans", price: 1599, category: "bottoms", image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400" },
    { id: 12, name: "Pleated Midi Skirt", price: 1199, category: "bottoms", image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=400" },
    { id: 2, name: "Classic Denim Jacket", price: 1999, category: "outerwear", image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=400" },
    { id: 5, name: "Beige Trench Coat", price: 4500, category: "outerwear", image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400" },
    { id: 6, name: "White Sneakers", price: 2199, category: "shoes", image: "https://images.unsplash.com/photo-1560769629-975e13f51863?w=400" },
    { id: 13, name: "Leather Ankle Boots", price: 2899, category: "shoes", image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400" },
    { id: 14, name: "Canvas Tote Bag", price: 499, category: "accessories", image: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=400" },
    { id: 15, name: "Gold Layered Necklace", price: 399, category: "accessories", image: "https://images.unsplash.com/photo-1599643478518-17488fbbcd75?w=400" }
];

// --- 2. CART LOGIC ---
let cart = JSON.parse(localStorage.getItem('loopCart')) || [];

function saveCart() {
    localStorage.setItem('loopCart', JSON.stringify(cart));
}

function addToCart(id) {
    const product = products.find(p => p.id === id);
    cart.push(product);
    saveCart();
    updateCartUI();
    toggleCart(); 
}

function removeFromCart(index) {
    cart.splice(index, 1);
    saveCart();
    updateCartUI();
    // If we are on checkout page, refresh the summary immediately
    if (window.location.pathname.includes('checkout.html')) {
        loadCheckoutSummary();
    }
}

function updateCartUI() {
    const cartCount = document.getElementById('cart-count');
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');

    if (!cartCount || !cartItemsContainer || !cartTotal) return;

    cartCount.innerText = cart.length;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
        cartTotal.innerText = '0.00';
    } else {
        cartItemsContainer.innerHTML = cart.map((item, index) => `
            <div class="cart-item">
                <div>
                    <strong>${item.name}</strong><br>
                    Rs. ${item.price.toFixed(2)}
                </div>
                <button onclick="removeFromCart(${index})" style="color:red;border:none;background:none;cursor:pointer;">&times;</button>
            </div>
        `).join('');
        
        const total = cart.reduce((sum, item) => sum + item.price, 0);
        cartTotal.innerText = total.toFixed(2);
    }
}

function toggleCart() {
    document.getElementById('cart-sidebar').classList.toggle('active');
    document.getElementById('overlay').classList.toggle('active');
}

// --- 3. PAGE LOGIC ---

document.addEventListener('DOMContentLoaded', () => {
    updateCartUI(); // Load global cart

    // --- CHECKOUT PAGE SPECIFIC LOGIC ---
    if (window.location.pathname.includes('checkout.html')) {
        loadCheckoutSummary();
    }

    // --- HOME PAGE LOGIC ---
    const featuredContainer = document.getElementById('featured-products');
    const newArrivalsContainer = document.getElementById('new-arrivals');
    
    if (featuredContainer) {
        featuredContainer.innerHTML = products.slice(0, 4).map(renderProduct).join('');
    }
    if (newArrivalsContainer) {
        newArrivalsContainer.innerHTML = products.slice(-4).map(renderProduct).join('');
    }

    // --- SHOP PAGE LOGIC ---
    const shopContainer = document.getElementById('shop-products');
    if (shopContainer) {
        displayShopProducts('all');
    }
});

// Helper for Home/Shop
function renderProduct(product) {
    return `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}">
            <div class="product-info">
                <h4>${product.name}</h4>
                <p>Rs. ${product.price.toFixed(2)}</p>
                <button class="btn" onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        </div>
    `;
}

// Helper for Shop Filter
function displayShopProducts(category) {
    const shopContainer = document.getElementById('shop-products');
    let filteredProducts = products;
    if (category !== 'all') {
        filteredProducts = products.filter(p => p.category === category);
    }
    shopContainer.innerHTML = filteredProducts.map(renderProduct).join('');
}

// --- CHECKOUT FUNCTIONS ---
function loadCheckoutSummary() {
    const checkoutItems = document.getElementById('checkout-items');
    const checkoutSubtotal = document.getElementById('checkout-subtotal');
    const checkoutTotal = document.getElementById('checkout-total');

    if (!checkoutItems) return;

    if (cart.length === 0) {
        checkoutItems.innerHTML = '<p>Your cart is empty.</p>';
        checkoutSubtotal.innerText = "0.00";
        checkoutTotal.innerText = "0.00";
        return;
    }

    checkoutItems.innerHTML = cart.map(item => `
        <div class="checkout-item">
            <span>${item.name}</span>
            <span>Rs. ${item.price.toFixed(2)}</span>
        </div>
    `).join('');

    const total = cart.reduce((sum, item) => sum + item.price, 0);
    checkoutSubtotal.innerText = total.toFixed(2);
    checkoutTotal.innerText = total.toFixed(2);
}

// --- UPDATED CHECKOUT FUNCTION WITH SIMULATION ---
function placeOrder(event) {
    event.preventDefault(); // Stop form from reloading

    if (cart.length === 0) {
        alert("Your cart is empty! Add some items before checking out.");
        return;
    }

    // 1. Get Elements
    const modal = document.getElementById('order-modal');
    const statusText = document.getElementById('order-status');
    const messageText = document.getElementById('order-message');
    const spinner = document.getElementById('spinner');
    const successIcon = document.getElementById('success-icon');

    // 2. Show Modal
    modal.classList.add('active');

    // 3. Simulation Timeline
    
    // Phase 1: Processing Payment (0s - 1.5s)
    setTimeout(() => {
        statusText.innerText = "Verifying Details...";
        messageText.innerText = "Checking inventory and shipping address.";
    }, 1500);

    // Phase 2: Finalizing (1.5s - 3s)
    setTimeout(() => {
        // Hide Spinner, Show Checkmark
        spinner.style.display = 'none';
        successIcon.style.display = 'block';
        
        statusText.innerText = "Order Placed!";
        messageText.innerText = "Redirecting you to the home page...";
    }, 3000);

    // Phase 3: Redirect (4.5s)
    setTimeout(() => {
        cart = []; // Clear Cart
        saveCart();
        window.location.href = 'index.html'; // Go to Home
    }, 4500);
}