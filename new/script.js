// --- 1. PRODUCT DATA (35 Items) ---
const products = [
    // --- DRESSES ---
    { id: 1, name: "Floral Summer Dress", price: 1499, category: "dresses", image: "https://i.pinimg.com/1200x/9d/e7/73/9de7736407bcfd1f298770b431790fad.jpg" },
    { id: 2, name: "Elegant Evening Gown", price: 3499, category: "dresses", image: "https://i.pinimg.com/736x/c1/6e/2f/c16e2f657122b6bdf7e0d14150207c2d.jpg" },
    { id: 3, name: "Boho Maxi Dress", price: 1899, category: "dresses", image: "https://i.pinimg.com/1200x/e5/46/9c/e5469c86db621357b5deea9486e6da3f.jpg" },
    { id: 4, name: "Red Bodycon Dress", price: 2100, category: "dresses", image: "https://i.pinimg.com/1200x/30/3d/19/303d1955e7ecd13f3b05dfcec871708d.jpg" },
    { id: 5, name: "Polka Dot Midi", price: 1250, category: "dresses", image: "https://i.pinimg.com/1200x/d6/de/6b/d6de6b41c96af9c23f20506e1661cb3f.jpg" },
    { id: 6, name: "White Lace Sundress", price: 1699, category: "dresses", image: "https://i.pinimg.com/736x/6e/07/de/6e07dee8da81d1387036a2b5a61a52af.jpg" },

    // --- TOPS ---
    { id: 7, name: "Silk Blouse", price: 1299, category: "tops", image: "https://i.pinimg.com/736x/3b/5f/d9/3b5fd9c23e57f77ae72620a404539587.jpg" },
    { id: 8, name: "Casual Crop Top", price: 699, category: "tops", image: "https://i.pinimg.com/1200x/9c/8a/3b/9c8a3b05e0d9e1925c749dbf82231a17.jpg" },
    { id: 9, name: "Striped Cotton Shirt", price: 999, category: "tops", image: "https://i.pinimg.com/736x/d4/08/b5/d408b54d77900f2797874b14450d8fbc.jpg" },
    { id: 10, name: "Graphic Tee", price: 599, category: "tops", image: "https://i.pinimg.com/1200x/6b/2f/9b/6b2f9bb49514e6b7d687fbf8cdfda9db.jpg" },
    { id: 11, name: "Knitted Beige Sweater", price: 1599, category: "tops", image: "https://i.pinimg.com/1200x/cd/a3/49/cda349c18da47d0417e5c34ae8f327f9.jpg" },
    { id: 12, name: "Black Turtleneck", price: 899, category: "tops", image: "https://i.pinimg.com/1200x/13/fe/86/13fe86202c41884e0ae2addd8c82cb74.jpg" },

    // --- BOTTOMS ---
    { id: 13, name: "High-Waist Jeans", price: 1599, category: "bottoms", image: "https://i.pinimg.com/736x/74/e1/71/74e171c328f538a456a83f1c99a4ae9c.jpg" },
    { id: 14, name: "Pleated Midi Skirt", price: 1199, category: "bottoms", image: "https://i.pinimg.com/736x/40/94/b7/4094b7bc8399753ea4730d0b09f6b6dc.jpg" },
    { id: 15, name: "Black Formal Trousers", price: 1450, category: "bottoms", image: "https://i.pinimg.com/736x/38/dd/4f/38dd4f4199b35d36912f4152150d3a93.jpg" },
    { id: 16, name: "Denim Shorts", price: 799, category: "bottoms", image: "https://i.pinimg.com/736x/e3/f6/49/e3f6496d46f8e8a20738ad92801aa110.jpg" },
    { id: 17, name: "Wide Leg Palazzos", price: 1100, category: "bottoms", image: "https://i.pinimg.com/736x/8c/62/7a/8c627a6c9c745a0c27ddfa6d7b31cc93.jpg" },
    { id: 18, name: "Leather Mini Skirt", price: 1350, category: "bottoms", image: "https://i.pinimg.com/736x/ff/23/c2/ff23c2bb21d0e6246aa0013d5f09fafd.jpg" },

    // --- OUTERWEAR ---
    { id: 19, name: "Classic Denim Jacket", price: 1999, category: "outerwear", image: "https://i.pinimg.com/1200x/e8/e4/bf/e8e4bf35a707459ab74705f51152b6ad.jpg" },
    { id: 20, name: "Beige Trench Coat", price: 4500, category: "outerwear", image: "https://i.pinimg.com/1200x/8b/65/99/8b6599689d7de17d7b74f0cbff36b092.jpg" },
    { id: 21, name: "Black Leather Jacket", price: 3200, category: "outerwear", image: "https://i.pinimg.com/736x/ac/1d/9a/ac1d9ae8808edf5417d48f56e334e6e0.jpg" },
    { id: 22, name: "Checkered Blazer", price: 2800, category: "outerwear", image: "https://i.pinimg.com/736x/07/c8/a9/07c8a957dedc366ced1e040bbfb5325f.jpg" },
    { id: 23, name: "Winter Puffer Jacket", price: 3600, category: "outerwear", image: "https://i.pinimg.com/736x/29/70/14/297014d524e83b0d4bea554aa72312d7.jpg" },

    // --- SHOES ---
    { id: 24, name: "White Sneakers", price: 2199, category: "shoes", image: "https://i.pinimg.com/1200x/cd/1b/4f/cd1b4f2793f47c7e478530f2b6ceaa0a.jpg" },
    { id: 25, name: "Leather Ankle Boots", price: 2899, category: "shoes", image: "https://i.pinimg.com/736x/db/e8/df/dbe8dff17d1da158658c1dee867958bb.jpg" },
    { id: 26, name: "Strappy Heels", price: 1850, category: "shoes", image: "https://i.pinimg.com/1200x/84/14/f1/8414f1f505617869b117872b6d5d3a30.jpg" },
    { id: 27, name: "Comfy Loafers", price: 1500, category: "shoes", image: "https://i.pinimg.com/1200x/32/96/24/3296245e4d3f4aeae04018a777846b9f.jpg" },
    { id: 28, name: "Running Shoes", price: 2400, category: "shoes", image: "https://i.pinimg.com/1200x/bd/ce/1e/bdce1e392ccc1ebf0d0132d46145068d.jpg" },
    { id: 29, name: "Summer Sandals", price: 999, category: "shoes", image: "https://i.pinimg.com/736x/ec/da/59/ecda59af86fdec0f9e60feb3df26e20a.jpg" },

    // --- ACCESSORIES ---
    { id: 30, name: "Canvas Tote Bag", price: 499, category: "accessories", image: "https://i.pinimg.com/1200x/ac/5d/45/ac5d4509219a1dadf0e266b31b0c77f7.jpg" },
    { id: 31, name: "Gold Layered Necklace", price: 399, category: "accessories", image: "https://i.pinimg.com/1200x/5c/e3/3a/5ce33aa46241ca706b53b15755d02418.jpg" },
    { id: 32, name: "Cat-Eye Sunglasses", price: 850, category: "accessories", image: "https://i.pinimg.com/1200x/c8/93/6c/c8936c50d7b54d48ca5315bae9517912.jpg" },
    { id: 33, name: "Leather Belt", price: 650, category: "accessories", image: "https://i.pinimg.com/736x/e7/b7/1b/e7b71bc6afe9f9d2fca822030851135c.jpg" },
    { id: 34, name: "Straw Hat", price: 550, category: "accessories", image: "https://i.pinimg.com/1200x/65/a2/ad/65a2adf224bb7df204c553090ef2114c.jpg" },
    { id: 35, name: "Hoop Earrings", price: 299, category: "accessories", image: "https://i.pinimg.com/736x/d3/ed/6c/d3ed6c0bdd7a34a7185c746b0a898344.jpg" }
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
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}