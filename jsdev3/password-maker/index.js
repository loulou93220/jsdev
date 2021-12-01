const dataLowercase = "azertyuiopqsdfghjklmwxcvbn";
const dataUppercase = dataLowercase.toLocaleUpperCase();
const dataNumbers = "0123456789";
const dataSymbols = "*$¥€)('&<>éç-_";
const rangeValue = document.getElementById('password-length');
const passwordOutput = document.getElementById('password-output');

console.log(rangeValue);
console.log(passwordOutput);

function generatePassword() {
  let data = [];
  let password = "";

  if (lowercase.checked) data.push(...dataLowercase);
  if (uppercase.checked) data.push(...dataUppercase);
  if (number.checked) data.push(...dataNumbers);
  if (symbols.checked) data.push(...dataSymbols);

  if (data.length === 0) {
    alert("Veuillez sélectionner des critères");
    return;
  }

  for (i = 0; i < rangeValue; i++) {
    password += data[Math.floor(Math.random() * data.length)];
  }
  passwordOutput.value = password;
}
generateButton.addEventListener("click", generatePassword);
