const currentDate = new Date();

// Get various components of the date
const curYear = currentDate.getFullYear();
const curMonth = currentDate.getMonth(); // Month is zero-based, so add 1
const curDay = currentDate.getDate();
const hours = currentDate.getHours();
const minutes = currentDate.getMinutes();
const seconds = currentDate.getSeconds();

// Display the current date and time
console.log(
  `Current Date and Time: ${curYear}-${curMonth}-${curDay} ${hours}:${minutes}:${seconds}`
);

const reset = () => {
  document.getElementsByClassName("valid")[0].innerText = "";
  document.getElementsByClassName("valid1")[0].innerText = "";
  document.getElementsByClassName("valid2")[0].innerText = "";
};

function calculateAge() {
  // Clear previous results
  document.getElementById("result").innerText = "";

  document.querySelector(".dash1");
  document.querySelector(".dash2");
  document.querySelector(".dash3");
  //remove class
  document.querySelectorAll(".agecalc span").forEach((span) => {
    span.classList.remove("animate");
    // Trigger reflow to ensure the animation class is removed
    void span.offsetWidth;
  });
  // Add animation class to trigger animation
  document.querySelector(".dash1").classList.add("animate");
  document.querySelector(".dash2").classList.add("animate");
  document.querySelector(".dash3").classList.add("animate");
  // Get input values
  const day = parseInt(document.getElementById("day").value);
  const month = parseInt(document.getElementById("month").value);
  const year = parseInt(document.getElementById("year").value);

  if (day > 28 && month == 2) {
    document.getElementsByClassName("error")[0].innerText =
      "Feb. has only 28 days and it is not a leap year";
    reset();

    return;
  }
  if ((month == 4 || month == 6 || month == 9 || month == 11) && day > 30) {
    reset();
    document.getElementsByClassName("error")[0].innerText =
      "This month does not have more than 30days";
    return;
  }

  // Check for valid input
  if (isNaN(day) || isNaN(month) || isNaN(year)) {
    document.getElementsByClassName("valid")[0].innerText = "Enter a day";
    document.getElementsByClassName("valid1")[0].innerText = "Enter a month";
    document.getElementsByClassName("valid2")[0].innerText = "Enter a year";
    return;
  } else {
    reset();
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
    year_total = curYear - year;
    year_total--;

    document.querySelector(".dash1").innerText = year_total;

    if (month <= curMonth) {
      month_total = curMonth - month;
      document.querySelector(".dash2").innerText = month_total;
    } else {
      month_total = 12 - Math.abs(month - curMonth);
      document.querySelector(".dash2").innerText = month_total;
    }
    if (curDay > day) {
      document.querySelector(".dash3").innerText = Math.abs(curDay - day);
      month_total += 1;
      document.querySelector(".dash2").innerText = month_total;
    } else {
      document.querySelector(".dash3").innerText = 31 - Math.abs(curDay - day);
    }
  }
}
