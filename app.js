let textInput = document.querySelector("#txt-input");
let button = document.querySelector("#btn-translate");
let output = document.querySelector("#output");
let copyrightText = document.querySelector("#copyrt-txt");

let serverUrl = "https://api.funtranslations.com/translate/minion.json";

/**
 * Function to get banana translation url
 * @param input
 * @returns translation url
 */
let getBananaTranslationUrl = (input) => serverUrl.concat("?text=", input);

/**
 * Funtion to handle error
 * @param error
 */
function errorHandler(error) {
  console.error(error);
  alert("Something went wrong with our server! Try again after some time");
}

/**
 * Function to handle click event
 */
function clickHandler() {
  fetch(getBananaTranslationUrl(textInput.value))
    .then((response) => response.json())
    .then((jsonData) => {
      let translatedText = jsonData.contents.translated;
      output.innerText = translatedText;
    })
    .catch(errorHandler);
}

/**
 * To make the copyright year generic
 */
let getCurrentYear = new Date().getFullYear();
copyrightText.innerText = `© ${getCurrentYear} | All Rights Reserved`;

/**
 * Listening to the click event
 */
button.addEventListener("click", clickHandler);
