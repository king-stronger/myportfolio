
/**
 * Add an event listener to the menu button to toggle the menu on mobile
 */
const menu = document.getElementById('menu');
const openMenuButton = document.querySelector('.button-menu');
const closeMenuButton = document.querySelector('.close-menu');

openMenuButton.addEventListener('click', () => {
    menu.classList.add("show");
});

closeMenuButton.addEventListener('click', () => {
    menu.classList.remove("show");
});


/**
 * Add an event listener to modals button to toggle the respective modal
 */
const openModals = document.querySelectorAll('.open-modal');
const closeModals = document.querySelectorAll('.close-modal');

openModals.forEach(button => {
    button.addEventListener('click', () => {
        button.parentNode.parentNode.querySelector('.modal').showModal();
    });
});

closeModals.forEach(button => {
    button.addEventListener('click', () => {
        button.parentNode.close();
    });
});

// Initialiser MixItUp
const mixer = mixitup('#projects .grid', {
    selectors: {
        target: '.project'
    },
    animation: {
        duration: 300
    }
});

// Optionnel : Gestion des boutons de filtrage
const filterButtons = document.querySelectorAll('.filter');

filterButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        filterButtons.forEach(function(btn) {
            btn.classList.remove('active');
        });

        button.classList.add('active');
        
        const filter = button.getAttribute('data-filter');
        mixer.filter(filter); // Appliquer le filtre sélectionné
    });
});