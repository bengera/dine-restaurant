"use strict";

const eventButtons = document.querySelectorAll('.events__event-type-button');
const eventHeading = document.querySelector('.events__heading');
const eventDescription = document.querySelector('.events__description');
const eventImage = document.querySelector('.events__img'); // get img
const eventImgSource = document.querySelector('.events__image-content source'); // get source

const eventData = {
    "Family Gathering": {
        heading: "Family Gathering",
        description: "We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We’ll provide a memorable experience for all.",
        desktop: "./images/homepage/family-gathering-desktop.jpg",
        desktop2x: "./images/homepage/family-gathering-desktop@2x.jpg",
        tablet: "./images/homepage/family-gathering-tablet.jpg",
        tablet2x: "./images/homepage/family-gathering-tablet@2x.jpg",
        mobile: "./images/homepage/family-gathering-mobile.jpg",
        mobile2x: "./images/homepage/family-gathering-mobile@2x.jpg"
    },
    "Special Events": {
        heading: "Special Events",
        description: "Whether it’s a romantic dinner or special date you’re celebrating with others, we’ll look after you. We’ll be sure to mark your special date with an unforgettable meal.",
        desktop: "./images/homepage/special-events-desktop.jpg",
        desktop2x: "./images/homepage/special-events-desktop@2x.jpg",
        tablet: "./images/homepage/special-events-tablet.jpg",
        tablet2x: "./images/homepage/special-events-tablet@2x.jpg",
        mobile: "./images/homepage/special-events-mobile.jpg",
        mobile2x: "./images/homepage/special-events-mobile@2x.jpg"
    },
    "Social Gathering": {
        heading: "Social Gathering",
        description: "Enjoy a social gathering at our venue, where you can connect and have a great time with friends over delicious food and drinks.",
        desktop: "./images/homepage/social-events-desktop.jpg",
        desktop2x: "./images/homepage/social-events-desktop@2x.jpg",
        tablet: "./images/homepage/social-events-tablet.jpg",
        tablet2x: "./images/homepage/social-events-tablet@2x.jpg",
        mobile: "./images/homepage/social-events-mobile.jpg",
        mobile2x: "./images/homepage/social-events-mobile@2x.jpg"
    }
};

eventButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      eventButtons.forEach((button) => {
        button.classList.remove("active");
      });
      button.classList.add("active");
      let target = e.target.innerText.toLowerCase()

      switch (target) {
        case "family gathering":
          eventHeading.innerText = eventData["Family Gathering"].heading;
          eventDescription.innerText = eventData["Family Gathering"].description;
         break;

        case "special events":
          eventHeading.innerText = eventData["Special Events"].heading;
          eventDescription.innerText = eventData["Special Events"].description;
          eventImgSource.setAttribute("srcset", `${eventData["Special Events"].tablet} 1x, ${eventData["Special Events"].tablet2x} 2x`); // 
          eventImage.setAttribute("src", eventData["Special Events"].mobile);
          eventImage.srcset = `${eventData["Special Events"].mobile} 1x, ${eventData["Special Events"].mobile2x} 2x`;
          break;

        case "social gathering":
          eventHeading.innerText = eventData["Social Gathering"].heading;
          eventDescription.innerText = eventData["Social Gathering"].description;    
          break;

        default:
          console.log("No match found");
      }
    });
    
   
})

