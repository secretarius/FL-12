function getMin() {
   let numbers = arguments[0];
   for(let i = 0; i < arguments.length; i++) {
       if(numbers > arguments[i]) {
           numbers = arguments[i];
       }
   }
   return numbers;
}

getMin(3, 0, -3);


