// Global variables
let currentLanguage = 'sv';
let currentTheme = 'light';

// Language content
const content = {
    sv: {
        // Navigation
        "Hem": "Hem",
        "Projekt": "Projekt",
        "Kompetenser": "Kompetenser",
        "Erfarenhet": "Erfarenhet",
        "Kontakt": "Kontakt",
        
        // Hero section
        "Hej, jag är": "Hej, jag är",
        "Fullstack .NET Utvecklare & Azure Cloud ": "Fullstack .NET Utvecklare & Azure Cloud",
        "Självgående utvecklare med erfarenhet inom .NET, C#, React/TypeScript, Azure och databaser. Studerar för närvarande Prompt Engineering & Generativ AI på Nackademin.": "Självgående utvecklare med erfarenhet inom .NET, C#, React/TypeScript, Azure, databaser och DevOps/CI/CD. Studerar för närvarande Prompt Engineering & Generativ AI på Nackademin.",
        "Se mina projekt": "Se mina projekt",
        "Kontakta mig": "Kontakta mig",
        "Ladda ner CV": "Ladda ner CV",
        
        // Projects section
        "Mina Projekt": "Mina Projekt",
        "Portfolio Website": "Portfolio Website",
        "En Portfolio Website byggd med vanilla JavaScript, HTML och CSS med responsiv design och interaktiva element.": "En Portfolio Website byggd med vanilla JavaScript, HTML och CSS med responsiv design och interaktiva element.",
        "Fullstack E-handel": "Fullstack E-handel",
        "En komplett e-handelsplattform med C#/.NET backend, React/TypeScript frontend och JWT-autentisering. Examensprojekt som visar fullstack-kompetenser.": "En komplett e-handelsplattform med C#/.NET backend, React/TypeScript frontend och JWT-autentisering. Examensprojekt som visar fullstack-kompetenser.",
        "Shuffle Card Game": "Shuffle Card Game",
        "Ett interaktivt kortspel byggt med React och styling med CSS. Inkluderar spellogik, animationer och responsiv design.": "Ett interaktivt kortspel byggt med React och styling med CSS. Inkluderar spellogik, animationer och responsiv design.",
        "Demo": "Demo",
        "Kod": "Kod",
        "Se alla projekt på GitHub": "Se alla projekt på GitHub",
        
        // Skills section
        "Kompetenser": "Kompetenser",
        "Frontend & UX": "Frontend & UX",
        "Backend": "Backend",
        "Databaser": "Databaser",
        "Moln": "Moln",
        "Skalning": "Skalning",
        "Metoder & Verktyg": "Metoder & Verktyg",
        "Språk": "Språk",
        "Svenska": "Svenska",
        "Engelska": "Engelska",
        "Persiska": "Persiska",
        
        // Experience section
        "Erfarenhet & Utbildning": "Erfarenhet & Utbildning",
        "Prompt Engineering & Generativ AI": "Prompt Engineering & Generativ AI",
        "Pågående": "Pågående",
        "Fördjupning inom AI-teknik och prompt engineering för att utveckla kompetenser inom generativ AI och maskininlärning.": "Fördjupning inom AI-teknik och prompt engineering för att utveckla kompetenser inom generativ AI och maskininlärning.",
        "Utvecklare": "Utvecklare",
        "Fullstack-utveckling med fokus på .NET och moderna webblösningar. Arbetade med agila metoder och CI/CD-processer.": "Fullstack-utveckling med fokus på .NET och moderna webblösningar. Arbetade med agila metoder och CI/CD-processer.",
        "Azure Cloud Utveckling": "Azure Cloud Utveckling",
        "Specialisering inom Azure cloud services, skalning och deployment av applikationer i molnmiljö.": "Specialisering inom Azure cloud services, skalning och deployment av applikationer i molnmiljö.",
        "Teknisk Support": "Teknisk Support",
        "Teknisk support och problemlösning som utvecklade mina kommunikativa färdigheter och förståelse för användarupplevelse.": "Teknisk support och problemlösning som utvecklade mina kommunikativa färdigheter och förståelse för användarupplevelse.",
        "Fullstack Webbutvecklare": "Fullstack Webbutvecklare",
        "Omfattande utbildning inom fullstack-utveckling med fokus på moderna teknologier som .NET, React och databaser.": "Omfattande utbildning inom fullstack-utveckling med fokus på moderna teknologier som .NET, React och databaser.",
        "Junior Utvecklare": "Junior Utvecklare",
        "Första professionella erfarenhet inom utveckling med fokus på webblösningar och kundsupport.": "Första professionella erfarenhet inom utveckling med fokus på webblösningar och kundsupport.",
        "Teknikprogrammet": "Teknikprogrammet",
        "Gymnasiet": "Gymnasiet",
        "Grundläggande teknisk utbildning som lade grunden för min passion för teknik och programmering.": "Grundläggande teknisk utbildning som lade grunden för min passion för teknik och programmering.",
        
        // Contact section
        "Kontakta Mig": "Kontakta Mig",
        "Låt oss prata!": "Låt oss prata!",
        "Jag är alltid öppen för nya möjligheter och intressanta projekt. Tveka inte att höra av dig!": "Jag är alltid öppen för nya möjligheter och intressanta projekt. Tveka inte att höra av dig!",
        "Namn": "Namn",
        "E-post": "E-post",
        "Meddelande": "Meddelande",
        "Skicka Meddelande": "Skicka Meddelande",
        
        // Footer
        "Alla rättigheter förbehållna.": "Alla rättigheter förbehållna."
    },
    en: {
        // Navigation
        "Hem": "Home",
        "Projekt": "Projects",
        "Kompetenser": "Skills",
        "Erfarenhet": "Experience",
        "Kontakt": "Contact",
        
        // Hero section
        "Hej, jag är": "Hello, I'm",
        "Fullstack .NET Utvecklare & Azure Cloud Specialist": "Fullstack .NET Developer & Azure Cloud",
        "Självgående utvecklare med erfarenhet inom .NET, C#, React/TypeScript, Azure och databaser. Studerar för närvarande Prompt Engineering & Generativ AI på Nackademin.": "Self-driven developer with experience in .NET, C#, React/TypeScript, Azure, databases, and DevOps/CI/CD. Currently studying Prompt Engineering & Generative AI at Nackademin.",
        "Se mina projekt": "View my projects",
        "Kontakta mig": "Contact me",
        "Ladda ner CV": "Download CV",
        
        // Projects section
        "Mina Projekt": "My Projects",
        "Portfolio Website": "Portfolio Website",
        "En Portfolio Website byggd med vanilla JavaScript, HTML och CSS med responsiv design och interaktiva element.": "A Portfolio Website built with vanilla JavaScript, HTML, and CSS featuring responsive design and interactive elements.",
        "Fullstack E-handel": "Fullstack E-commerce",
        "En komplett e-handelsplattform med C#/.NET backend, React/TypeScript frontend och JWT-autentisering. Examensprojekt som visar fullstack-kompetenser.": "A complete e-commerce platform with C#/.NET backend, React/TypeScript frontend, and JWT authentication. Graduation project showcasing fullstack capabilities.",
        "Shuffle Card Game": "Shuffle Card Game",
        "Ett interaktivt kortspel byggt med React och styling med CSS. Inkluderar spellogik, animationer och responsiv design.": "An interactive card game built with React and styled with CSS. Features game logic, animations, and responsive design.",
        "Demo": "Demo",
        "Kod": "Code",
        "Se alla projekt på GitHub": "View all projects on GitHub",
        
        // Skills section
        "Kompetenser": "Skills",
        "Frontend & UX": "Frontend & UX",
        "Backend": "Backend",
        "Databaser": "Databases",
        "Moln": "Cloud",
        "Skalning": "Scaling",
        "Metoder & Verktyg": "Methods & Tools",
        "Språk": "Languages",
        "Svenska": "Swedish",
        "Engelska": "English",
        "Persiska": "Persian",
        
        // Experience section
        "Erfarenhet & Utbildning": "Experience & Education",
        "Prompt Engineering & Generativ AI": "Prompt Engineering & Generative AI",
        "Pågående": "Ongoing",
        "Fördjupning inom AI-teknik och prompt engineering för att utveckla kompetenser inom generativ AI och maskininlärning.": "Specialization in AI technology and prompt engineering to develop skills in generative AI and machine learning.",
        "Utvecklare": "Developer",
        "Fullstack-utveckling med fokus på .NET och moderna webblösningar. Arbetade med agila metoder och CI/CD-processer.": "Fullstack development focused on .NET and modern web solutions. Worked with agile methods and CI/CD processes.",
        "Azure Cloud Utveckling": "Azure Cloud Development",
        "Specialisering inom Azure cloud services, skalning och deployment av applikationer i molnmiljö.": "Specialization in Azure cloud services, scaling and deployment of applications in cloud environment.",
        "Teknisk Support": "Technical Support",
        "Teknisk support och problemlösning som utvecklade mina kommunikativa färdigheter och förståelse för användarupplevelse.": "Technical support and problem solving that developed my communication skills and understanding of user experience.",
        "Fullstack Webbutvecklare": "Fullstack Web Developer",
        "Omfattande utbildning inom fullstack-utveckling med fokus på moderna teknologier som .NET, React och databaser.": "Comprehensive education in fullstack development focusing on modern technologies like .NET, React and databases.",
        "Junior Utvecklare": "Junior Developer",
        "Första professionella erfarenhet inom utveckling med fokus på webblösningar och kundsupport.": "First professional experience in development focusing on web solutions and customer support.",
        "Teknikprogrammet": "Technology Program",
        "Gymnasiet": "High School",
        "Grundläggande teknisk utbildning som lade grunden för min passion för teknik och programmering.": "Basic technical education that laid the foundation for my passion for technology and programming.",
        
        // Contact section
        "Kontakta Mig": "Contact Me",
        "Låt oss prata!": "Let's talk!",
        "Jag är alltid öppen för nya möjligheter och intressanta projekt. Tveka inte att höra av dig!": "I'm always open to new opportunities and interesting projects. Don't hesitate to reach out!",
        "Namn": "Name",
        "E-post": "Email",
        "Meddelande": "Message",
        "Skicka Meddelande": "Send Message",
        
        // Footer
        "Alla rättigheter förbehållna.": "All rights reserved."
    }
};

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// Initialize application
function initializeApp() {
    // Load saved preferences
    loadSavedPreferences();
    
    // Initialize theme
    setTheme(currentTheme);
    
    // Initialize language
    setLanguage(currentLanguage);
    
    // Set up event listeners
    setupEventListeners();
    
    // Initialize animations
    initializeAnimations();
    
    // Initialize navigation
    initializeNavigation();
    
    // Initialize form handling
    initializeForm();
}

