document.addEventListener('DOMContentLoaded', () => {
    // Prevent browser from restoring previous scroll position on reload/navigation.
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);

    // Page load transition
    setTimeout(() => {
        document.body.classList.add('page-loaded');
    }, 100);

    // Intersection Observer for scroll animations
    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Anim only once
            }
        });
    }, revealOptions);

    document.querySelectorAll('.reveal').forEach(el => {
        revealObserver.observe(el);
    });

    // Smooth scroll for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                // Close menu if open
                const navLinks = document.querySelector('.nav-links');
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                }

                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!menuToggle.contains(e.target) && !navLinks.contains(e.target) && navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                menuToggle.classList.remove('active');
            }
        });
    }

    // Navbar behavior:
    // 1) transparent at absolute top
    // 2) hides on scroll down
    // 3) appears on scroll up
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        let lastScrollY = window.scrollY;
        const hideOffset = 80;

        const updateNavbar = () => {
            const currentScrollY = window.scrollY;
            const atTop = currentScrollY <= 2;

            navbar.classList.toggle('at-top', atTop);

            // Keep navbar visible while mobile menu is open.
            if (navLinks && navLinks.classList.contains('active')) {
                navbar.classList.remove('nav-hidden');
                lastScrollY = currentScrollY;
                return;
            }

            if (atTop) {
                navbar.classList.remove('nav-hidden');
            } else if (currentScrollY > lastScrollY && currentScrollY > hideOffset) {
                navbar.classList.add('nav-hidden');
            } else if (currentScrollY < lastScrollY) {
                navbar.classList.remove('nav-hidden');
            }

            lastScrollY = currentScrollY;
        };

        updateNavbar();
        window.addEventListener('scroll', updateNavbar, { passive: true });
    }
});
