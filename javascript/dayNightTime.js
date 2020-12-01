//prompt user to see if they would like to revert to normal colors
//on desktops or screen sizes larger than 992px during times between
//times 10:00pm and 05:00am which triggers the auto night theme

const timeStyle = document.getElementById("style-sheet");
const dayButton = document.querySelector("button.layout-toggle-day-large");
const nightButton = document.querySelector("button.layout-toggle-night-large");

function setNightColorsByTime() {
    var today = new Date();
    var time = today.getHours();
    console.log(time)
    console.log(typeof(time))
    if (time >= 19 || time <= 6) {
        timeStyle.setAttribute("href", "./css/nightColors.css");
        dayButton.focus();
        if (confirm('Night mode has been loaded would you like to revert to normal mode? If so click ok.')) {
            timeStyle.setAttribute("href", "./css/normalColors.css");
        }
    }
}
setNightColorsByTime();