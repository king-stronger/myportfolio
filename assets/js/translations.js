//Languages supported
const translations = {
    en: null,
    fr: null
}

const basePath = window.location.pathname.includes("/myportfolio/")
    ? "/myportfolio/"
    : "/";


/**
 * Load the translations
 * @returns {void}
 */
async function loadTranslations() {
    const [enData, frData] = await Promise.all([
        fetch(`${basePath}assets/translations/en.json`).then(res => res.json()),
        fetch(`${basePath}assets/translations/fr.json`).then(res => res.json())
    ]);
    translations.en = enData;
    translations.fr = frData;
}

/**
 * To change the language of every element
 * @param {String} lang
 */
function changeLanguage (lang){
    localStorage.setItem('selectedLanguage', lang);

    const elements = document.querySelectorAll("[data-translate]");

    elements.forEach(element => {
        let key = element.getAttribute('data-translate');

        element.textContent = getTranslation(key.split('.'), translations, lang);
    });
}

/**
 * 
 * @param {Array} keys The splitted key in an array of keys, to traverse the translation object
 * @param {Object} translations The translation object which contains all the translation
 * @param {String} lang The language selected
 * @returns {String} Return the translation of the key selected
 */
function getTranslation(keys, translations, lang) {
    return keys.reduce((acc, key) => acc[key], translations[lang] || {});
}

const languageButtons = document.querySelectorAll(".language-buttons");

document.addEventListener("DOMContentLoaded", async () => {
    await loadTranslations();

    if(navigator.language.startsWith('fr')){
        changeLanguage('fr');
    }

    languageButtons.forEach(languageButton => {
        languageButton.addEventListener('click', (event) => {
            let lang = event.target.getAttribute("data-lang");
            changeLanguage(lang);
        });
    });
});