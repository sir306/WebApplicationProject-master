//day night button change stylesheets according to the button clicked
//also hides buttons that are not needed or reveals them

//constants
const stylesheets = document.getElementById("style-sheet");
const dayBtn = document.querySelector("button.layout-toggle-day-large");
const nightBtn = document.querySelector("button.layout-toggle-night-large");
console.log(stylesheets.getAttribute("href"));
//check which stylesheet is loaded
if (stylesheets.getAttribute("href") == "./css/nightColors.css"){
    dayBtn.style.display = "unset";
    nightBtn.style.display = "none";
}
else if (stylesheets.getAttribute("href") == "./css/normalColors.css"){
    dayBtn.style.display = "none";
    nightBtn.style.display = "unset";
}

//night change
nightBtn.addEventListener('click', () => {
    stylesheets.setAttribute("href", "./css/nightColors.css")
    dayBtn.style.display = "unset";
    nightBtn.style.display = "none";
})
//day change
dayBtn.addEventListener('click', () => {
    stylesheets.setAttribute("href", "./css/normalColors.css");
    dayBtn.style.display = "none";
    nightBtn.style.display = "unset";
})