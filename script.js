
const display = document.querySelector('.display');

function appendChar(value) {
  display.value += value;
}

function clearAll() {
  display.value = '';
}

function deleteLastChar() {
  display.value = display.value.slice(0, -1);
}

function output() {
  try {
    const result = eval(display.value);
    display.value = result;
  } catch (error) {
    display.value = 'Error';
  }
}