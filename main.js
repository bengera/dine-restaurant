"use strict";

const eventButtons = document.querySelectorAll('.events__event-type-button');

eventButtons.forEach((button) => {
    button.addEventListener('click', () => {
        eventButtons.forEach((button) => {
            button.classList.remove('active')
        })
        button.classList.add('active')
    })
    
})

