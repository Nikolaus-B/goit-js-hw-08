import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');

const FORM_KEY = 'feedback-form-state';
let formElements = {};
savedData();
form.addEventListener('input', throttle(onInputForm, 500));

function onInputForm(e) {
  formElements[e.target.name] = e.target.value;

  localStorage.setItem('FORM_KEY', JSON.stringify(formElements));
}

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  console.log(JSON.parse(localStorage.getItem('FORM_KEY')));
  form.reset();
  localStorage.removeItem('FORM_KEY');
}

function savedData() {
  if (JSON.parse(localStorage.getItem('FORM_KEY'))) {
    input.value = JSON.parse(localStorage.getItem('FORM_KEY')).email;
    textarea.value = JSON.parse(localStorage.getItem('FORM_KEY')).message;
  }
}
