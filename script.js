
document.addEventListener('DOMContentLoaded', function () {

    var navbar = document.getElementById('navbar');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    var hamburger = document.getElementById('hamburger');
    var navLinks = document.getElementById('navLinks');

    hamburger.addEventListener('click', function () {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    var links = navLinks.querySelectorAll('a');
    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener('click', function () {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    }

    var colorButtons = document.querySelectorAll('.color-btn');
    var selectedColorText = document.getElementById('selectedColor');

    for (var i = 0; i < colorButtons.length; i++) {
        colorButtons[i].addEventListener('click', function () {
            for (var j = 0; j < colorButtons.length; j++) {
                colorButtons[j].classList.remove('active');
            }
            this.classList.add('active');
            selectedColorText.textContent = this.getAttribute('data-color');
        });
    }

});
