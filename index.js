console.log("Working");
const first = document.getElementById("first");
const second = document.getElementById("second");
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
let experience =[first, second]
for (let index = 0; index < experience.length; index++) {
  setInterval(() => {
    experience[index].classList.add("emphasis");
  }, 7000);
  
}