// Load saved preferences from localStorage
function loadSavedPreferences() {
    const savedTheme = localStorage.getItem('portfolio-theme');
    const savedLanguage = localStorage.getItem('portfolio-language');
    
    if (savedTheme) {
        currentTheme = savedTheme;
    }
    
    if (savedLanguage) {
        currentLanguage = savedLanguage;
    }
}

// Save preferences to localStorage
function savePreferences() {
    localStorage.setItem('portfolio-theme', currentTheme);
    localStorage.setItem('portfolio-language', currentLanguage);
}

// Theme management
function setTheme(theme) {
    currentTheme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    
    const themeToggle = document.getElementById('theme-toggle');
    const icon = themeToggle.querySelector('i');
    
    if (theme === 'dark') {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
    
    savePreferences();
}

function toggleTheme() {
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
}

// Language management
function setLanguage(language) {
    currentLanguage = language;
    document.documentElement.setAttribute('lang', language);
    
    // Update all text elements
    const elements = document.querySelectorAll('[data-sv][data-en]');
    elements.forEach(element => {
        const text = element.getAttribute(`data-${language}`);
        if (text) {
            element.textContent = text;
        }
    });
    
    // Update page title and meta description
    updatePageMeta(language);
    
    // Update language toggle flag
    updateLanguageToggle(language);
    
    savePreferences();
}

function updatePageMeta(language) {
    const titles = {
        sv: 'Reza Eskandari - Fullstack .NET Utvecklare & Azure Cloud ',
        en: 'Reza Eskandari - Fullstack .NET Developer & Azure Cloud '
    };
    
    const descriptions = {
        sv: 'Reza Eskandari - Fullstack .NET Utvecklare & Azure Cloud . Modern portföljsida med projekt, kompetenser och erfarenhet.',
        en: 'Reza Eskandari - Fullstack .NET Developer & Azure Cloud . Modern portfolio website showcasing projects, skills and experience.'
    };
    
    document.title = titles[language];
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
        metaDescription.setAttribute('content', descriptions[language]);
    }
}

