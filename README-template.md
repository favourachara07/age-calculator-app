# Frontend Mentor - Age calculator app solution

This is a solution to the [Age calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View an age in years, months, and days after submitting a valid date through the form
- Receive validation errors if:
  - Any field is empty when the form is submitted
  - The day number is not between 1-31
  - The month number is not between 1-12
  - The year is in the future
  - The date is invalid e.g. 31/04/1991 (there are 30 days in April)
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: See the age numbers animate to their final number when the form is submitted

### Screenshot

![](./assets/images/Screenshot%20(783).png)




### Links

- Solution URL: [Age Calculator](https://your-solution-url.com)
- Live Site URL: [Age Calculator Site](https://favourachara07.github.io/age-calculator-app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Vanilla JS


### What I learned

I really learned a lot during this project, particularly while working on the JavaScript section. This project required calculations that can only be achieved through logical thinking and reasoning. In the HTML section, I developed a deeper understanding of classes, IDs, and the appropriate use of elements. With CSS, I honed a styling method that suits me and tackled challenging concepts by applying them in my styles. In the JavaScript section, I gained a better understanding of the DOM, if-else statements, and further developed my critical thinking and reasoning skills.

To see how you can add code snippets, see below:

```html
<div class="agecalc">
        <div class="y"><span class="dash1">--</span> years</div>
        <div class="m"><span class="dash2">--</span> <span class="per">months</span></div>
        <div class="d"><span class="dash3">--</span> days</div>
      </div>
```
```css
/* the animation of the age numbers */
.animate{
    opacity: 0;
    animation: myfirst 1s ease-in-out 0.6s normal forwards;
}
@keyframes myfirst {
    0% {
        opacity: 0%;
    }

    100% {
        opacity: 100%;
    }
}
```
```js
// the main calculation behind the age calculator
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
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.



### Continued development

I hope to focus on learning and working with React after I have completed two more projects with HTML, CSS, and JS because working with and manipulating the DOM directly by myself is very tiring. I want to establish a solid foundation before moving on to React. Additionally, I aim to master the art of making my code shorter, more efficient, and cleaner



### Useful resources

- [W3Schools](https://www.w3schools.com/css) - This helped me for the animation of the age numbers reason. I really liked and I have use this platform before and will continue use it going forward.


## Author

- Website - [Favour Achara](https://www.your-site.com)
- Frontend Mentor - [@favourachara07](https://www.frontendmentor.io/profile/favourachara07)
- Twitter - [@favour2207](https://www.twitter.com/favour2207)


## Acknowledgments

I'm actually proud of myself. This is a project that I did independently (95% by myself). Although I got stuck at one point, I did my very best to resolve the dilemma I was in. I managed to solve up to 80% of the problem by myself, and then I consulted ChatGPT for corrections on what I had done.
This is what ChatGPT corrected me on
```js
else {
    const tempDate = new Date(curYear, curMonth - 1, 0)
    ; // Get the last day of the previous month
    day_total = tempDate.getDate() - (day - curDay);
    monthNames();
    document.querySelector(".dash3").innerText = day_total;
```

