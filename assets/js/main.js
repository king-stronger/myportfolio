
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

