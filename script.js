const heroSubheading = document.querySelector("#hero-subheading");
const text = "Web Developer and Tech Enthusiast ";
let idx = 1;
let speed = 300/3;

// Hamburger Menu Icon
const hamburger = document.querySelector(".hamburger");
const navigation = document.querySelector(".navigation");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navigation.classList.toggle("active");
})

writeText();

function writeText() {
    heroSubheading.innerText = text.slice(0, idx);
    idx++;

    if(idx > text.length) {
        idx = 1;
    }

    setTimeout(writeText, speed);
}

// CHANGE IN HEADER COLOR WHEN SCROLL

// window.onscroll = function () {
//     scrollHeader();
// }

// function scrollHeader () {
//     if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
//         document.getElementById("header").style.backgroundColor = "#020617";
//     }
//     else {
//         document.getElementById("header").style.backgroundColor = "#060c25";
//     }
// }