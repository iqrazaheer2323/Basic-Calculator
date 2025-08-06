const buttonsEl = document.querySelectorAll("button");
const inputEl = document.getElementById("result");

for (let i = 0; i < buttonsEl.length; i++) {
  buttonsEl[i].addEventListener("click", () => {
    const buttonValue = buttonsEl[i].textContent;
    if (buttonValue === "C") {
      clearRes();
    } else if (buttonValue === "=") {
      calculateRes();
    } else {
      appendValue(buttonValue);
    }
  });
}

function clearRes() {
  inputEl.value = "";
}

function calculateRes() {
  try {
    inputEl.value = eval(inputEl.value);
  } catch (error) {
    inputEl.value = "Error";
  }
}

function appendValue(value) {
  inputEl.value += value;
}
