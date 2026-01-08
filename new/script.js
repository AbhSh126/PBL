// --- 1. PRODUCT DATA (35 Items) ---
const products = [
    // --- DRESSES ---
    { id: 1, name: "Floral Summer Dress", price: 1499, category: "dresses", image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400" },
    { id: 2, name: "Elegant Evening Gown", price: 3499, category: "dresses", image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=400" },
    { id: 3, name: "Boho Maxi Dress", price: 1899, category: "dresses", image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400" },
    { id: 4, name: "Red Bodycon Dress", price: 2100, category: "dresses", image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400" },
    { id: 5, name: "Polka Dot Midi", price: 1250, category: "dresses", image: "https://images.unsplash.com/photo-1612336307429-8a898d10e223?w=400" },
    { id: 6, name: "White Lace Sundress", price: 1699, category: "dresses", image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400" },

    // --- TOPS ---
    { id: 7, name: "Silk Blouse", price: 1299, category: "tops", image: "https://images.unsplash.com/photo-1589810635657-232948472d98?w=400" },
    { id: 8, name: "Casual Crop Top", price: 699, category: "tops", image: "https://images.unsplash.com/photo-1503342394128-c104d54dba01?w=400" },
    { id: 9, name: "Striped Cotton Shirt", price: 999, category: "tops", image: "https://images.unsplash.com/photo-1551163943-3f6a29e39bb7?w=400" },
    { id: 10, name: "Graphic Tee", price: 599, category: "tops", image: "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?w=400" },
    { id: 11, name: "Knitted Beige Sweater", price: 1599, category: "tops", image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400" },
    { id: 12, name: "Black Turtleneck", price: 899, category: "tops", image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400" },

    // --- BOTTOMS ---
    { id: 13, name: "High-Waist Jeans", price: 1599, category: "bottoms", image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400" },
    { id: 14, name: "Pleated Midi Skirt", price: 1199, category: "bottoms", image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=400" },
    { id: 15, name: "Black Formal Trousers", price: 1450, category: "bottoms", image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400" },
    { id: 16, name: "Denim Shorts", price: 799, category: "bottoms", image: "https://images.unsplash.com/photo-1565084888279-aca607ecce0c?w=400" },
    { id: 17, name: "Wide Leg Palazzos", price: 1100, category: "bottoms", image: "https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?w=400" },
    { id: 18, name: "Leather Mini Skirt", price: 1350, category: "bottoms", image: "https://images.unsplash.com/photo-1582142327317-098263795b1e?w=400" },

    // --- OUTERWEAR ---
    { id: 19, name: "Classic Denim Jacket", price: 1999, category: "outerwear", image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=400" },
    { id: 20, name: "Beige Trench Coat", price: 4500, category: "outerwear", image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400" },
    { id: 21, name: "Black Leather Jacket", price: 3200, category: "outerwear", image: "https://images.unsplash.com/photo-1551028919-ac66c9a3d683?w=400" },
    { id: 22, name: "Checkered Blazer", price: 2800, category: "outerwear", image: "https://images.unsplash.com/photo-1592999014163-5477838501cb?w=400" },
    { id: 23, name: "Winter Puffer Jacket", price: 3600, category: "outerwear", image: "https://images.unsplash.com/photo-1545595996-5f11197c36d0?w=400" },

    // --- SHOES ---
    { id: 24, name: "White Sneakers", price: 2199, category: "shoes", image: "https://images.unsplash.com/photo-1560769629-975e13f51863?w=400" },
    { id: 25, name: "Leather Ankle Boots", price: 2899, category: "shoes", image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400" },
    { id: 26, name: "Strappy Heels", price: 1850, category: "shoes", image: "https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?w=400" },
    { id: 27, name: "Comfy Loafers", price: 1500, category: "shoes", image: "https://images.unsplash.com/photo-1614252369475-531eba835eb1?w=400" },
    { id: 28, name: "Running Shoes", price: 2400, category: "shoes", image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=400" },
    { id: 29, name: "Summer Sandals", price: 999, category: "shoes", image: "https://images.unsplash.com/photo-1562273138-f46be4ebdf33?w=400" },

    // --- ACCESSORIES ---
    { id: 30, name: "Canvas Tote Bag", price: 499, category: "accessories", image: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=400" },
    { id: 31, name: "Gold Layered Necklace", price: 399, category: "accessories", image: "https://images.unsplash.com/photo-1599643478518-17488fbbcd75?w=400" },
    { id: 32, name: "Cat-Eye Sunglasses", price: 850, category: "accessories", image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400" },
    { id: 33, name: "Leather Belt", price: 650, category: "accessories", image: "https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=400" },
    { id: 34, name: "Straw Hat", price: 550, category: "accessories", image: "https://images.unsplash.com/photo-1521369909029-2afed882baee?w=400" },
    { id: 35, name: "Hoop Earrings", price: 299, category: "accessories", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400" }
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

// --- 3. PAGE RENDERING LOGIC ---

document.addEventListener('DOMContentLoaded', () => {
    updateCartUI(); // Always load cart

    // A. PRODUCT DETAIL PAGE LOGIC
    if (window.location.pathname.includes('product.html')) {
        const urlParams = new URLSearchParams(window.location.search);
        const productId = parseInt(urlParams.get('id')); // Get ID from URL
        
        const product = products.find(p => p.id === productId);

        if (product) {
            // Fill details
            document.getElementById('breadcrumb-name').innerText = product.name;
            document.getElementById('main-image').src = product.image;
            document.getElementById('detail-name').innerText = product.name;
            document.getElementById('detail-price').innerText = product.price.toFixed(2);
            document.getElementById('detail-category').innerText = product.category;

            // Configure Add to Cart Button
            document.getElementById('add-to-cart-btn').onclick = () => addToCart(product.id);

            // Load Related Products (Same category, excluding current)
            const relatedContainer = document.getElementById('related-products');
            const related = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 5); // CHANGED TO 5 HERE TOO
            relatedContainer.innerHTML = related.map(renderProduct).join('');
        } else {
            document.querySelector('.product-detail-container').innerHTML = "<h2>Product not found</h2>";
        }
    }

    // B. CHECKOUT PAGE LOGIC
    if (window.location.pathname.includes('checkout.html')) {
        loadCheckoutSummary();
    }

    // C. HOME PAGE LOGIC (UPDATED TO SHOW 5 ITEMS)
    const featuredContainer = document.getElementById('featured-products');
    const newArrivalsContainer = document.getElementById('new-arrivals');
    
    if (featuredContainer) {
        // Feature first 5 items (previously 4)
        featuredContainer.innerHTML = products.slice(0, 5).map(renderProduct).join('');
    }
    if (newArrivalsContainer) {
        // Show last 5 items (previously 4)
        newArrivalsContainer.innerHTML = products.slice(-5).map(renderProduct).join('');
    }

    // D. SHOP PAGE LOGIC
    const shopContainer = document.getElementById('shop-products');
    if (shopContainer) {
        displayShopProducts('all');
    }

    // Size Selector Logic (Visual only)
    const sizeBtns = document.querySelectorAll('.size-btn');
    sizeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            sizeBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });
});

// Helper: Render Product Card
function renderProduct(product) {
    return `
        <div class="product-card">
            <a href="product.html?id=${product.id}">
                <img src="${product.image}" alt="${product.name}">
            </a>
            <div class="product-info">
                <a href="product.html?id=${product.id}">
                    <h4>${product.name}</h4>
                </a>
                <p>Rs. ${product.price.toFixed(2)}</p>
                <button class="btn" onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        </div>
    `;
}

// Helper: Shop Filter
function displayShopProducts(category) {
    const shopContainer = document.getElementById('shop-products');
    let filteredProducts = products;
    if (category !== 'all') {
        filteredProducts = products.filter(p => p.category === category);
    }
    shopContainer.innerHTML = filteredProducts.map(renderProduct).join('');
}

// Helper: Checkout Summary
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

// Helper: Place Order Simulation
function placeOrder(event) {
    event.preventDefault(); 
    if (cart.length === 0) {
        alert("Your cart is empty! Add some items before checking out.");
        return;
    }

    const modal = document.getElementById('order-modal');
    const statusText = document.getElementById('order-status');
    const messageText = document.getElementById('order-message');
    const spinner = document.getElementById('spinner');
    const successIcon = document.getElementById('success-icon');

    modal.classList.add('active');

    setTimeout(() => {
        statusText.innerText = "Verifying Details...";
        messageText.innerText = "Checking inventory and shipping address.";
    }, 1500);

    setTimeout(() => {
        spinner.style.display = 'none';
        successIcon.style.display = 'block';
        statusText.innerText = "Order Placed!";
        messageText.innerText = "Redirecting you to the home page...";
    }, 3000);

    setTimeout(() => {
        cart = []; 
        saveCart();
        window.location.href = 'index.html'; 
    }, 4500);
}

// --- NAVBAR SCROLL EFFECT ---
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.9)';
        navbar.style.boxShadow = 'none';
    }
});