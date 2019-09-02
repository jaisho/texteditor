"use strict";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('serviceworker.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

const textArea = document.querySelector('.editor__textArea--js');
const buttonLoad = document.querySelector('.editor__button--load-js');
const buttonSave = document.querySelector('.editor__button--save-js');
const buttonDelete = document.querySelector('.editor__button--delete-js');

buttonSave.addEventListener('click', (e) => {
  e.preventDefault();
  localStorage.setItem("textArea", textArea.value)
});

buttonLoad.addEventListener('click', (e) => {
  e.preventDefault();
  textArea.innerHTML = localStorage.getItem("textArea", e.target.value);
});

buttonDelete.addEventListener('click', (e) => {
  e.preventDefault();
  localStorage.removeItem("textArea");
  textArea.value = "";
});


console.log(`Hello world!`);


