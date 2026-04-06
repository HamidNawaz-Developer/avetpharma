
// ===== Initialize AOS =====
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// ===== PRELOADER - SIRF HOME PAGE PAR 5 SECOND =====
// Yeh sirf home page par chalega
if (window.location.pathname.includes('index.html') || window.location.pathname === '/') {
    window.addEventListener('load', () => {
        const preloader = document.getElementById('preloader');
        if (preloader) {
            setTimeout(() => {
                preloader.classList.add('fade-out');
            }, 5000); // 5 seconds
        }
    });
}

// ===== Mobile Menu =====
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// Close menu when clicking a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ===== Navbar Scroll Effect =====
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const backToTop = document.getElementById('backToTop');
    
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255,255,255,0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
        if (backToTop) backToTop.classList.add('show');
    } else {
        navbar.style.background = 'var(--white)';
        navbar.style.backdropFilter = 'none';
        if (backToTop) backToTop.classList.remove('show');
    }
});

// ===== Back to Top =====
const backToTop = document.getElementById('backToTop');
if (backToTop) {
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ===== Active Navigation Link =====
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-link').forEach(link => {
    const linkPage = link.getAttribute('href');
    if (linkPage === currentPage) {
        link.classList.add('active');
    }
});

// ===== Stats Counter Animation =====
const stats = document.querySelectorAll('.stat-number');
let animated = false;

function animateStats() {
    if (animated) return;
    
    stats.forEach(stat => {
        const target = parseInt(stat.textContent);
        let current = 0;
        const increment = target / 50;
        
        const updateCount = () => {
            if (current < target) {
                current += increment;
                stat.textContent = Math.ceil(current);
                setTimeout(updateCount, 20);
            } else {
                stat.textContent = target + (stat.textContent.includes('+') ? '+' : '');
            }
        };
        
        updateCount();
    });
    
    animated = true;
}

// Check if stats section is visible
const statsSection = document.querySelector('.hero-stats');
if (statsSection) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateStats();
            }
        });
    }, { threshold: 0.5 });
    
    observer.observe(statsSection);
}

// ===== Contact Form =====
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Show success message
        alert('Thank you for your message! We will get back to you soon.');
        
        // Reset form
        contactForm.reset();
    });
}

// ===== Newsletter Form =====
const newsletterForms = document.querySelectorAll('.newsletter-form');
newsletterForms.forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        alert('Thank you for subscribing to our newsletter!');
        form.reset();
    });
});

// ===== Product Inquiry =====
const inquiryBtns = document.querySelectorAll('.btn-inquiry');
inquiryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        alert('Thank you for your inquiry! We will contact you soon.');
    });
});

// ===== Welcome Message =====
if (window.location.pathname.includes('index.html') || window.location.pathname === '/') {
    setTimeout(() => {
        console.log('Welcome to A-VET PHARMA!');
    }, 5500);
}