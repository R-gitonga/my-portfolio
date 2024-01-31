const skills = ["Web Designer", "Web Developer", "BackEnd Developer", "Website Maintanance"];
let currentIndex = 0

function displaySkills () {
    document.getElementById("skills-display").textContent = skills[currentIndex];
    currentIndex = (currentIndex + 1) % skills.length;
}

displaySkills();
setInterval(displaySkills, 4000);



// contact me animation
// get element by ID, define text to display and the delay
const contactButton = document.getElementById("contactButton");
const text = "Contact Me";
const delay = 300;

// recursive function to display text letter by letter
function typeText(index) {
    // selects the first child element of contactButton that is an anchor tag
    contactButton.querySelector("#contactButton a").textContent = text.slice(0, index); //update the text content in the anchor tag
    if (index < text.length) {
        setTimeout(() => {
            typeText(index + 1);    //recursively call the typetext function to write the next letter while the index < text
        }, delay);
    }else {
        setTimeout(() => {
            typeText(0);
        }, delay * 5);             //repeat the process infinately
    }
}
typeText(0);

document.addEventListener('DOMContentLoaded', function () {
    const navbarToggler = document.querySelector(".mobile-menu-button");
    const navbarList = document.querySelector(".navbar ul");

    navbarToggler.addEventListener('click', function() {
        navbarList.classList.toggle('active');
    });
});


function toggleMobileMenu() {
    var navMenu = document.querySelector('.navbar');
    navMenu.classList.toggle('active');
}