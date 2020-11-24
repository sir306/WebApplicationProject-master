
const bodyElement = document.querySelector("body");
const aNavLinkElement = document.querySelector("nav");
const aNavLink = document.querySelectorAll("a.nav-link");
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
const tdContactTableData = document.querySelectorAll("td.contact-table-data");
const divContactDiv = document.querySelector("div.contact-div");
const aContactNum = document.querySelector("a.contact-num");
const aContactEmail = document.querySelector("a.contact-email");
const formEmailForm = document.querySelector("form.email-form");
const emailText = document.querySelector("#email-text");
const emailEmail = document.querySelector("#email-email");
const inputFormBtn = document.querySelector("input.form-btn");
const footer = document.querySelector("footer");
//about us
const divAboutUsLeftPanel = document.querySelector("div.about-us-left-panel");
const divAboutUsRightPanel = document.querySelector("div.about-us-right-panel");

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

function setToNight(){
    //Nav
    bodyElement.style.backgroundColor = "lightgrey";
    aNavLink.forEach(navlink => {
        navlink.style.backgroundColor = "darkgrey";
    });
    

    aNavLinkElement.style.backgroundColor = "rgb('102, 0, 255')";
    divNavContainer.style.border = "blanchedalmond solid 2px";
    h4BusinessTitle.style.color = "white";
    aNavLinkActive.style.backgroundColor = "black";
    //Footer
    footer.style.color = "blanchedalmond";
    footer.style.backgroundColor = "black";

    //home
    //imageCarousel.style.border = "solid 3px black";
    //services
    //tableServiceTable.style.color = "darkviolet";
    //divServices.style.border = "solid black .2em";
    //divServices.style.backgroundColor = "rgb('102, 0, 255')";
    //tdServiceData.style.border = "rgb('102, 0, 255')";
    //tdServiceData.style.backgroundColor = "darkgrey";
    //contact
    tableContactTable.style.color = "darkviolet";
    tdContactTableData.forEach(tableData => {
        tableData.style.border = "rgb('102, 0, 255')";
        tableData.style.backgroundColor = "darkgrey";
    });
    
    
    divContactDiv.style.border = "black solid .2em";
    divContactDiv.style.backgroundColor = "rgb('102, 0, 255')";
    aContactNum.style.color = "darkviolet";
    aContactEmail.style.color = "darkviolet";
    formEmailForm.style.border = "solid black .2em";
    formEmailForm.style.backgroundColor = "rgb('102, 0, 255')";
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
    // divAboutUsLeftPanel.style.border = "solid black .2em";
    // divAboutUsLeftPanel.style.backgroundColor = "rgb('102, 0, 255')";
    // divAboutUsRightPanel.style.border = "solid black .2em";
    // divAboutUsRightPanel.style.backgroundColor = "rgb('102, 0, 255')";
}

function setToDay(){
    bodyElement.style.backgroundColor = "rgb('255, 153, 255')";
    //Nav
    aNavLinkElement.style.backgroundColor = "rgb('102, 0, 255')";
    divNavContainer.style.border = "blanchedalmond solid 2px";
    h4BusinessTitle.style.color = "white";
    aNavLinkActive.style.backgroundColor = "black";
}


document.querySelector("button.layout-toggle-night").addEventListener('click', setToNight);
document.querySelector("button.layout-toggle-day").addEventListener('click', setToDay);
+
a.nav-link {

    background-color: #6600FF;

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