function updateLanguageToggle(language) {
    const langToggle = document.getElementById('lang-toggle');
    const flag = langToggle.querySelector('.flag');
    
    flag.textContent = language === 'sv' ? '🇸🇪' : 'EN';
}

function toggleLanguage() {
    const newLanguage = currentLanguage === 'sv' ? 'en' : 'sv';
    setLanguage(newLanguage);
}

// Event listeners setup
function setupEventListeners() {
    // Theme toggle
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', toggleTheme);
    
    // Language toggle
    const langToggle = document.getElementById('lang-toggle');
    langToggle.addEventListener('click', toggleLanguage);
    
    // Mobile menu toggle
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Smooth scroll for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Scroll events
    window.addEventListener('scroll', handleScroll);
    
    // Resize events
    window.addEventListener('resize', handleResize);
}

// Navigation management
function initializeNavigation() {
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Add scroll effect to navbar
    function updateNavbar() {
        if (window.scrollY > 100) {
            navbar.style.background = currentTheme === 'dark' 
                ? 'rgba(17, 24, 39, 0.98)' 
                : 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = currentTheme === 'dark' 
                ? 'rgba(17, 24, 39, 0.95)' 
                : 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    }
    
    // Update active navigation link based on scroll position
    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPos = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    // Combine scroll handlers
    window.addEventListener('scroll', () => {
        updateNavbar();
        updateActiveNavLink();
    });
}

// Scroll handling
function handleScroll() {
    // Parallax effect for hero section
    const hero = document.querySelector('.hero');
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.5;
    
    if (hero) {
        hero.style.transform = `translateY(${rate}px)`;
    }
    
    // Reveal animations
    revealOnScroll();
}

// Resize handling
function handleResize() {
    // Close mobile menu on resize
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    
    if (window.innerWidth > 768) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
}

// Animation system
function initializeAnimations() {
    // Add fade-in class to elements that should animate
    const animatedElements = document.querySelectorAll(
        '.project-card, .skill-category, .timeline-item, .hero-content, .section-title'
    );
    
    animatedElements.forEach(element => {
        element.classList.add('fade-in');
    });
    
    // Initial reveal check
    revealOnScroll();
}

function revealOnScroll() {
    const elements = document.querySelectorAll('.fade-in');
    const windowHeight = window.innerHeight;
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('visible');
        }
    });
}

