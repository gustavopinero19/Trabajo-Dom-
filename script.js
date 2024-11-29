// Referencias a elementos del DOM
const darkModeToggle = document.getElementById('dark-mode-toggle');
const scrollToTopButton = document.getElementById('scroll-to-top');
const body = document.body;

// Alternar modo oscuro
function toggleDarkMode() {
    body.classList.toggle('dark');
    localStorage.setItem('darkMode', body.classList.contains('dark') ? 'enabled' : 'disabled');
}

// Inicializar modo oscuro según localStorage
function initializeDarkMode() {
    if (localStorage.getItem('darkMode') === 'enabled') {
        body.classList.add('dark');
        darkModeToggle.checked = true;
    }
}

// Mostrar/ocultar botón "Volver arriba"
function handleScroll() {
    if (window.scrollY > 300) {
        scrollToTopButton.classList.remove('d-none');
    } else {
        scrollToTopButton.classList.add('d-none');
    }
}

// Desplazamiento suave al inicio
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
}

// Event Listeners
darkModeToggle.addEventListener('change', toggleDarkMode);
window.addEventListener('scroll', handleScroll);
scrollToTopButton.addEventListener('click', scrollToTop);

// Inicialización
initializeDarkMode();
