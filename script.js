"use strict";

/*Variables*/
let btnRandom = document.querySelector("button");
let colorContainer = document.querySelector(".random-color");

let letters = ["A", "B", "C", "D", "E", "F"];
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

/* Funcion */
const generateRamdonColor = () => {
  let color = "#";
  for (let i = 0; i < 6; i++) {
    let random = Math.floor(Math.random() * 2);
    console.log(random);
    if (random === 0) {
      let letter = letters[Math.floor(Math.random() * letters.length)];
      color += letter;
    } else {
      let number = numbers[Math.floor(Math.random() * numbers.length)];
      color += number;
    }
  }
  return color;
};

/* Ejecución */
btnRandom.addEventListener("click", () => {
  colorContainer.classList.remove("hidden");
  let color = generateRamdonColor();
  colorContainer.style.backgroundColor = color;
  document.querySelector("body").style.backgroundColor = `${color}50`;
  colorContainer.textContent = color;
});
