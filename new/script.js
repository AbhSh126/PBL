// --- 1. PRODUCT DATA (15 Items + Accessories) ---
const products = [
    // Dresses
    { id: 1, name: "Floral Summer Dress", price: 1499, category: "dresses", image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400" },
    { id: 7, name: "Elegant Evening Gown", price: 3499, category: "dresses", image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=400" },
    { id: 9, name: "Boho Maxi Dress", price: 1899, category: "dresses", image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400" },
    
    // Tops
    { id: 4, name: "Silk Blouse", price: 1299, category: "tops", image: "https://images.unsplash.com/photo-1589810635657-232948472d98?w=400" },
    { id: 8, name: "Casual Crop Top", price: 699, category: "tops", image: "https://images.unsplash.com/photo-1503342394128-c104d54dba01?w=400" },
    { id: 10, name: "Striped Cotton Shirt", price: 999, category: "tops", image: "https://images.unsplash.com/photo-1551163943-3f6a29e39bb7?w=400" },
    { id: 11, name: "Graphic Tee", price: 599, category: "tops", image: "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?w=400" },

    // Bottoms
    { id: 3, name: "High-Waist Jeans", price: 1599, category: "bottoms", image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400" },
    { id: 12, name: "Pleated Midi Skirt", price: 1199, category: "bottoms", image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=400" },

    // Outerwear
    { id: 2, name: "Classic Denim Jacket", price: 1999, category: "outerwear", image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=400" },
    { id: 5, name: "Beige Trench Coat", price: 4500, category: "outerwear", image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400" },
    
    // Shoes
    { id: 6, name: "White Sneakers", price: 2199, category: "shoes", image: "https://images.unsplash.com/photo-1560769629-975e13f51863?w=400" },
    { id: 13, name: "Leather Ankle Boots", price: 2899, category: "shoes", image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400" },

    // Accessories
    { id: 14, name: "Canvas Tote Bag", price: 499, category: "accessories", image: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=400" },
    { id: 15, name: "Gold Layered Necklace", price: 399, category: "accessories", image: "https://images.unsplash.com/photo-1599643478518-17488fbbcd75?w=400" }
];

// --- 2. CART LOGIC (With LocalStorage) ---
let cart = JSON.parse(localStorage.getItem('loopCart')) || [];

function saveCart() {
    localStorage.setItem('loopCart', JSON.stringify(cart));
}

function addToCart(id) {
    const product = products.find(p => p.id === id);
    cart.push(product);
    saveCart();
    updateCartUI();
    toggleCart(); // Open cart to show user
}

function removeFromCart(index) {
    cart.splice(index, 1);
    saveCart();
    updateCartUI();
}

function updateCartUI() {
    const cartCount = document.getElementById('cart-count');
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');

    if (!cartCount || !cartItemsContainer || !cartTotal) return; // Guard clause

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

// --- 3. PAGE SPECIFIC RENDERING ---
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

document.addEventListener('DOMContentLoaded', () => {
    updateCartUI(); // Load cart on every page

    // Home Page Logic
    const featuredContainer = document.getElementById('featured-products');
    const newArrivalsContainer = document.getElementById('new-arrivals');
    
    if (featuredContainer) {
        // Feature first 4 items
        featuredContainer.innerHTML = products.slice(0, 4).map(renderProduct).join('');
    }
    if (newArrivalsContainer) {
        // Show last 4 items
        newArrivalsContainer.innerHTML = products.slice(-4).map(renderProduct).join('');
    }

    // Shop Page Logic
    const shopContainer = document.getElementById('shop-products');
    if (shopContainer) {
        displayShopProducts('all');
    }
});

function displayShopProducts(category) {
    const shopContainer = document.getElementById('shop-products');
    let filteredProducts = products;

    if (category !== 'all') {
        filteredProducts = products.filter(p => p.category === category);
    }

    shopContainer.innerHTML = filteredProducts.map(renderProduct).join('');
}