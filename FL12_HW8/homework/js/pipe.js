function addOne(x) {
  return x + 1;
}

function pipe() {
  let numbers = arguments[0];
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] === addOne) {
      numbers = addOne(numbers);
    }
  }
  return numbers;
}

pipe(1, addOne);
pipe(1, addOne, addOne);
