"use strict";
import { images } from './images';
import '../sass/main.scss'

const eventButtons = document.querySelectorAll('.events__event-type-button');
const eventHeading = document.querySelector('.events__heading');
const eventDescription = document.querySelector('.events__description');
const eventImage = document.querySelector('.events__img'); // get img
const eventImgSource = document.getElementById('event-src-desktop'); // get desktop
const eventImgSourceTablet = document.getElementById('event-src-tablet'); // get second source (tablet)

const eventData = {
    "Family Gathering": {
        heading: "Family Gathering",
        description: "We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We’ll provide a memorable experience for all.",
        desktop: images["family-gathering-desktop"],
        desktop2x: images["family-gathering-desktop-2x"],
        tablet: images["family-gathering-tablet"],
        tablet2x: images["family-gathering-tablet-2x"],
        mobile: images["family-gathering-mobile"],
        mobile2x: images["family-gathering-mobile-2x"]
    },
    "Special Events": {
        heading: "Special Events",
        description: "Whether it’s a romantic dinner or special date you’re celebrating with others, we’ll look after you. We’ll be sure to mark your special date with an unforgettable meal.",
        desktop: images["special-events-desktop"],
        desktop2x: images["special-events-desktop-2x"],
        tablet: images["special-events-tablet"],
        tablet2x: images["special-events-tablet-2x"],
        mobile: images["special-events-mobile"],
        mobile2x: images["special-events-mobile-2x"]
    },
    "Social Gathering": {
        heading: "Social Gathering",
        description: "Enjoy a social gathering at our venue, where you can connect and have a great time with friends over delicious food and drinks.",
        desktop: images["social-events-desktop"],
        desktop2x: images["social-events-desktop-2x"],
        tablet: images["social-events-tablet"],
        tablet2x: images["social-events-tablet-2x"],
        mobile: images["social-events-mobile"],
        mobile2x: images["social-events-mobile-2x"]
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
          eventImgSource.setAttribute("srcset", `${eventData["Family Gathering"].desktop} 1x, ${eventData["Family Gathering"].desktop2x} 2x`)
          eventImgSource.setAttribute("media", "(min-width: 1040px)");

          eventImgSourceTablet.setAttribute("srcset", `${eventData["Family Gathering"].tablet} 1x, ${eventData["Family Gathering"].tablet2x} 2x`)
          eventImgSourceTablet.setAttribute("media", "(min-width: 720px)");

          eventImage.src = '';
          eventImage.srcset = `${eventData["Family Gathering"].mobile} 1x, ${eventData["Family Gathering"].mobile2x} 2x`;
          eventImage.src = eventData["Family Gathering"].mobile;
          
         break;

        case "special events":
          eventHeading.innerText = eventData["Special Events"].heading;
          eventDescription.innerText = eventData["Special Events"].description;

          eventImgSource.setAttribute("srcset", `${eventData["Special Events"].desktop} 1x, ${eventData["Special Events"].desktop2x} 2x`)
          eventImgSource.setAttribute("media", "(min-width: 1040px)");

          eventImgSourceTablet.setAttribute("srcset", `${eventData["Special Events"].tablet} 1x, ${eventData["Special Events"].tablet2x} 2x`)
          eventImgSourceTablet.setAttribute("media", "(min-width: 720px)");

          eventImage.setAttribute("srcset", `${eventData["Special Events"].mobile} 1x, ${eventData["Special Events"].mobile2x} 2x`)
  
         break;

        case "social gathering":
          eventHeading.innerText = eventData["Social Gathering"].heading;
          eventDescription.innerText = eventData["Social Gathering"].description;    

          eventImgSource.setAttribute("srcset", `${eventData["Social Gathering"].desktop} 1x, ${eventData["Social Gathering"].desktop2x} 2x`)
          eventImgSource.setAttribute("media", "(min-width: 1040px)");

          eventImgSourceTablet.setAttribute("srcset", `${eventData["Social Gathering"].tablet} 1x, ${eventData["Social Gathering"].tablet2x} 2x`)
          eventImgSourceTablet.setAttribute("media", "(min-width: 720px)");

          eventImage.srcset = `${eventData["Social Gathering"].mobile} 1x, ${eventData["Social Gathering"].mobile2x} 2x`;
          break;

        default:
          console.log("No match found");
      }
    });
    
   
})

