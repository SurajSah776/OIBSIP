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
