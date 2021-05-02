const pwEl = document.getElementById("pw");
const copyEl = document.getElementById("copy");
const lenEl = document.getElementById("len");
const upperEl = document.getElementById("upper");
const lowerEl = document.getElementById("lower");
const numberEl = document.getElementById("number");
const symbolEl = document.getElementById("symbol");
const generateEl = document.getElementById("generate");

const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()-+_=";

function getLowerCase() {
  // returning a random letter from "lowerLetters" for ex: lowerLetters[3] will return the letter from the given index i.e "D"
  return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
}

function getUpperCase() {
  // returning a random letter from "upperLetters"
  return upperLetters[Math.floor(Math.random() * upperLetters.length)];
}

function getNumber() {
  // returning a random number from "numbers"
  return numbers[Math.floor(Math.random() * numbers.length)];
}

function getSymbol() {
  //returning a random symbol from "symbols"
  return symbols[Math.floor(Math.random() * symbols.length)];
}

function generatePassword() {
  const len = lenEl.value;

  let password = "";
  //This is done to make sure that password fulfills the condition i.e must contains lower upper number symbol.
  if (upperEl.checked) {
    password += getUpperCase();
  }

  if (lowerEl.checked) {
    password += getLowerCase();
  }

  if (numberEl.checked) {
    password += getNumber();
  }

  if (symbolEl.checked) {
    password += getSymbol();
  }
  // After fulfills the conditions selected by the user the rest of the letters numbers and symbols are inserted into the password.
  // Note: Each password will have to first fulfill the checked then rest will be done for example if all the checkbox will be checked then the first four characters contain Uppercase letter, Lowercase letter, number, symbol.
  for (let i = password.length; i < len; i++) {
    const x = generateX();
    password += x;
  }

  pwEl.innerText = password;
}

function generateX() {
  const xs = [];

  if (upperEl.checked) {
    xs.push(getUpperCase());
  }

  if (lowerEl.checked) {
    xs.push(getLowerCase());
  }

  if (numberEl.checked) {
    xs.push(getNumber());
  }

  if (symbolEl.checked) {
    xs.push(getSymbol());
  }

  if (xs.length === 0) return "";

  return xs[Math.floor(Math.random() * xs.length)];
}

generateEl.addEventListener("click", generatePassword);

copyEl.addEventListener("click", () => {
  const textarea = document.createElement("textarea");
  const password = pwEl.innerText;

  if (!password) {
    return;
  }

  textarea.value = password;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
  alert("Password copied to clipboard");
});
