const currentDate = new Date();

// Get various components of the date
const curYear = currentDate.getFullYear();
const curMonth = currentDate.getMonth() + 1; // Month is zero-based, so add 1
const curDay = currentDate.getDate();
const hours = currentDate.getHours();
const minutes = currentDate.getMinutes();
const seconds = currentDate.getSeconds();

// Display the current date and time
console.log(
  `Current Date and Time: ${curYear}-${curMonth}-${curDay} ${hours}:${minutes}:${seconds}`
);

const reset = () => {
  document.getElementsByClassName("error-d")[0].innerText = "";
  document.getElementsByClassName("error-m")[0].innerText = "";
  document.getElementsByClassName("error-y")[0].innerText = "";
};

function calculateAge() {
  const monthNames = () => {
    // a shorthand for if ((month == 4 || month == 6 || month == 9 || month == 11) && day > 30
    if ([4, 6, 9, 11].includes(month)) {
      day_total++;
      month_total--;
    } else if ([1, 3, 5, 7, 8, 10, 12].includes(month)) {
      day_total += 2;
      month_total--;
    } else {
      console.log(6);
    }
  };
  document.getElementsByClassName("error")[0].innerText = "";
  //3 Clear previous results
  document.getElementById("result").innerText = "";
  document.querySelectorAll(".input_box input").forEach((in_out) => {
    in_out.classList.remove("outline");
    // Trigger reflow to ensure the animation class is removed
    void in_out.offsetWidth;
  });

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

  outLine = document.querySelector(".input_box");
  input1 = document.querySelector(".in1");
  input2 = document.querySelector(".in2");
  input3 = document.querySelector(".in3");

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
  if ([4, 6, 9, 11].includes(month) && day > 30) {
    reset();
    document.getElementsByClassName("error")[0].innerText =
      "This month does not have more than 30days";
    return;
  }
  if (day <= 0) {
    input1.classList.add("outline");
    document.getElementsByClassName("error-d")[0].innerText =
      "Enter a valid day";
    return;
  }
  outLine.classList.remove("outline");
  // Check for error-d input
  if (isNaN(day) || isNaN(month) || isNaN(year)) {
    document.getElementsByClassName("error-d")[0].innerText = "Enter a day";
    document.getElementsByClassName("error-m")[0].innerText = "Enter a month";
    document.getElementsByClassName("error-y")[0].innerText = "Enter a year";
    outLine.classList.add("outline");
    return;
  } else {
    reset();
  }
  if (day > 31 || month > 12 || year > curYear) {

    if (year > curYear && day > 31 && month > 12) {
      document.getElementsByClassName("error-d")[0].innerText =
        "Must be a valid day";
      document.getElementsByClassName("error-m")[0].innerText =
        "Must be a valid month";
      document.getElementsByClassName("error-y")[0].innerText =
        "Must be a valid year";
      input3.classList.add("outline");
      input1.classList.add("outline");
      input2.classList.add("outline");

      return;
    } else if (day > 31 && month > 12) {
      input3.classList.remove("outline");
      document.getElementsByClassName("error-d")[0].innerText =
        "Must be a valid day";
      input1.classList.add("outline");
      document.getElementsByClassName("error-m")[0].innerText =
        "Must be a valid month";
      input2.classList.add("outline");
      return;
    } else if (year > curYear && month > 12) {
      input1.classList.remove("outline");
      document.getElementsByClassName("error-m")[0].innerText =
        "Must be a valid month";
      input2.classList.add("outline");
      document.getElementsByClassName("error-y")[0].innerText =
        "Must be a valid year";
      input3.classList.add("outline");
      return;
    } else if (year > curYear && day > 31) {
      input2.classList.remove("outline");
      document.getElementsByClassName("error-d")[0].innerText =
        "Must be a valid day";
      input1.classList.add("outline");
      document.getElementsByClassName("error-y")[0].innerText =
        "Must be a valid year";
      input3.classList.add("outline");
      return;
    } else {
      document.getElementsByClassName("error-d")[0].innerText = "";
    }
    if (day > 31) {
      document.getElementsByClassName("error-d")[0].innerText =
        "Must be a valid day";
      input1.classList.add("outline");
      return;
    } else {
      document.getElementsByClassName("error-d")[0].innerText = "";
    }
    if (month > 12) {
      document.getElementsByClassName("error-m")[0].innerText =
        "Must be a valid month";
      input2.classList.add("outline");
      return;
    } else {
      document.getElementsByClassName("error-m")[0].innerText = "";
    }
    if (year > curYear) {
      document.getElementsByClassName("error-y")[0].innerText =
        "Must be a valid year";
      input3.classList.add("outline");
      return;
    } else {
      document.getElementsByClassName("error-y")[0].innerText = "";
    }
  }
  let year_total, month_total, day_total;

  if (curMonth > month) {
    year_total = curYear - year;
    document.querySelector(".dash1").innerText = year_total;
  } else {
    year_total = curYear - year - 1;
    document.querySelector(".dash1").innerText = year_total;
  }

  if (month <= curMonth) {
    month_total = curMonth - month;
    monthNames();
    document.querySelector(".dash2").innerText = month_total + 1;
  } else {
    month_total = 12 - (month - curMonth);
    monthNames();
    document.querySelector(".dash2").innerText = month_total;
  }

  if (curDay >= day) {
    day_total = curDay - day;
    monthNames();
    document.querySelector(".dash3").innerText = day_total;
  } else {
    const tempDate = new Date(curYear, curMonth - 1, 0); // Get the last day of the previous month
    day_total = tempDate.getDate() - (day - curDay);
    monthNames();
    document.querySelector(".dash3").innerText = day_total;
  }
}
const tempDate = new Date(curYear, curMonth - 1, 0); // Get the last day of the previous month
console.log(tempDate);
document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    calculateAge();
  }
});