// Form handling
function initializeForm() {
    const form = document.getElementById('contact-form');
    
    form.addEventListener('submit', handleFormSubmit);
    
    // Add real-time validation
    const inputs = form.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('blur', validateField);
        input.addEventListener('input', clearFieldError);
    });
}



function handleFormSubmit(e) {
    e.preventDefault();
    
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    
    // Validate form
    if (!validateForm(data)) {
        return;
    }
    
    // Show loading state
    const submitButton = form.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    submitButton.classList.add('loading');
    submitButton.disabled = true;
    submitButton.textContent = currentLanguage === 'sv' ? 'Skickar...' : 'Sending...';
    
    // Simulate form submission (replace with actual implementation)
    setTimeout(() => {
        // Create mailto link
        const mailtoLink = createMailtoLink(data);
        window.location.href = mailtoLink;
        
        // Reset form
        form.reset();
        
        // Show success message
        showMessage(
            currentLanguage === 'sv' 
                ? 'Tack för ditt meddelande! Din e-postklient öppnas nu.' 
                : 'Thank you for your message! Your email client is opening now.',
            'success'
        );
        
        // Reset button
        submitButton.classList.remove('loading');
        submitButton.disabled = false;
        submitButton.textContent = originalText;
    }, 1000);
}

function createMailtoLink(data) {
    const email = 'Rezaeskandari.ammori@yahoo.com';
    const subject = encodeURIComponent(`Portfolio Contact from ${data.name}`);
    const body = encodeURIComponent(
        `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`
    );
    
    return `mailto:${email}?subject=${subject}&body=${body}`;
}

