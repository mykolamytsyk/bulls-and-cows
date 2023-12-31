// function showInput() {
//   let inputElement = document.getElementById("myInput");
//   inputElement.style.display = "block";
// }

// function isBigEnough(value) {
//   return value >= 10;
// }

// let filtered = [12, 5, 8, 130, 44].filter(isBigEnough);

// console.log(filtered);
// // массив filtered теперь содержит [12, 130, 44]

// const arr1 = ["Alice", "Bob"];
// function isBigEnough(value) {
//   return value.startsWith(letter);
// }
// let filtered = arr1.filter(isBigEnough);
// console.log(value, "B");

// const people = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 },
//   { name: "Charlie", age: 22 },
//   { name: "David", age: 35 },
// ];

// function filterByFirstLetter(array, letter) {
//   return array.filter((person) =>
//     person.name.toLowerCase().startsWith(letter.toLowerCase())
//   );
// }

// const result = filterByFirstLetter(people, "b");
// console.log(result);

// const arr1 = ["Alice", "Bob"];

// function isBigEnough(value, letter) {
//   return value.toLowerCase().startsWith(letter.toLowerCase());
// }

// let filtered = arr1.filter((item) => isBigEnough(item, "B"));
// console.log(filtered);

function startsWith(value) {
  return value.startsWith("B");
}

let filtered = ["Alice", "Bob", "Ben"].filter(startsWith);

console.log(filtered);
console.log([]);

// function isBigEnough(value) {
//   return value >= 10;
// }

// let filtered = [12, 5, 8, 130, 44].filter(isBigEnough);

// console.log(filtered);

// const arr1 = ["Alice", "Bob"];

// function isBigEnough(value, letter) {
//   return value.toLowerCase().startsWith(letter.toLowerCase());
// }

// let filtered = arr1.filter(function (item) {
//   return isBigEnough(item, "B");
// });

// console.log(filtered);
