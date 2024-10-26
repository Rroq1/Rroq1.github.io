// Sélectionner l'élément de la navbar
const navbar = document.querySelector('#navbar');

let navScroll = 0;

window.addEventListener('scroll', () => {
    // Vérifie si l'utilisateur a fait défiler vers le bas ou vers le haut
    if (window.scrollY > navScroll) {
        // Défilement vers le bas
        navbar.style.top = '-120px'; // Ajuste cette valeur si nécessaire
    } else {
        // Défilement vers le haut
        navbar.style.top = '0';
    }

    // Met à jour la valeur de navScroll
    navScroll = window.scrollY;
});

// ScrollReveal configuration
ScrollReveal({
    reset: true,
    distance: '50px',
    duration: 2500,
    delay: 100
});

ScrollReveal().reveal('.mb-title, .tgr-title, .tgr-content', { delay: 500, origin: 'left' });
ScrollReveal().reveal('.mb-text, .ow-text', { delay: 500, origin: 'right' });
ScrollReveal().reveal('.ow-title', { delay: 500, origin: 'top' });
ScrollReveal().reveal('.tgr-text', { delay: 500, origin: 'bottom' });