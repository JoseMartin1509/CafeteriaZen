// ========================================
// Cafetería Zen - JavaScript Principal
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    // Inicializar todas las funcionalidades
    initSmoothScroll();
    initNavbarScroll();
    initScrollAnimations();
    initGalleryLightbox();
    initParallaxEffect();
});

// ========================================
// Navegación suave
// ========================================
function initSmoothScroll() {
    const navLinks = document.querySelectorAll('.navbar a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.offsetTop - navbarHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ========================================
// Navbar con efecto al hacer scroll
// ========================================
function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;

        // Añadir clase cuando hay scroll
        if (currentScrollY > 100) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }

        // Ocultar/mostrar navbar según dirección del scroll
        if (currentScrollY > lastScrollY && currentScrollY > 500) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }

        lastScrollY = currentScrollY;
    });

    // Resaltar enlace activo según la sección visible
    const sections = document.querySelectorAll('section[id], header[id]');
    const navItems = document.querySelectorAll('.navbar a');

    window.addEventListener('scroll', () => {
        let current = '';
        const scrollPosition = window.scrollY + 200;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${current}`) {
                item.classList.add('active');
            }
        });
    });
}

// ========================================
// Animaciones al hacer scroll
// ========================================
function initScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-visible');

                // Animar elementos hijos con delay escalonado
                const children = entry.target.querySelectorAll('.animate-child');
                children.forEach((child, index) => {
                    setTimeout(() => {
                        child.classList.add('animate-visible');
                    }, index * 100);
                });
            }
        });
    }, observerOptions);

    // Elementos a observar
    const animatedElements = document.querySelectorAll(
        '.best-sellers-item, .menu-item, .location-content > *, .welcome-content, .product-content'
    );

    animatedElements.forEach(el => {
        el.classList.add('animate-on-scroll');
        observer.observe(el);
    });
}

// ========================================
// Lightbox para galería
// ========================================
function initGalleryLightbox() {
    const galleryImages = document.querySelectorAll('.gallery img');

    // Crear el lightbox
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `
        <button class="lightbox-close" aria-label="Cerrar">&times;</button>
        <button class="lightbox-prev" aria-label="Anterior">&#10094;</button>
        <button class="lightbox-next" aria-label="Siguiente">&#10095;</button>
        <img src="" alt="Imagen ampliada">
        <p class="lightbox-caption"></p>
    `;
    document.body.appendChild(lightbox);

    const lightboxImg = lightbox.querySelector('img');
    const lightboxCaption = lightbox.querySelector('.lightbox-caption');
    const closeBtn = lightbox.querySelector('.lightbox-close');
    const prevBtn = lightbox.querySelector('.lightbox-prev');
    const nextBtn = lightbox.querySelector('.lightbox-next');

    let currentIndex = 0;

    // Abrir lightbox
    galleryImages.forEach((img, index) => {
        img.addEventListener('click', () => {
            currentIndex = index;
            updateLightbox();
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    // Cerrar lightbox
    closeBtn.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
    });

    // Navegación
    prevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
        updateLightbox();
    });

    nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        currentIndex = (currentIndex + 1) % galleryImages.length;
        updateLightbox();
    });

    // Teclas de navegación
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;

        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') {
            currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
            updateLightbox();
        }
        if (e.key === 'ArrowRight') {
            currentIndex = (currentIndex + 1) % galleryImages.length;
            updateLightbox();
        }
    });

    function updateLightbox() {
        const currentImg = galleryImages[currentIndex];
        lightboxImg.src = currentImg.src;
        lightboxCaption.textContent = currentImg.alt;
    }

    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// ========================================
// Efecto parallax suave
// ========================================
function initParallaxEffect() {
    const parallaxElements = document.querySelectorAll('.best-sellers, .new-product');

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;

        parallaxElements.forEach(el => {
            const speed = 0.3;
            const rect = el.getBoundingClientRect();
            const visible = rect.top < window.innerHeight && rect.bottom > 0;

            if (visible) {
                const yPos = (scrollY - el.offsetTop) * speed;
                el.style.backgroundPositionY = `${yPos}px`;
            }
        });
    });
}

// ========================================
// Añadir estilos dinámicos para animaciones
// ========================================
const dynamicStyles = document.createElement('style');
dynamicStyles.textContent = `
    /* Navbar scrolled */
    .navbar-scrolled {
        background: rgba(26, 15, 10, 0.98) !important;
        box-shadow: 0 5px 30px rgba(0, 0, 0, 0.3);
    }

    .navbar {
        transition: all 0.3s ease, transform 0.3s ease;
    }

    /* Active nav link */
    .navbar a.active {
        color: #c9a227 !important;
    }

    .navbar a.active::after {
        width: 100% !important;
    }

    /* Animaciones de scroll */
    .animate-on-scroll {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }

    .animate-on-scroll.animate-visible {
        opacity: 1;
        transform: translateY(0);
    }

    /* Lightbox styles */
    .lightbox {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.95);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
    }

    .lightbox.active {
        opacity: 1;
        visibility: visible;
    }

    .lightbox img {
        max-width: 90%;
        max-height: 80vh;
        object-fit: contain;
        border-radius: 1rem;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
        transform: scale(0.9);
        transition: transform 0.3s ease;
    }

    .lightbox.active img {
        transform: scale(1);
    }

    .lightbox-close,
    .lightbox-prev,
    .lightbox-next {
        position: absolute;
        background: rgba(201, 162, 39, 0.9);
        color: #1a0f0a;
        border: none;
        cursor: pointer;
        font-size: 2rem;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.3s ease;
    }

    .lightbox-close:hover,
    .lightbox-prev:hover,
    .lightbox-next:hover {
        background: #c9a227;
        transform: scale(1.1);
    }

    .lightbox-close {
        top: 20px;
        right: 20px;
        font-size: 2.5rem;
    }

    .lightbox-prev {
        left: 20px;
        top: 50%;
        transform: translateY(-50%);
    }

    .lightbox-next {
        right: 20px;
        top: 50%;
        transform: translateY(-50%);
    }

    .lightbox-prev:hover,
    .lightbox-next:hover {
        transform: translateY(-50%) scale(1.1);
    }

    .lightbox-caption {
        position: absolute;
        bottom: 30px;
        left: 50%;
        transform: translateX(-50%);
        color: #f5f5f5;
        font-size: 1.4rem;
        text-align: center;
        padding: 1rem 2rem;
        background: rgba(26, 15, 10, 0.8);
        border-radius: 0.5rem;
        max-width: 80%;
    }

    /* Responsive lightbox */
    @media (max-width: 768px) {
        .lightbox-close,
        .lightbox-prev,
        .lightbox-next {
            width: 40px;
            height: 40px;
            font-size: 1.5rem;
        }

        .lightbox-close {
            top: 10px;
            right: 10px;
        }

        .lightbox-prev {
            left: 10px;
        }

        .lightbox-next {
            right: 10px;
        }
    }
`;
document.head.appendChild(dynamicStyles);
