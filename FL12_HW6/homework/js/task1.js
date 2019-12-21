// Your code goes here
const a = +prompt('Enter value a:');
const b = +prompt('Enter value b:');
const c = +prompt('Enter value c:');
const magicTwo = 2;
const magicFour = 4;
const disc = b * b - magicFour * a * c;
const squareDisc = Math.sqrt(disc);

if (a === 0 && b === 0 && c === 0) {
  console.log('Invalid input data');
} else if (isNaN(a) || isNaN(b) || isNaN(c)) {
  console.log('Invalid input data');
} else if (disc > 0) {
  const x1 = (-b + Math.sqrt(disc)) / (magicTwo * a);
  const x2 = (-b - Math.sqrt(disc)) / (magicTwo * a);
  console.log(`x1 = ${Math.round(x1)} and x2 = ${Math.round(x2)}`);
} else if (disc === 0) {
  const x = -b / (magicTwo * a);
  console.log(`x = ${Math.round(x)}`);
} else if (disc < 0) {
  console.log('no solution');
}
