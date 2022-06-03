function slide() {
    // Avtivate the slide-out hamburger menu when clicking on the hamburger
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.classList.toggle('open');
    navMenu.classList.toggle('active');

    // Close the hamburger menu after clicking on one of the link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            hamburger.classList.remove('open');
            navMenu.classList.remove('active');
        })
    });
}