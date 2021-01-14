// TRIANGLE

// let columns = 7;
// let rows = "";
// for (let i = 1; i <= columns; i++) {
//   rows += "#";
//   console.log(rows);
// }

// RECTANGLE

// let a = 20;
// let b = a / 2;

// for (let i = 1; i <= b; i++) {
//   if (i === 1 || i === b) {
//     let draw = "";
//     for (let i = 1; i <= a; i++) {
//       draw += "#";
//     }
//     console.log(draw);
//   } else {
//     let draw = "";
//     for (let j = 1; j <= a; j++) {
//       if (j === 1 || j === a) {
//         draw += "#";
//       } else {
//         draw += " ";
//       }
//     }
//     console.log(draw);
//   }
// }

// CHESS

let size = 8;

for (let i = 1; i <= size; i++) {
  let draw = "";
  for (let j = 1; j <= size; j++) {
    if ((i + j) % 2 === 0) {
      draw += "-";
    } else {
      draw += "#";
    }
  }
  console.log(draw);
}

// DIAGONAL

// let size = 9;

// for (let i = 0; i < size; i++) {
//   let draw = "";
//   draw = "|".repeat(i);
//   draw += "=".repeat(size - i);
//   console.log(draw);
// }
