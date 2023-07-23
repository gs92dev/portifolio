
const first = document.getElementById("first");
const second = document.getElementById("second");
const third = document.getElementById("third");
const fourth = document.getElementById("fourth");
const fifth = document.getElementById("fifth");
const firstExperience = document.getElementById("firstExperience");
const secondExperience = document.getElementById("secondExperience");
const thirdExperience = document.getElementById("thirdExperience");
const fourthExperience = document.getElementById("fourthExperience");
const fifthExperience = document.getElementById("fifthExperience");
//Array of nodes for each experience
let experience = [first, second, third, fourth, fifth];
let description = [
  firstExperience,
  secondExperience,
  thirdExperience,
  fourthExperience,
  fifthExperience,
];

experience.forEach(function call(element, index) {
  element.onmouseover = () => {
    element.classList.add("emphasis");
    description[index].classList.remove("none");
  };
  element.onmouseout = () => {
    element.classList.remove("emphasis");
    description[index].classList.add("none");
  };
});
//Timer function for each experience with 5 seconds fo delay
let time = 0;
function timer() {
  if (time < experience.length) {
    experience[time].classList.add("emphasis");
    description[time].classList.remove("none");
    if (time > 0) {
      experience[time - 1].classList.remove("emphasis");
      description[time - 1].classList.add("none");
    }
    if (time == 0) {
      experience[4].classList.remove("emphasis");
      description[4].classList.add("none");
    }
    time++;
  } else {
    time = 0;
  }
}
setInterval(() => {
  timer();
}, 5000);

window.onload = timer();
