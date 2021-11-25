// отримую теги для щитування та запису даних
const refs = {
  input: document.querySelector(".js-input"),
  content: document.querySelector(".js-content"),
  resultCrypt: document.querySelector(".js-result-crypt"),
};

// получаю значення яке вводить користувача
refs.input.addEventListener("input", onAddContent);
refs.input.addEventListener("input", onInputChange);
// =========================================

// записую контент який ввів користувач
function onAddContent(event) {
  const getContent = event.currentTarget.value;

  refs.content.innerHTML = getContent;
}

// шифрую дані які ввів користувач і вивожу їх
function onInputChange(event) {
  const vl = event.currentTarget.value;

  const encrypted = CryptoJS.AES.encrypt(vl, "val");

  refs.resultCrypt.innerHTML = encrypted;
}
