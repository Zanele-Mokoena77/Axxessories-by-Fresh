const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartItemsContainer = document.querySelector('.cart-items');
const cartTotal = document.querySelector('.cart-total');
let cart = [];
addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const productCard = button.parentElement;
        const name = productCard.dataset.name;
        const price = parseFloat(productCard.dataset.price);
        cart.push({ name, price });
        renderCart();
    });
});
function renderCart() {
    cartItemsContainer.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.textContent = `${item.name} - R${item.price}`;
        cartItemsContainer.appendChild(itemDiv);
        total += item.price;
    });
    cartTotal.textContent = `Total: R${total}`;
}
document.getElementById('checkout-btn').addEventListener('click', () => {
    if(cart.length === 0) {
        alert('Your cart is empty!');
    } else {
        alert('Checkout functionality coming soon!');
    }
});

// Carousel functionality
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');
function showSlide(index) {
    slides.forEach((slide, i) => slide.classList.toggle('active', i === index));
}
nextButton.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
});
prevButton.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
});
setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}, 5000);
