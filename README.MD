# Frontend Mentor - Dine Website

This is a solution to the [Dine Website Challenge challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/dine-restaurant-website-yAt7Vvxt7). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Overview

The Dine Restaurant had some fairly challenging layout aspects. The decorative patterns that span across the page were quite tricky to position accurately and make responsive across different screen sizes. There are also a lot of images to manage, for both various screen widths and high-resolution displays — required a lot of JS attention and media queries to ensure they all displayed correctly.

### The challenge

Users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements throughout the site
- See the correct content for the Family Gatherings, Special Events, and Social Events section when the user clicks each tab
- Receive an error message when the booking form is submitted if:
  - The `Name` or `Email Address` fields are empty should show "This field is required"
  - The `Email Address` is not formatted correctly should show "Please use a valid email address"
  - Any of the `Pick a date` or `Pick a time` fields are empty should show "This field is incomplete"

### Screenshot

![]()

### Links

- [Live site](dine-restaurant-fem.netlify.app)

### Built with

- Semantic HTML5 markup
- SCSS/CSS
- Flexbox
- CSS Grid
- Mobile-first workflow
- Vanilla JavaScript

### What I learned

Vite doesn't support dynamic imports for images used in the DOM, I had to import all images manually and then reference them from a data object:

```js
import socialEventsDesktop from "../images/homepage/social-events-desktop.jpg";
```

I grouped the image assets into the eventData object

```js
const eventData = {
  "Family Gathering": {
    heading: "Family Gathering",
    description:
      "We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We’ll provide a memorable experience for all.",
    desktop: images["family-gathering-desktop"],
    desktop2x: images["family-gathering-desktop-2x"],
    tablet: images["family-gathering-tablet"],
    tablet2x: images["family-gathering-tablet-2x"],
    mobile: images["family-gathering-mobile"],
    mobile2x: images["family-gathering-mobile-2x"],
  },
};
```

I was then able to add conditional rendering using switch / case

```js
switch (target) {
  case "family gathering":
    eventHeading.innerText = eventData["Family Gathering"].heading;
    eventDescription.innerText = eventData["Family Gathering"].description;
    eventImgSource.setAttribute(
      "srcset",
      `${eventData["Family Gathering"].desktop} 1x, ${eventData["Family Gathering"].desktop2x} 2x`
    );
    eventImgSource.setAttribute("media", "(min-width: 1040px)");

    eventImgSourceTablet.setAttribute(
      "srcset",
      `${eventData["Family Gathering"].tablet} 1x, ${eventData["Family Gathering"].tablet2x} 2x`
    );
    eventImgSourceTablet.setAttribute("media", "(min-width: 720px)");

    eventImage.src = "";
    eventImage.srcset = `${eventData["Family Gathering"].mobile} 1x, ${eventData["Family Gathering"].mobile2x} 2x`;
    eventImage.src = eventData["Family Gathering"].mobile;

    break;
}
```

Other JS learnings

```js
querySelectors can target ids and classes at the same time
document.querySelector("#dates .error-dropdown").classList.add("active");

dataset gives access to custom data attributes
const value = item.dataset.value;
```

There are a few unfinished styling issues that could be ironed out with more time — particularly the responsive spacing around the form and some of the patterns position on larger screens. The core functionality and responsiveness are fully implemented.
