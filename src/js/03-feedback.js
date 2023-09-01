import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');

const FORM_KEY = 'feedback-form-state';
const LocalStorageData = localStorage.getItem('FORM_KEY');
let formElements = {};

form.addEventListener('input', throttle(onInputForm, 500));
savedData();
function onInputForm(e) {
  formElements[e.target.name] = e.target.value;

  localStorage.setItem('FORM_KEY', JSON.stringify(formElements));
}

function savedData() {
  if (JSON.parse(LocalStorageData)) {
    input.value = JSON.parse(LocalStorageData).email;
    textarea.value = JSON.parse(LocalStorageData).message;
  }
}
form.addEventListener('submit', onSubmitForm);
function onSubmitForm(e) {
  e.preventDefault();
  console.log(JSON.parse(LocalStorageData));
  e.currentTarget.reset();
  localStorage.removeItem(FORM_KEY);
}
