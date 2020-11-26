//day night button change stylesheets according to the button clicked
//also hides buttons that are not needed or reveals them

//constants
const stylesheets = document.getElementById("style-sheet");
const screenWidth = window.matchMedia("(max-width: 563px)");
const dayBtnSmall = document.querySelector("button.layout-toggle-day-small");
const nightBtnSmall = document.querySelector("button.layout-toggle-night-small");
const dayBtn = document.querySelector("button.layout-toggle-day-large");
const nightBtn = document.querySelector("button.layout-toggle-night-large");
console.log(stylesheets.getAttribute("href"));
console.log(nightBtn);
function largeBtnChange() {
    //check which stylesheet is loaded
    if (stylesheets.getAttribute("href") == "./css/nightColors.css") {
        dayBtn.style.display = "unset";
        nightBtn.style.display = "none";
    }
    else if (stylesheets.getAttribute("href") == "./css/normalColors.css") {
        dayBtn.style.display = "none";
        nightBtn.style.display = "unset";
    }
}
function smallBtnChange() {
    //check which stylesheet is loaded
    if (stylesheets.getAttribute("href") == "./css/nightColors.css") {
        dayBtnSmall.style.display = "unset";
        nightBtnSmall.style.display = "none";
    }
    else if (stylesheets.getAttribute("href") == "./css/normalColors.css") {
        dayBtnSmall.style.display = "none";
        nightBtnSmall.style.display = "unset";
    }
}
function screenCheck(x) {
    if (screenWidth.matches) {
        smallBtnChange();
        dayBtn.style.display = "none";
        nightBtn.style.display = "none";
        //night change
        nightBtnSmall.addEventListener('click', () => {
            stylesheets.setAttribute("href", "./css/nightColors.css")
            dayBtnSmall.style.display = "unset";
            nightBtnSmall.style.display = "none";
            dayBtn.style.display = "none";
            nightBtn.style.display = "none";
        })
        //day change
        dayBtnSmall.addEventListener('click', () => {
            stylesheets.setAttribute("href", "./css/normalColors.css");
            dayBtnSmall.style.display = "none";
            nightBtnSmall.style.display = "unset";
            dayBtn.style.display = "none";
            nightBtn.style.display = "none";
        })
    }
    else {
        largeBtnChange();
        dayBtnSmall.style.display = "none";
        nightBtnSmall.style.display = "none";
        //night change
        nightBtn.addEventListener('click', () => {
            stylesheets.setAttribute("href", "./css/nightColors.css")
            dayBtn.style.display = "unset";
            nightBtn.style.display = "none";
            dayBtnSmall.style.display = "none";
            nightBtnSmall.style.display = "none";
        })
        //day change
        dayBtn.addEventListener('click', () => {
            stylesheets.setAttribute("href", "./css/normalColors.css");
            dayBtn.style.display = "none";
            nightBtn.style.display = "unset";
            dayBtnSmall.style.display = "none";
            nightBtnSmall.style.display = "none";
        })
    }
}
screenCheck(screenWidth);
screenWidth.addListener(screenCheck);
stylesheets.addEventListener("load", screenCheck);