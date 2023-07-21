console.log("Working");
const first = document.getElementById("first");
const second = document.getElementById("second");
const third = document.getElementById("third");
const fourth = document.getElementById("fourth");
const fifth = document.getElementById("fifth");
const firstExperience = document.getElementById("firstExperience");
const secondExperience = document.getElementById("secondExperience");
first.onmouseover = () => {
  firstExperience.classList.remove("none");
};
second.onmouseover = () => {
  second.classList.add("emphasis");
  secondExperience.classList.add("emphasis");
  secondExperience.classList.remove("none");
  first.classList.remove("emphasis");
  firstExperience.remove("emphasis");
};
second.onmouseout = () => {
  second.classList.remove("emphasis");
  secondExperience.classList.add("none");
  secondExperience.classList.remove();
};

/*setInterval(() => {
  first.classList.remove("emphasis");
  firstExperience.classList.add("none");
  second.classList.add("emphasis");
  secondExperience.classList.add("emphasis");
  secondExperience.classList.remove("none");
}, 8000);*/
let experience = [first, second, third, fourth, fifth];
let time = 0;
function timer() {
  if (time < experience.length) {
    experience[time].classList.add("emphasis");
    if (time > 0) {
      experience[time - 1].classList.remove("emphasis");
    }
    if (time == 0) {
      experience[4].classList.remove("emphasis");
    }
    time++;
  } else {
    time = 0;
  }
}
setInterval(() => {
  timer();
}, 5000);
//window.onload = timer();
