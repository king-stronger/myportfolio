
/**
 * Add an event listener to the menu button to toggle the menu on mobile
 */
const menuButton = document.querySelector('.button-menu');
const menu = document.getElementById('nav');

menuButton.addEventListener('click', () => {
    let navMobile = menu.classList.contains('nav-mobile');

    if(navMobile){
        menu.classList.add('nav');
        menu.classList.remove('nav-mobile');
    } else {
        menu.classList.remove('nav');
        menu.classList.add('nav-mobile');
    }
});

/**
 * Add an event listener to the language button to to toggle the language
 */


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

