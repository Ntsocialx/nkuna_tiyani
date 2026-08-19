document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('.nav-list a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });

            // Close mobile menu after clicking a link
            if (window.innerWidth <= 768) {
                const navList = document.querySelector('.nav-list');
                const hamburger = document.querySelector('.hamburger');
                navList.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    });

    // Mobile navigation toggle (Hamburger menu)
    const hamburger = document.querySelector('.hamburger');
    const navList = document.querySelector('.nav-list');

    hamburger.addEventListener('click', () => {
        navList.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close mobile menu if clicked outside
    document.addEventListener('click', (e) => {
        if (!navList.contains(e.target) && !hamburger.contains(e.target) && navList.classList.contains('active')) {
            navList.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });

    // Sticky header class on scroll (optional, CSS sticky is primary)
    // This can be used for additional styling changes on scroll if needed.
    // window.addEventListener('scroll', () => {
    //     const header = document.querySelector('.header');
    //     if (window.scrollY > 0) {
    //         header.classList.add('scrolled');
    //     } else {
    //         header.classList.remove('scrolled');
    //     }
    // });
});