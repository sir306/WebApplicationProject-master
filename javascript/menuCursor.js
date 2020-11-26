var customCursor = ['https://cur.cursors-4u.net/nature/nat-10/nat979.ani' ,'http://cur.cursors-4u.net/nature/nat-10/nat979.gif'];

var x = 0;

function displayNextImage() {

  document.querySelector("a.nav-link").style.cursor = 'url(https://cur.cursors-4u.net/nature/nat-10/nat979.ani), url(http://cur.cursors-4u.net/nature/nat-10/nat979.gif), auto !important';
}
displayNextImage();
// const menuLink = document.querySelectorAll("a.nav-link");

// function changeCursor(link) {
//     link.style.cursor = "url(https://cur.cursors-4u.net/nature/nat-10/nat970.ani), url(http://cur.cursors-4u.net/nature/nat-10/nat970.gif), auto !important";
//     console.log(link.style.cursor)
//     console.log("hello");
    
// }
// function addingListeners() {
//     console.log(menuLink);

//     menuLink.forEach(link => {
//         console.log(link.style);
//         link.addEventListener("mouseover", changeCursor(link))
//     });
// }
// addingListeners();
// var customCursor = 'url("http://cur.cursors-4u.net/nature/nat-10/nat970.gif"), auto !important';
// document.getElementById("firstlink").style.cursor = "none !important";
// console.log(document.getElementById("firstlink").style.cursor)
// document.getElementById("firstlink").style.cursor =  'url("http://cur.cursors-4u.net/nature/nat-10/nat970.gif"), auto !important';
// console.log(document.getElementById("firstlink").style.cursor)
///* Start http://www.cursors-4u.com */ a {cursor: url(https://cur.cursors-4u.net/nature/nat-10/nat970.ani), url(http://cur.cursors-4u.net/nature/nat-10/nat970.gif), auto !important;} /* End http://www.cursors-4u.com */