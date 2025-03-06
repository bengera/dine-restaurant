"use strict";

const eventButtons = document.querySelectorAll('.events__event-type-button');
const eventHeading = document.querySelector('.events__heading');
const eventDescription = document.querySelector('.events__description');
const eventsImage = document.querySelector('.events__img');
console.log(eventsImage);

eventButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      eventButtons.forEach((button) => {
        button.classList.remove("active");
      });
      button.classList.add("active");
      console.log(e.target.innerText);

      switch (e.target.innerText.toLowerCase()) {
        case "family gathering":
          eventHeading.innerText = "Family Gathering";
          eventDescription.innerText = "We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We’ll provide a memorable experience for all."
        //   highlightsImage.src = "./images/homepage/family-gathering-mobile.jpg";
          break;

        case "special events":
          eventHeading.innerText = "Special Events";
          eventDescription.innerText = "Whether it’s a romantic dinner or special date you’re celebrating with others we’ll look after you. We’ll be sure to mark your special date with an unforgettable meal."
        //   highlightsImage.src = "./images/homepage/special-events-mobile.jpg";
          break;

        case "social gathering":
          eventHeading.innerText = "Social Gathering";
          eventDescription.innerText = "Are you looking to have a larger social event? No problem! We’re more than happy to cater for big parties. We’ll work with you to make your event a hit with everyone."
          break;

        default:
          console.log("No match found");
      }
    });
    
   
})

