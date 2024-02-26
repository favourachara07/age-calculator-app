// document.getElementsByClassName("submit").onclick = function () {
//   // Retrieve values from input fields
//   var dayValue = document.getElementById("dd").value;
//   var monthValue = document.getElementById("mm").value;
//   var yearValue = document.getElementById("yyyy").value;

//   // Do something with the values (e.g., log to console)
//   console.log("Day:", dayValue);
//   console.log("Month:", monthValue);
//   console.log("Year:", yearValue);
// }
// const ageCalc = () => {
//   let errorHandle = document.getElementsByClassName("errHan");
//   errorHandle.innerHTML = "";
//   // Check if the input values are valid numbers
//   if (isNaN(day) || isNaN(month) || isNaN(year)) {
//     errorHandle.innerHTML =
//       "Please enter valid numbers for day, month, and year.";
//     return;
//   }

//   // Validate the day based on the month
//   if (day < 1 || day > 31) {
//     errorHandle.innerHTML = "Invalid day. Please enter a day between 1 and 31.";
//     return;
//   }

//   // Validate February (assuming not considering leap years for simplicity)
//   if (month === 2 && day > 28) {
//     errorHandle.innerHTML =
//       "Invalid day for February. Please enter a day between 1 and 28.";
//     return;
//   }

//   // Validate months with 30 days
//   if ((month === 4 || month === 6 || month === 9 || month === 11) && day > 30) {
//     errorHandle.innerHTML =
//       "Invalid day for this month. Please enter a day between 1 and 30.";
//     return;
//   }

//   // Perform age calculation logic here
//   // ...

//   // If all validations pass, proceed with age calculation
//   errorHandle.innerHTML = "Age calculation successful!";
// };
// Create a new Date object
const currentDate = new Date();

// Get various components of the date
const curYear = currentDate.getFullYear();
const curMonth = currentDate.getMonth() ; // Month is zero-based, so add 1
const curDay = currentDate.getDate();
const hours = currentDate.getHours();
const minutes = currentDate.getMinutes();
const seconds = currentDate.getSeconds();

// Display the current date and time
console.log(
  `Current Date and Time: ${curYear}-${curMonth}-${curDay} ${hours}:${minutes}:${seconds}`
);

function calculateAge() {
  // Clear previous results
  document.getElementById("result").innerText = "";

  // Get input values
  const day = parseInt(document.getElementById("day").value);
  const month = parseInt(document.getElementById("month").value);
  const year = parseInt(document.getElementById("year").value);

  // Check for valid input
  if (isNaN(day) || isNaN(month) || isNaN(year)) {
    document.getElementsByClassName("valid")[0].innerText = "Enter a day";
    document.getElementsByClassName("valid1")[0].innerText = "Enter a month";
    document.getElementsByClassName("valid2")[0].innerText = "Enter a year";
    return;
  } else {
    document.getElementsByClassName("valid")[0].innerText = "";
  }
  if (day > 31 || month > 12 || year > curYear) {
    if (day > 31 || day > curDay) {
      document.getElementsByClassName("valid")[0].innerText =
        "Must be a valid day";
    } else {
      document.getElementsByClassName("valid")[0].innerText = "";
    }
    if (month > 12 || month > curMonth) {
      document.getElementsByClassName("valid1")[0].innerText =
        "Must be a valid month";
    } else {
      document.getElementsByClassName("valid1")[0].innerText = "";
    }
    if (year > curYear) {
      document.getElementsByClassName("valid2")[0].innerText =
        "Must be a valid year";
    } else {
      document.getElementsByClassName("valid2")[0].innerText = "";
    }
  }
  if (day <= curDay || month <= 12 || year <= curYear) {
    if (day !== curDay && month !== curMonth) {
      year_total = curYear - year;
      year_total--;

      document.querySelector(".dash1").innerText = year_total;
    }
    if (month <= curMonth) {
      month_total = curMonth - month;
      document.querySelector(".dash2").innerText = month_total;
    } else {
      month_total = 12 - Math.abs((month - curMonth));
      document.querySelector(".dash2").innerText = month_total;
    }
    if (curDay>day) {
      document.querySelector(".dash3").innerText = Math.abs(curDay - day);  
      month_total += 1;
      document.querySelector(".dash2").innerText = month_total;
    } else {
      document.querySelector(".dash3").innerText = 31-(Math.abs(curDay - day));
    }
    
  }
}
