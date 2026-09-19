'use strict';

const message1 = 'Hello';
const message2 = 'JavaScript';

alert(message1 + ' ' + message2 + '!');
const x = prompt("Введіть перше число (x):");
const y = prompt("Введіть друге число (y):");

const sum = Number(x) + Number(y);

alert("Сума чисел: " + sum);
const userGuess = Number(prompt("Вгадайте число:"));

if (userGuess === 3) {
  alert("Congratulations, You did it!");
} else if (userGuess > 3) {
  alert("The number is too long");
} else {
  alert("The number is short");
}
const dayIf = prompt("Введіть назву дня тижня:");

if (dayIf === "Понеділок" || dayIf === "Monday") {
  alert("Start of the work week!");
} else if (dayIf === "П'ятниця" || dayIf === "Friday") {
  alert("End of the work week!");
} else {
  alert("A regular day");
}

const daySwitch = prompt("Введіть назву дня тижня:");

switch (daySwitch) {
  case "Понеділок":
  case "Monday":
    alert("Start of the work week!");
    break;
  case "П'ятниця":
  case "Friday":
    alert("End of the work week!");
    break;
  default:
    alert("A regular day");
}
const score = Number(prompt("Введіть кількість балів студента:"));
let grade;

if (score < 50) {
  grade = "F";
} else if (score < 70) {
  grade = "D";
} else if (score < 80) {
  grade = "C";
} else if (score < 90) {
  grade = "B";
} else {
  grade = "A";
}

alert("Оцінка: " + grade);
