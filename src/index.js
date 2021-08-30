const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const errorMessage = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");
const noteStore = [2000, 500, 200, 100, 20, 10, 5, 1];

checkButton.addEventListener("click", function validateBillAmount() {
  hideMessage();
  if (billAmount.value > 0) {
    validateCashAmount();
  } else {
    showMessage("Bill Amount must be greater than 0", "orange");
  }
});

function validateCashAmount() {
  if (cashGiven.value >= billAmount.value) {
    const cashToReturn = cashGiven.value - billAmount.value;
    calculateNotes(cashToReturn);
  } else {
    showMessage("Invalid cash amount", "red");
  }
}

function calculateNotes(cashToReturn) {
  for (let i = 0; i < noteStore.length; i++) {
    const numberOfNotes = Math.trunc(cashToReturn / noteStore[i]);
    cashToReturn = cashToReturn % noteStore[i];
    noOfNotes[i].innerText = numberOfNotes;
  }
  showMessage("Trust us and give the following change😎", "green");
}

function hideMessage() {
  errorMessage.style.display = "none";
}

function showMessage(msg, color) {
  errorMessage.style.display = "block";
  errorMessage.style.background = color;
  errorMessage.innerText = msg;
}
