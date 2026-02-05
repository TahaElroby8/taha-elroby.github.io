// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Animate hamburger
    hamburger.classList.toggle('active');
});

// Close menu when clicking on a nav link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    }
});

// Draggable Profile Image
const profileImage = document.getElementById('profileImage');
let isDragging = false;
let currentX;
let currentY;
let initialX;
let initialY;
let xOffset = 0;
let yOffset = 0;

profileImage.addEventListener('mousedown', dragStart);
profileImage.addEventListener('touchstart', dragStart);

document.addEventListener('mousemove', drag);
document.addEventListener('touchmove', drag);

document.addEventListener('mouseup', dragEnd);
document.addEventListener('touchend', dragEnd);

function dragStart(e) {
    if (e.type === 'touchstart') {
        initialX = e.touches[0].clientX - xOffset;
        initialY = e.touches[0].clientY - yOffset;
    } else {
        initialX = e.clientX - xOffset;
        initialY = e.clientY - yOffset;
    }

    if (e.target === profileImage) {
        isDragging = true;
    }
}

function drag(e) {
    if (isDragging) {
        e.preventDefault();
        
        if (e.type === 'touchmove') {
            currentX = e.touches[0].clientX - initialX;
            currentY = e.touches[0].clientY - initialY;
        } else {
            currentX = e.clientX - initialX;
            currentY = e.clientY - initialY;
        }

        xOffset = currentX;
        yOffset = currentY;

        setTranslate(currentX, currentY, profileImage.parentElement);
    }
}

function dragEnd(e) {
    initialX = currentX;
    initialY = currentY;
    isDragging = false;
}

function setTranslate(xPos, yPos, el) {
    el.style.transform = `translate3d(${xPos}px, ${yPos}px, 0)`;
}

// Animate elements on scroll
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };
    
    // Create mailto link
    const mailtoLink = `mailto:taha.elroby8@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Show success message
    alert('Thank you for your message! Your email client will open to send the message.');
    
    // Reset form
    contactForm.reset();
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = target.offsetTop - navHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Animate elements on scroll
const observeElements = document.querySelectorAll('.timeline-item, .service-card, .project-card, .education-card');

const animationObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1
});

observeElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease';
    animationObserver.observe(el);
});

// Counter animation for stats
const stats = document.querySelectorAll('.stat-item h4');
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
            const target = entry.target;
            const text = target.textContent;
            const hasPlus = text.includes('+');
            const hasPercent = text.includes('%');
            const number = parseInt(text.replace(/\D/g, ''));
            
            let current = 0;
            const increment = number / 50;
            const timer = setInterval(() => {
                current += increment;
                if (current >= number) {
                    current = number;
                    clearInterval(timer);
                    target.classList.add('counted');
                }
                target.textContent = Math.floor(current) + (hasPlus ? '+' : '') + (hasPercent ? '%' : '');
            }, 30);
        }
    });
}, { threshold: 0.5 });

stats.forEach(stat => statsObserver.observe(stat));

// Add active class to current nav item
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section[id]');
    const navHeight = document.querySelector('.navbar').offsetHeight;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - navHeight - 100;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Interactive service cards
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.querySelector('.service-icon').style.transform = 'rotate(360deg) scale(1.1)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.querySelector('.service-icon').style.transform = 'rotate(0deg) scale(1)';
    });
});

// Add transition to service icons
document.querySelectorAll('.service-icon').forEach(icon => {
    icon.style.transition = 'transform 0.6s ease';
});

console.log('Portfolio website loaded successfully!');
