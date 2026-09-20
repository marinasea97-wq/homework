'use strict';

function checkAge1(age) {
  return age > 18 ? true : confirm('Батьки дозволили');
}

function checkAge2(age) {
  return age > 18 || confirm('Батьки дозволили');
}
function minIf(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}

function minTernary(a, b) {
  return a < b ? a : b;
}
function pow(x, n) {
  let result = x;
  for (let i = 1; i < n; i++) {
    result *= x;
  }
  return result;
}

const x = Number(prompt("Введіть число (x):"));
const n = Number(prompt("Введіть степень (n):"));

if (n < 1) {
  alert("Степінь має бути натуральним числом (більше 0)");
} else {
  alert("Результат: " + pow(x, n));
}
function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Ви згодні?",
  () => alert("Ви погодились"),
  () => alert("Ви скасували")
);
