

document.querySelectorAll('img').forEach(image => {
    image.addEventListener('click', function() {
        window.location.href = 'product.html';
    });
});