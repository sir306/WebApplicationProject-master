//validate that input has been entered
const emailMsg = document.getElementById("email-text");
const emailAddy = document.getElementById("email-email");
const stylesheet = document.getElementById("style-sheet");

console.log(stylesheet);
console.log(stylesheet.getAttribute("href"));

function validateEmail() {
    console.log("function called")
        // Check if name or about field is empty
    if (emailMsg.value == "") {
        alert("text")
        emailMsg.style.transition = "border-width 1.2s linear";
        emailMsg.style.border = "red solid 2px";
        alert("please enter a message to send");
        return false;
    }
    // Check if email format is correct  
    else if (emailAddy.value === "") {
        alert("email")
        emailAddy.style.transition = "border-width 1.2s linear";
        emailAddy.style.border = "red solid 2px";
        alert("please enter a valid email to send");
        return false;
    } else {
        return true;
    }
}
emailMsg.addEventListener('click', () => {
    emailMsg.style.borderColor = "initial"
})
emailAddy.addEventListener('click', () => {
    emailAddy.style.borderColor = "initial";
})