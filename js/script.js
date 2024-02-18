"use strict";

// 1. Задача на знаходження добутку масиву чисел з невідомою глибиною вкладеності

const resultsArray = [1, 2, [3, [4]]];

let productOfArray = resultsArray
  .flat()
  .reduce((accumulator, currentValue) => accumulator * currentValue, 1);

console.log(productOfArray);

// 2. Задача про перетворення об'єкту

const priceData = {
  Apples: "23.4",
  BANANAS: "48",
  oRAnGEs: "48.7584",
};

function optimizer(data) {
  let updatedPriceData = Object.fromEntries(
    Object.entries(data).map(([key, value]) => [
      key.toLowerCase(),
      Number(value).toFixed(2),
    ])
  );
  return updatedPriceData;
}

let updatedPriceData = optimizer(priceData);

console.log(updatedPriceData);

// 3. Задача на фільтрування масиву

// 1)
const userNames = [
  "Петро",
  "Емма",
  "Юстин",
  "Ілля",
  "Марта",
  "Яна",
  "Василь",
  "Антон",
  "Олена",
];

let ukrainianVowels = ["А", "Е", "Є", "И", "І", "Ї", "О", "У", "Ю", "Я"];
let filteredNames = userNames.filter((name) =>
  ukrainianVowels.includes(name[0])
);

console.log(filteredNames);

// 2)
const userNames = [
  "Петро",
  "Емма",
  "Юстин",
  "Ілля",
  "Марта",
  "Яна",
  "Василь",
  "Антон",
  "Олена",
];
let ukrainianVowels = ["А", "Е", "Є", "И", "І", "Ї", "О", "У", "Ю", "Я"];
let filteredNames = [];

for (let name of userNames) {
  if (ukrainianVowels.includes(name[0])) {
    filteredNames.push(name);
  }
}
console.log(filteredNames);

// 4. Задача на повернення ініціалів для кожного імені з масиву, посортованих в алфавітному порядку

const userNames = [
  "Петрик Ольга Іванівна",
  "Гнатюк Петро Антонович",
  "Рудко Андрій Опанасович",
];
let initials = userNames.sort().map((userNames) => {
  let fullName = userNames.split(" ");
  return fullName.map((name) => name[0]).join(". ");
});
console.log(initials);

// 5. Додаткова задача*

function sortArray(arr) {
  if (arr === null || typeof arr === "undefined") {
    return [];
  }
  return arr.sort((a, b) => a - b);
}

console.log(sortArray([1, 12, 10, 50, 5])); 
console.log(sortArray(null)); 