function validateForm(data) {
    let isValid = true;
    
    // Validate name
    if (!data.name || data.name.trim().length < 2) {
        showFieldError('name', currentLanguage === 'sv' ? 'Namn måste vara minst 2 tecken' : 'Name must be at least 2 characters');
        isValid = false;
    }
    
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email || !emailRegex.test(data.email)) {
        showFieldError('email', currentLanguage === 'sv' ? 'Ange en giltig e-postadress' : 'Please enter a valid email address');
        isValid = false;
    }
    
    // Validate message
    if (!data.message || data.message.trim().length < 10) {
        showFieldError('message', currentLanguage === 'sv' ? 'Meddelandet måste vara minst 10 tecken' : 'Message must be at least 10 characters');
        isValid = false;
    }
    
    return isValid;
}

function validateField(e) {
    const field = e.target;
    const value = field.value.trim();
    
    clearFieldError(field.name);
    
    switch (field.name) {
        case 'name':
            if (value.length > 0 && value.length < 2) {
                showFieldError('name', currentLanguage === 'sv' ? 'Namn måste vara minst 2 tecken' : 'Name must be at least 2 characters');
            }
            break;
        case 'email':
            if (value.length > 0) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(value)) {
                    showFieldError('email', currentLanguage === 'sv' ? 'Ange en giltig e-postadress' : 'Please enter a valid email address');
                }
            }
            break;
        case 'message':
            if (value.length > 0 && value.length < 10) {
                showFieldError('message', currentLanguage === 'sv' ? 'Meddelandet måste vara minst 10 tecken' : 'Message must be at least 10 characters');
            }
            break;
    }
}

function showFieldError(fieldName, message) {
    const field = document.getElementById(fieldName);
    const existingError = field.parentNode.querySelector('.field-error');
    
    if (existingError) {
        existingError.remove();
    }
    
    const errorElement = document.createElement('div');
    errorElement.className = 'field-error';
    errorElement.style.color = 'var(--error-color, #ef4444)';
    errorElement.style.fontSize = 'var(--font-size-sm)';
    errorElement.style.marginTop = 'var(--spacing-xs)';
    errorElement.textContent = message;
    
    field.parentNode.appendChild(errorElement);
    field.style.borderColor = 'var(--error-color, #ef4444)';
}

function clearFieldError(fieldName) {
    const fieldNameStr = typeof fieldName === 'string' ? fieldName : fieldName.target.name;
    const field = document.getElementById(fieldNameStr);
    const errorElement = field.parentNode.querySelector('.field-error');
    
    if (errorElement) {
        errorElement.remove();
    }
    
    field.style.borderColor = '';
}

function showMessage(message, type = 'info') {
    // Remove existing messages
    const existingMessage = document.querySelector('.global-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    const messageElement = document.createElement('div');
    messageElement.className = `global-message ${type}`;
    messageElement.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
        z-index: var(--z-tooltip);
        animation: slideIn 0.3s ease;
    `;
    
    messageElement.textContent = message;
    document.body.appendChild(messageElement);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        messageElement.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            if (messageElement.parentNode) {
                messageElement.remove();
            }
        }, 300);
    }, 5000);
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Add CSS animations for messages
const messageStyles = document.createElement('style');
messageStyles.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(messageStyles);

// Performance optimizations
const debouncedResize = debounce(handleResize, 250);
const throttledScroll = throttle(handleScroll, 16); // 60fps

window.addEventListener('resize', debouncedResize);
window.addEventListener('scroll', throttledScroll);

// Keyboard navigation support
document.addEventListener('keydown', (e) => {
    // Toggle theme with Ctrl/Cmd + Shift + T
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'T') {
        e.preventDefault();
        toggleTheme();
    }
    
    // Toggle language with Ctrl/Cmd + Shift + L
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'L') {
        e.preventDefault();
        toggleLanguage();
    }
    
    // Escape key closes mobile menu
    if (e.key === 'Escape') {
        const hamburger = document.getElementById('hamburger');
        const navMenu = document.getElementById('nav-menu');
        
        if (navMenu.classList.contains('active')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    }
});

// Preload optimization
function preloadImages() {
    // Add any images that should be preloaded
    const imagesToPreload = [
        // Add image URLs here when you have actual images
    ];
    
    imagesToPreload.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// Initialize preloading
window.addEventListener('load', preloadImages);

// Service Worker registration (for future PWA capabilities)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Register service worker when you create one
        // navigator.serviceWorker.register('/sw.js');
    });
}

// Export functions for testing or external use
window.portfolioApp = {
    setTheme,
    setLanguage,
    showMessage,
    currentLanguage: () => currentLanguage,
    currentTheme: () => currentTheme
};