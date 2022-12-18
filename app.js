let textInput = document.querySelector("#txt-input");
let button = document.querySelector("#btn-translate");
let output = document.querySelector("#output");

let serverUrl = "https://api.funtranslations.com/translate/minion.json";

let getTranslationUrl = (input) => serverUrl.concat("?text=", input);

function errorHandler(error) {
  console.error(error);
  alert("Something went wrong with our server! Try again after some time");
}

function clickHandler() {
  fetch(getTranslationUrl(textInput.value))
    .then((response) => response.json())
    .then((jsonData) => {
      let translatedText = jsonData.contents.translated;
      output.innerText = translatedText;
    })
    .catch(errorHandler);
}

button.addEventListener("click", clickHandler);
