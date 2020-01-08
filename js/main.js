let lang = {
  en: {
    HEADER: "Some header",
    CONTENT: "Some content",
  },
  ru: {
    HEADER: "Какой-то заголовок",
    CONTENT: "Какое-то содержимое",
  }
};

function __(key) {
  document.write(lang[getLanguage()][key]);
}

function changeLanguage(code) {
  window.localStorage.setItem("lang", code);
  //console.log(langCode);

  document.location.reload();
}

function getLanguage() {
  let langCode = window.localStorage.getItem("lang");
  console.log(langCode);
  if (!langCode) {
    langCode = "en";
    changeLanguage("en");
  }

  return langCode;
}
