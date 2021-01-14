// # Consonants count
// ​
// Find the number of consonants in each of the words below and log it to the console.
// ​
// - Celebration
// - Rocket
// - Prediction
// - Thin

let words = ["Celebration", "Rocket", "Prediction", "Thin"];

let vowels = ["a", "e", "i", "o", "u"];

for (let word of words) {
  let counter = 0;
  for (let letter of word) {
    if (!vowels.includes(letter)) {
      counter++;
    }
  }
  console.log(counter);
}

// DIAGONAL

// let size = 15;
// let equal = "=";
// let pipe = "|";
// let draw = "";

// for (let i = 0; i < size; i++) {
//   draw = pipe.repeat(i);
//   draw += equal.repeat(size - i);
//   console.log(draw);
// }
