/*const header = document.getElementsByTagName("header");
//const window = document.getElementsByTagName("window");


header.addEventListener("scroll", (event) => {console.log(event)})*/
const isMobile = /Mobile/.test(navigator.userAgent);
const header = document.getElementById("header");

if (isMobile) {
  // Change the element for mobile
  header.style.backgroundColor = "red";
} else {
  // Change the element for desktop
  header.style.backgroundColor = "blue";
}
