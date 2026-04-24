/**
 * Dynamic Navbar Highlighting
 * Automatically adds the 'active' class to the navigation link that matches the current page.
 */
document.addEventListener('DOMContentLoaded', function() {
    // Get current page name from the URL (e.g., 'index.html')
    const path = window.location.pathname;
    const page = path.split("/").pop();

    // Select all navigation links
    const navLinks = document.querySelectorAll('.nav-link-custom');

    navLinks.forEach(link => {
        // Remove manual active class if it exists
        link.classList.remove('active');

        // Get the link's target filename
        const linkHref = link.getAttribute('href');

        // Check if the current page matches the link's href
        // Added some logic for matching 'index.html' when path is empty (/)
        if (page === linkHref || (page === '' && linkHref === 'index.html')) {
            link.classList.add('active');
        }
    });
});
