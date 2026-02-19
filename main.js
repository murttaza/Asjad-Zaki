document.addEventListener('DOMContentLoaded', () => {
    // Intersection Observer for scroll animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    // Select elements to animate
    const animatedElements = document.querySelectorAll('.service-card, .contact-card, .section-header');
    animatedElements.forEach(el => {
        el.classList.add('fade-on-scroll');
        observer.observe(el);
    });



    // Header scroll effect
    const header = document.getElementById('header');

    // Click header to scroll to top (ignoring links)
    header.addEventListener('click', (e) => {
        if (!e.target.closest('a') && !e.target.closest('button')) {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
            header.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
            header.style.background = 'rgba(255, 255, 255, 0.98)';
        } else {
            header.classList.remove('scrolled');
            header.style.boxShadow = 'none';
            header.style.background = 'rgba(255, 255, 255, 0.9)';
        }
    });

    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-menu a');

    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            mobileMenu.classList.toggle('active');
            document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
        });

        // Close menu when a link is clicked
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                mobileMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }
});
