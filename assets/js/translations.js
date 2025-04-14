//Languages supported
const translations = {
    en: null,
    fr: null
}

const basePath = window.location.pathname.includes("/myportfolio/")
    ? "/myportfolio/"
    : "/";

/**
 * Add an event listener to the language button to to toggle the language
 */
const languageImage = document.getElementById("language-image");
const languageButton = document.getElementById("language-button");

languageButton.addEventListener("click", (e) => {
    if(languageImage.getAttribute("src") === "assets/images/language/english.svg"){
        languageImage.setAttribute("src", "assets/images/language/french.svg");
    } else {
        languageImage.setAttribute("src", "assets/images/language/english.svg");
    } 
});

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
        const translation = getTranslation(key.split('.'), translations, lang);
    
        if (translation !== undefined) {
            element.textContent = translation;
        }
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
    return keys.reduce((acc, key) => {
        if (acc && key in acc) {
            return acc[key];
        } else {
            console.warn(`Translation missing for key: ${keys.join('.')}`);
            return undefined;
        }
    }, translations[lang]);
}


function changeCV(lang){
    const cv = document.getElementById("cv-button");

    if(lang === "fr"){
        cv.setAttribute("href", "assets/cv-fr.pdf")
    } else {
        cv.setAttribute("href", "assets/cv-en.pdf")
    }
}

document.addEventListener("DOMContentLoaded", async () => {
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'en';

    await loadTranslations();

    if (savedLanguage === 'fr') {
        changeLanguage(savedLanguage);
        languageButton.setAttribute("data-lang", "en");
        languageImage.setAttribute("src", `assets/images/language/english.svg`);
        changeCV(savedLanguage);
    }
    

    languageButton.addEventListener('click', (event) => {
        let lang = languageButton.getAttribute("data-lang");

        changeLanguage(lang);

        languageButton.setAttribute("data-lang", `${lang === 'en' ? 'fr' : 'en'}`);
        languageImage.setAttribute("src", `assets/images/language/${lang === 'en' ? 'french' : 'english'}.svg`);
        
        changeCV(lang);
    });
});