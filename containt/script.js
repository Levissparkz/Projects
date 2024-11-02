// here i am selecting each input method//

const output_year = document.querySelector(".output-year");
const output_month = document.querySelector(".output-month");
const output_day = document.querySelector(".output-day");
const submit_button = document.querySelector(".submit-btn");

//here are the inputs elements //

let isValid = false;
const input_year = document.querySelector("#year");
const input_month = document.querySelector("#month");
const input_day = document.querySelector("#day");
submit_button.addEventListener("click", calculateDate);

//here are the error elements//

const error_year = document.querySelector(".error-year");
const error_month = document.querySelector(".error-month");
const error_day = document.querySelector(".error-day");

input_day.addEventListener("input", (e) => {
  if (+input_day.value > 31 || +input_day.value === 0) {
    error_day.textContent = "invalid input";
  } else {
    error_day.textContent = "";
    isValid = true;
  }
});

input_month.addEventListener("input", (e) => {
  if (+input_month.value > 12 || +input_month.value === 0) {
    error_month.textContent = "invalid input";
  } else {
    error_month.textContent = "";
    isValid = true;
  }
});

input_year.addEventListener("input", (e) => {
  if (+input_year.value < 1900 || +input_year.value > 3000) {
    error_year.textContent = "invalid input";
  } else {
    error_year.textContent = "";
    isValid = true;
  }
});

function calculateDate() {
  if (isValid) {
    let birthday = `${input_month.value}/${input_day.value}/${input_year.value}`;

    let birthdayObj = new Date(birthday);
    let ageDiffMill = Date.now() - birthdayObj;
    let ageDate = new Date(ageDiffMill);
    let ageYears = ageDate.getUTCFullYear() - 1970;
    let ageMonth = ageDate.getUTCMonth();
    let ageDay = ageDate.getUTCDate() - 1;

    //DISPLAYING ALL OUTPUT HERE//
    output_day.textContent = ageDay;
    output_month.textContent = ageMonth;
    output_year.textContent = ageYears;
  } else {
    alert("ERROR");
  }
}
