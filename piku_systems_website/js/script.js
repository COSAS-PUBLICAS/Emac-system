document.addEventListener('DOMContentLoaded', () => {
    const hamburgerButton = document.getElementById('hamburger-button');
    const navLinks = document.getElementById('main-nav-links');

    if (hamburgerButton && navLinks) {
        hamburgerButton.addEventListener('click', () => {
            navLinks.classList.toggle('nav-active');

            // Toggle ARIA attribute for accessibility
            const isExpanded = navLinks.classList.contains('nav-active');
            hamburgerButton.setAttribute('aria-expanded', isExpanded);

            // Optional: Change hamburger icon to 'X' and back
            if (isExpanded) {
                hamburgerButton.innerHTML = '&times;'; // 'X' character
            } else {
                hamburgerButton.innerHTML = '&#9776;'; // Hamburger icon
            }
        });
    }
});
