// # Consonants count
// ​
// Find the number of consonants in each of the words below and log it to the console.
// ​
// - Celebration
// - Rocket
// - Prediction
// - Thin

// let words = ["Celebration", "Rocket", "Prediction", "Thin"];

// let vowels = ["a", "e", "i", "o", "u"];

// for (let word of words) {
//   let counter = 0;
//   for (let letter of word) {
//     if (!vowels.includes(letter)) {
//       counter++;
//     }
//   }
//   console.log(counter);
// }

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

// # c4n y0u r34d th15?
// ​
// Modify each of the example strings to a coded (h4ck3r 5p34k) version of the string.
// ​
// **NB:** For your program to work properly, your program should replace all 'a's with 4, 'e's with 3, 'i's with 1, 'o's with 0, and 's's with 5.
// ​
// ## Examples:
// ​
// * javascript is cool ➞ j4v45cr1pt 15 c00l
// * programming is fun ➞ pr0gr4mm1ng 15 fun
// * become a coder ➞ b3c0m3 4 c0d3r

let texts = ["javascript is cool", "programming is fun", "become a coder"];

const code = { a: 4, e: 3, i: 1, o: 0, s: 5 };
// let charIndex = 0;

for (let text of texts) {
  let textArr = text.split("");
  for (let char of text) {
    if (code.hasOwnProperty(char)) {
      textArr[textArr.indexOf(char)] = code[char];
    }
  }
  console.log(textArr.join(""));
}
