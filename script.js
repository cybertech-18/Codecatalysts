// ===== Optimized Particle Background Effect =====
function createParticles() {
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles';
    document.body.appendChild(particlesContainer);

    // Reduced to 15 particles for optimal performance
    for (let i = 0; i < 15; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = Math.random() * 2 + 1 + 'px';
        particle.style.height = particle.style.width;
        particle.style.background = `rgba(${Math.random() > 0.5 ? '0, 255, 255' : '168, 85, 247'}, 0.5)`;
        particle.style.borderRadius = '50%';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animation = `float ${Math.random() * 8 + 4}s ease-in-out infinite`;
        particle.style.animationDelay = Math.random() * 3 + 's';
        particle.style.boxShadow = `0 0 10px rgba(0, 255, 255, 0.6)`;
        particlesContainer.appendChild(particle);
    }
}

// Call particle creation on load
if (window.innerWidth > 768) {
    createParticles();
}

// Mobile Menu Toggle
const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.querySelector('.nav-menu');

mobileMenu.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    mobileMenu.classList.toggle('active');
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            
            // Close mobile menu if open
            navMenu.classList.remove('active');
        }
    });
});

// Active Navigation Link on Scroll - Throttled
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-menu a');

let scrollTimeout;
window.addEventListener('scroll', () => {
    if (scrollTimeout) return;
    
    scrollTimeout = setTimeout(() => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
        
        scrollTimeout = null;
    }, 100);
}, { passive: true });

// Navbar Scroll Effect - Combined with above throttled scroll
const navbar = document.querySelector('.navbar');

let navbarScrollTimeout;
window.addEventListener('scroll', () => {
    if (navbarScrollTimeout) return;
    
    navbarScrollTimeout = setTimeout(() => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        navbarScrollTimeout = null;
    }, 50);
}, { passive: true });

// Contact Form Handling with Formspree
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const button = contactForm.querySelector('button[type="submit"]');
    const buttonText = button.textContent;
    
    // Show loading state
    button.textContent = 'Sending...';
    button.disabled = true;
    formStatus.textContent = '';
    
    try {
        const response = await fetch(contactForm.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });
        
        if (response.ok) {
            formStatus.textContent = '✓ Message sent successfully! We\'ll get back to you soon.';
            formStatus.style.color = '#00ffff';
            contactForm.reset();
        } else {
            throw new Error('Form submission failed');
        }
    } catch (error) {
        formStatus.textContent = '✗ Oops! There was a problem. Please try again or email us directly.';
        formStatus.style.color = '#ff6b6b';
    } finally {
        button.textContent = buttonText;
        button.disabled = false;
    }
});

// Scroll Reveal Animation with Optimized Performance
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0) scale(1)';
            entry.target.classList.add('animated');
            observer.unobserve(entry.target); // Stop observing after animation
        }
    });
}, observerOptions);

// Observe all animated elements
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll(
        '.team-card, .project-card, .idea-card, .stat-item, .contact-item'
    );
    
    animatedElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(40px) scale(0.96)';
        el.style.transition = `all 0.7s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.08}s`;
        observer.observe(el);
    });

    // Optimized parallax with throttle
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                parallaxEffect();
                ticking = false;
            });
            ticking = true;
        }
    });
});

// Loading Animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Portfolio Item Click Handler
const portfolioItems = document.querySelectorAll('.portfolio-item');

portfolioItems.forEach(item => {
    item.addEventListener('click', () => {
        const title = item.querySelector('h3').textContent;
        alert(`You clicked on: ${title}\n\nThis would typically open a modal or navigate to a detailed project page.`);
    });
});

// Dynamic Year in Footer
const footerYear = document.querySelector('.footer-bottom p');
if (footerYear) {
    const currentYear = new Date().getFullYear();
    footerYear.textContent = `© ${currentYear} Codecatalysts. All rights reserved.`;
}

// Smooth scroll to top on page load
window.addEventListener('load', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ===== Optimized Parallax Scroll Effect =====
let parallaxTicking = false;
function parallaxEffect() {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.hero-content');
    
    parallaxElements.forEach(el => {
        const speed = 0.2;
        el.style.transform = `translateY(${scrolled * speed}px)`;
    });
    parallaxTicking = false;
}

if (window.innerWidth > 768) {
    window.addEventListener('scroll', () => {
        if (!parallaxTicking) {
            requestAnimationFrame(parallaxEffect);
            parallaxTicking = true;
        }
    }, { passive: true });
}

// ===== Interactive Button Ripple Effect =====
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.style.position = 'absolute';
        ripple.style.borderRadius = '50%';
        ripple.style.background = 'rgba(255, 255, 255, 0.6)';
        ripple.style.transform = 'scale(0)';
        ripple.style.animation = 'ripple 0.6s ease-out';
        ripple.style.pointerEvents = 'none';
        
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// Add ripple animation CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Toggle Tech Icons Show More/Less
function toggleTechIcons() {
    const techTags = document.getElementById('techTags');
    const showMoreBtn = document.getElementById('showMoreBtn');
    const btnText = showMoreBtn.querySelector('.btn-text');
    
    if (techTags.classList.contains('collapsed')) {
        techTags.classList.remove('collapsed');
        showMoreBtn.classList.add('expanded');
        btnText.textContent = 'Show Less';
    } else {
        techTags.classList.add('collapsed');
        showMoreBtn.classList.remove('expanded');
        btnText.textContent = 'Show More';
        
        // Smooth scroll to tech section
        const techShowcase = document.querySelector('.tech-showcase');
        if (techShowcase) {
            techShowcase.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    }
}
