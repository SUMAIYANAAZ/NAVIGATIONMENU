window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#967bb6'; // Change background color when scrolled
    } else {
        navbar.style.backgroundColor = '#a76bcf'; // Default background color
    }
});
