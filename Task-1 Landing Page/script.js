// For FAQs

document.addEventListener('DOMContentLoaded', function () {
    const toggleButtons = document.querySelectorAll('.toggle-btn');

    toggleButtons.forEach(button => {
        button.addEventListener('click', function () {
            const answer = this.parentElement.nextElementSibling;
            const isHidden = answer.style.display === 'none';

            if (isHidden) {
                answer.style.display = 'block';
                this.textContent = '-';
            } else {
                answer.style.display = 'none';
                this.textContent = '+';
            }
        });
    });
});


// For Home Section Carousel
const slides = document.getElementsByClassName("slide");
let slideIndex = 0;

function showSlide(index) {
    if (index >= slides.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = slides.length - 1;
    } else {
        slideIndex = index;
    }

    for (let slide of slides) {
        slide.style.display = "none";
    }

    slides[slideIndex].style.display = "block";
}
// Show the first slide immediately
showSlide(slideIndex);

setTimeout(() => {
    const slideInterval = setInterval(() => {
        slideIndex++;
        showSlide(slideIndex);
    }, 2500);

    function controller(x) {
        clearInterval(slideInterval);
        slideIndex += x;
        showSlide(slideIndex);
    }

    document.querySelector('.prev').addEventListener('click', () => controller(-1));
    document.querySelector('.next').addEventListener('click', () => controller(1));
}, 2500);


// For the header -Hamburger Icon
function toggleMenu() {
    const navMenu = document.querySelector('.header ul');
    navMenu.classList.toggle('show');
}
