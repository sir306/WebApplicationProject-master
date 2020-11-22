// This adds divs to screen sizes of 800px and greater than 570px
const divPageWrapper = document.getElementById("page-wrapper");
//function to create divs and insert into document
function createDivs() {
    // alert("inside func")
    var leftPanel = document.createElement("div");
    leftPanel.classList.add("medium-left-panel");
    leftPanel.classList.add("col-sm");
    // leftPanel.innerHTML='left panel';
    var rightPanel = document.createElement("div");
    rightPanel.classList.add("medium-right-panel");
    rightPanel.classList.add("col-sm");
    // rightPanel.innerHTML='right panel';
    leftPanel.style.background = "url('images/charles-deluvio-K4mSJ7kc0As-unsplash.jpg')";
    rightPanel.style.backgroundImage = "url('images/alan-king-KZv7w34tluA-unsplash.jpg')";
    styleAndSizeDivPanel(leftPanel);
    styleAndSizeDivPanel(rightPanel);
    document.getElementById("panelContainer").appendChild(leftPanel);
    document.getElementById("panelContainer").appendChild(rightPanel);
    removeBackgroundImage(document.getElementById("left-panel-home"));  
}

function styleAndSizeDivPanel(div){
    div.style.height= "750px";
    div.style.width= "100%";
    div.style.backgroundPosition= "center";
    div.style.backgroundRepeat= "no-repeat";
    div.style.backgroundSize= "cover";
    div.style.position= "relative";
    div.style.borderRadius= "25px";
    div.style.marginTop= ".4rem";
    div.style.marginRight= ".4em";
}

function removeBackgroundImage(div){
    div.style.backgroundImage = "";
}

function removeClassName(div){
    document.getElementById("left-col").remove("col-sm");
    document.getElementById("right-col").remove("col-sm");
}
function addClassNameColSm(div){
    div.add("col-sm");
    div.add("col-sm");
}

const wd = divPageWrapper.clientWidth;

//check screen size
if (wd < 801) {
    
    createDivs();
}
else{
    alert("if broken")
}


