const languageButton = document.querySelector('.language-button');
const languageMenu = document.querySelector('#language-menu');

languageButton.addEventListener('click', () => {
    const rect = languageButton.getBoundingClientRect();

    languageMenu.style.top = `${rect.bottom}px`;
    languageMenu.style.left = `${rect.left + rect.width / 2}px`;
});



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

