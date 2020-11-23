
const bodyElement = document.querySelector("body");
const aNavLinkElement = document.querySelector("nav");
const divNavContainer = document.querySelector("div.nav-container");
const h4BusinessTitle = document.querySelector("h4.business-title");
const aNavLinkActive = document.querySelector("a.nav-link.active");
//home
const imageCarousel = document.querySelector("#image-carousel");
//services
const tableServiceTable = document.querySelector("table.service-table");
const divServices = document.querySelector("div.services");
const tdServiceData = document.querySelector("td.service-data");
//contact
const tableContactTable = document.querySelector("table.contact-table");
const tdContactTableData = document.querySelector("td.contact-table-data");
const divContactDiv = document.querySelector("div.contact-div");
const aContactNum = document.querySelector("a.contact-num");
const aContactEmail = document.querySelector("a.contact-email");
const formEmailForm = document.querySelector("form.email-form");
const emailText = document.querySelector("#email-text");
const emailEmail = document.querySelector("#email-email");
const inputFormBtn = document.querySelector("input.form-btn");
//about us
function setToNight(){
    bodyElement.style.backgroundColor = "lightgrey";
    aNavLinkElement.style.backgroundColor = "#933994";
    divNavContainer.style.border = "blanchedalmond solid 2px";
    h4BusinessTitle.style.color = "white";
    aNavLinkActive.style.backgroundColor = "black";
    //home
    //imageCarousel.style.border = "solid 3px black";
    //services
    //tableServiceTable.style.color = "darkviolet";
    //divServices.style.border = "solid black .2em";
    //divServices.style.backgroundColor = "#933994";
    //tdServiceData.style.border = "#933994";
    //tdServiceData.style.backgroundColor = "darkgrey";
    //contact
    tableContactTable.style.color = "darkviolet";
    tdContactTableData.style.border = "#933994";
    tdContactTableData.style.backgroundColor = "darkgrey";
    divContactDiv.style.border = "black solid .2em";
    divContactDiv.style.backgroundColor = "#933994";
    aContactNum.style.color = "darkviolet";
    aContactEmail.style.color = "darkviolet";
    formEmailForm.style.border = "solid black .2em";
    formEmailForm.style.backgroundColor = "#933994";
    emailText.style.color = "darkviolet";
    emailText.style.backgroundColor = "darkgrey";
    emailEmail.style.color = "darkviolet";
    emailEmail.style.backgroundColor = "darkgrey";
    aContactNum.addEventListener('mouseover', hoverChange);
    aContactEmail.addEventListener('mouseover', hoverChange);
    aContactNum.addEventListener('mouseout', hoverChangeOver);
    aContactEmail.addEventListener('mouseout', hoverChangeOver);
    inputFormBtn.style.color = "darkviolet";
    inputFormBtn.style.backgroundColor = "darkgrey";
    inputFormBtn.style.border = "blanchedalmond solid .15em";
    inputFormBtn.addEventListener('mouseover', btnHoverChange);
    inputFormBtn.addEventListener('mouseout', btnHoverChangeOver);
    //about us
}

function hoverChange() {
    aContactNum.style.color = "whitesmoke";
    aContactEmail.style.color = "whitesmoke";
}

function hoverChangeOver(){
    aContactNum.style.color = "darkviolet";
    aContactEmail.style.color = "darkviolet";
}

function btnHoverChange() {
    inputFormBtn.style.backgroundColor = "black";
}

function btnHoverChangeOver(){
    inputFormBtn.style.backgroundColor = "darkviolet";
}
document.querySelector("button.layout-toggle-night").addEventListener('click', setToNight);


/* about us page styling */

div.about-us-left-panel {
    border: solid black .2em;
    background-color: #933994;
}

div.about-us-right-panel {
    border: solid black .2em;
    background-color: #933994;
}


/* footers */

footer {
    color: blanchedalmond;
    background-color: black;
}

//DAY
/* Desktop Style Sheet */

html {
    background-color: #6600FF;
}

body {
    background-color: #FF99FF;
}

a.nav-link {
    color: white !important;
    background-color: #6600FF;
    transition: 0.3s;
    border: blanchedalmond .03em solid;
}

nav {
    background-color: #CC00FF;
}

.navbar-toggler {
    color: white !important;
    border: white solid .03em !important;
    border-radius: 25px;
    padding: .3em !important;
}

.navbar-toggler-icon {
    color: white !important;
}

div.nav-container {
    border: blanchedalmond solid 2px;
}

h4.business-title {
    color: white;
}

a.nav-link.active {
    background-color: #66CCFF;
}

a.nav-link:hover {
    opacity: 0.6;
}


/* image-carousel */

#image-carousel {
    border: solid 3px #6600FF;
}


/* services page */

table.service-table {
    color: white;
}

div.services {
    border: solid #6600FF .2em;
    background-color: #CC00FF;
}

td.service-data {
    border: #CC00FF;
    background-color: #6600FF;
}


/* contact table */

table.contact-table {
    color: white;
}

td.contact-table-data {
    border: #CC00FF;
    background-color: #6600FF;
}

div.contact-div {
    border: #6600FF solid .2em;
    background-color: #CC00FF;
}

a.contact-num {
    color: white;
}

a.contact-num:hover {
    color: #66CCFF;
}

a.contact-email {
    color: white;
}

a.contact-email:hover {
    color: #66CCFF;
}


/* email form */

form.email-form {
    border: solid #6600FF .2em;
    background-color: #CC00FF;
}

#email-text,
#email-email {
    color: white;
    background-color: #6600FF;
}

input.form-btn {
    color: #CC00FF;
    background-color: #99CCFF;
    border: blanchedalmond solid .15em;
}

input.form-btn:hover {
    background-color: #6600FF;
    color: #66CCFF;
}


/* about us page styling */

div.about-us-left-panel {
    border: solid #6600FF .2em;
    background-color: #CC00FF;
}

div.about-us-right-panel {
    border: solid #6600FF .2em;
    background-color: #CC00FF;
}

div.about-us-container {
    border: solid #6600FF .2em;
    background-color: #CC00FF;
}


/* footers */

footer {
    color: blanchedalmond;
    background-color: #6600FF;
}