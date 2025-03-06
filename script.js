// dropdown function
// collect all necessary elements by ID and store it in a variable.
const hover = document.getElementById('hoverDropDown');
const dropDown = document.getElementById('dropDown');

// 'mousemove' when the user hover their mouse to the used variables below, show the dropdown.
hover.addEventListener('mousemove', () => {
    dropDown.style.display = 'flex';
});
dropDown.addEventListener('mousemove', () => {
    dropDown.style.display = 'flex';
});

// 'mouseleave' when the user moves their mouse away from the used variables below, hide the dropdown.
hover.addEventListener('mouseleave', () => {
    dropDown.style.display = 'none';
});
dropDown.addEventListener('mouseleave', () => {
    dropDown.style.display = 'none';
});


// -------------------------------------------


// animation fade in function
// collect all necessary elements by ID and store it in a variable.
const container = document.getElementById('container');
const cardContainer = document.getElementById('cardContainer');

// 100 miliseconds delay after the web page is loaded.
setTimeout(() => {
    container.classList.add('fade-in');             // adds the animation class to the container element class.
    cardContainer.classList.add('fade-in');         // adds the animation class to the cardContainer element class.
}, 100);


// -------------------------------------------


// Card Animation
// collect all necessary elements by ID and store it in a variable.
const card = document.getElementById('card');
const cardImg = document.getElementById('cardImg');

// event listener for the user mouse.
card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();                 // collect the value of (x, y, width, height) for the card container.
    const x = (e.clientX - rect.left) / rect.width - 0.5;      // calculate the mouse/cursor in X position inside the card container.
    const y = (e.clientY - rect.top) /  rect.height - 0.5;     // calculate the mouse/cursor in Y position inside the card container.
    const tiltX = y * -50;                                     // added '* -50' for more mesmerizing tilt effect, can be adjusted as needed.
    const tiltY = x * 50;                                      // added '* 50' for more mesmerizing tilt effect can be adjusted as needed.

    card.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(1.05)`;     // modify the css properties through JavaScript.
    cardImg.style.transform = `translateZ(40px)`;                                       // modify the css properties through JavaScript.
})

// event listener if the user mouse is outside the card.
card.addEventListener('mouseleave', () => {
    card.style.transform = `rotateX(0deg) rotateY(0deg) scale(1)`;                      // returns the position to its default state.
})


// -------------------------------------------