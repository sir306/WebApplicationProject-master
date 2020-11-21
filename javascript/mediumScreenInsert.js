// This adds divs to screen sizes of 800px and greater than 570px
const divPageWrapper = document.getElementById("page-wrapper");
//function to create divs and insert into document
function createDivs() {
    // alert("inside func")
    var leftPanel = document.createElement("div");
    leftPanel.classList.add("medium-left-panel");
    leftPanel.classList.add("col-sm");
    leftPanel.innerHTML='left panel';
    var rightPanel = document.createElement("div");
    rightPanel.classList.add("medium-right-panel");
    rightPanel.classList.add("col-sm");
    rightPanel.innerHTML='right panel';
    document.getElementById("panelContainer").appendChild(leftPanel);
    document.getElementById("panelContainer").appendChild(rightPanel);
}
const wd = divPageWrapper.clientWidth;

//check screen size
if (wd < 801) {
    
    createDivs();
}
else{
    alert("if broken")
}


