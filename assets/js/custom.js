let displayView = document.getElementById("result-display");
function insertNumber(number) {
  displayView.value += number;
}
function insertClear() {
  displayView.value = " ";
}
function calculate() {
  let result = displayView.value;
  if (result == " " || result == "") {
    displayView.value = " ";
  } else {
    displayView.value = eval(result);
  }
}
function deleteNumber() {
  displayView.value = displayView.value.slice(0, -1);
}
