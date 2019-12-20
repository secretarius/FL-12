// Your code goes here
const a = +prompt('Enter value a:');
const b = +prompt('Enter value b:');
const c = +prompt('Enter value c:');
const disc = b * b - 4 * a * c;
const squareDisc = Math.sqrt(disc);

if (a === 0 && b === 0 && c === 0) {
  console.log('Invalid input data');
} else if (isNaN(a) || isNaN(b) || isNaN(c)) {
    console.log('Invalid input data');
} else if (disc > 0) {
  const x1 = (-b + Math.sqrt(disc)) / (2 * a);
  const x2 = (-b - Math.sqrt(disc)) / (2 * a);
  console.log(x1);
  console.log(x2);
} else if (disc === 0) {
  console.log((-b - squareDisc) / (2 * a));
} else if (disc < 0) {
  console.log('no solution');
}
