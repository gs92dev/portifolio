console.log("Working");
const first = document.getElementById("first");
const second = document.getElementById("second");
first.onmouseover = () => {
  console.log("clicado");
};
second.onmouseover = () => {
    second.classList.add("emphasis");
    console.log("clicado");
  };
second.onmouseout = () => {
    second.classList.remove("emphasis");
}