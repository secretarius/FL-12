// Your code goes here
function convert(...args) {
  let arg = [...args];
  let newArg = [];
  for (let i = 0; i < arg.length; i++) {
    if (typeof arg[i] === 'string') {
      newArg.push(parseInt(arg[i]));
    } else {
      newArg.push(arg[i].toString());
    }
  }
  return newArg;
}

console.log(convert('1', 2, 3, '4')); //[1, '2', '3', 4]



function executeforEach(arr, callback) {
    for(let i = 0; i < arr.length; i++) {
        callback(arr[i]);
    }  
}

executeforEach([1,2,3], function(el) {
    console.log(el * 2)
}); // logs 2 4 6




function mapArray(arr, callback) {
    for(let i = 0; i < arr.length; i++) {
        callback(parseInt(arr[i]));
    }  
}

mapArray([2, '5', 8], function(el) {
    return el + 3
}) // returns [5, 8, 11]



function filterArray(arr, callback) {
    for(let i = 0; i < arr.length; i++) {
        callback(arr[i]);
    }  
}

filterArray([2, 5, 8], function(el) {
    return el % 2 === 0
}) // returns [2, 8]




function flipOver(str) {
    let reversed = '';
  for(let char of str){
    reversed = char + reversed;
  }
  return reversed;
}

flipOver('hey world') // 'dlrow yeh'



function makeListFromRange(arra) {
    let res = [];
    for(let i = arra[0]; i <=arra[1]; i++) {
        res.push(i);
    } 
    return res;
}
makeListFromRange([2, 7]) // [2, 3, 4, 5, 6, 7]


const actors = [
    { name: 'tommy', age: 36 },
    { name: 'lee', age: 28 }
];

function getArrayOfKeys(arr, callback, thisArg) {
        for(let i = 0; i < arr.length; i++) {
            callback.call(thisArg, arr[i]);
        }  


}

  getArrayOfKeys(actors, 'name'); // ['tommy', 'lee']