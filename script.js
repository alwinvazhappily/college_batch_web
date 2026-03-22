document.addEventListener('DOMContentLoaded', () => {
    // ──────────── NAVBAR SCROLL ────────────
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
    });

    // ──────────── MOBILE MENU ────────────
    const menuToggle = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');

    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('open');
        });

        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('open');
            });
        });
    }

    // ──────────── FADE-IN ON SCROLL ────────────
    const fadeElements = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    fadeElements.forEach(el => observer.observe(el));

    // ──────────── CONTACT FORM ────────────
    const form = document.getElementById('contactForm');
    if (!form) return;

    const toast = document.getElementById('toast');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const mobileInput = document.getElementById('mobile');
    const messageInput = document.getElementById('message');
    const termsInput = document.getElementById('terms');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const showError = (inputElement, errorId, message) => {
        const errorElement = document.getElementById(errorId);
        const groupElement = inputElement.closest('.input-group') || inputElement.closest('.checkbox-group');
        groupElement.classList.add('error');
        if (message) errorElement.innerText = message;
        return false;
    };

    const removeError = (inputElement) => {
        const groupElement = inputElement.closest('.input-group') || inputElement.closest('.checkbox-group');
        groupElement.classList.remove('error');
        return true;
    };

    const validateName = () => {
        const val = nameInput.value.trim();
        if (val === '') return showError(nameInput, 'nameError', 'Name is required');
        if (val.length < 2) return showError(nameInput, 'nameError', 'Name must be at least 2 characters long');
        return removeError(nameInput);
    };

    const validateEmail = () => {
        const val = emailInput.value.trim();
        if (val === '') return showError(emailInput, 'emailError', 'Email is required');
        if (!emailRegex.test(val)) return showError(emailInput, 'emailError', 'Please enter a valid email address');
        return removeError(emailInput);
    };

    const validateMobile = () => {
        const val = mobileInput.value.replace(/[\s+\-]/g, '');
        if (val === '') return showError(mobileInput, 'mobileError', 'Mobile number is required');
        if (!/^\d{10,15}$/.test(val)) return showError(mobileInput, 'mobileError', 'Please enter a valid mobile number (10-15 digits)');
        return removeError(mobileInput);
    };

    const validateMessage = () => {
        const val = messageInput.value.trim();
        if (val === '') return showError(messageInput, 'messageError', 'Message is required');
        if (val.length < 10) return showError(messageInput, 'messageError', 'Message must be at least 10 characters long');
        return removeError(messageInput);
    };

    const validateTerms = () => {
        if (!termsInput.checked) return showError(termsInput, 'termsError', 'You must agree to the terms and conditions');
        return removeError(termsInput);
    };

    // Real-time validation
    nameInput.addEventListener('input', validateName);
    emailInput.addEventListener('input', validateEmail);
    mobileInput.addEventListener('input', validateMobile);
    messageInput.addEventListener('input', validateMessage);
    termsInput.addEventListener('change', validateTerms);

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const isValid = validateName() & validateEmail() & validateMobile() & validateMessage() & validateTerms();

        if (isValid) {
            showToast();
            form.reset();
        } else {
            const btn = form.querySelector('.submit-btn');
            btn.style.animation = 'none';
            btn.offsetHeight;
            btn.style.animation = 'shake 0.4s ease';
        }
    });

    let toastTimer;
    const showToast = () => {
        toast.classList.add('active');
        clearTimeout(toastTimer);
        toastTimer = setTimeout(() => {
            toast.classList.remove('active');
        }, 4000);
    };
});
