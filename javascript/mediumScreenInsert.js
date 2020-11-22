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
    leftPanel.style.height= "750px";
    leftPanel.style.width= "100%";
    leftPanel.style.backgroundPosition= "center";
    leftPanel.style.backgroundRepeat= "no-repeat";
    leftPanel.style.backgroundSize= "cover";
    leftPanel.style.position= "relative";
    leftPanel.style.borderRadius= "25px";
    leftPanel.style.marginTop= ".4rem";
    leftPanel.style.marginRight= ".4em";
    rightPanel.style.backgroundImage = "url('images/alan-king-KZv7w34tluA-unsplash.jpg')";
    st
    document.getElementById("panelContainer").appendChild(leftPanel);
    document.getElementById("panelContainer").appendChild(rightPanel);  
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
const wd = divPageWrapper.clientWidth;

//check screen size
if (wd < 801) {
    
    createDivs();
}
else{
    alert("if broken")
}


