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

