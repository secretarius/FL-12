const a = 2;
const b = 3;
const c = 8;
const d = 7;
const e = 2;
const f = 3;
const y = 2019;
const days = 365;

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

console.log(convert('1', a, b, '4')); //[1, '2', '3', 4]



function executeforEach(arr, callback) {
    for(let i of arr) {
        callback(i);
    }  
}

executeforEach([1,a,b], function(el) {
    console.log(el * a);
}); // logs 2 4 6




function mapArray(arr, callback) {
    let res = [];
    executeforEach(arr, (item) => res.push(callback(parseInt(item))));
    return res;
}
  
mapArray([a, '5', c], function(el) {
   return el + b;
}) // returns [5, 8, 11]



function filterArray(arr, callback) {
    let res = [];
    executeforEach(arr, item => {
      if(callback(item)) { 
        res.push(item);
      }
    });
    return res; 
}

filterArray([a, b, c], function(el) {
    return el % a === 0
}) // returns [2, 8]




function flipOver(str) {
    let reversed = '';
    for(let char of str){
    reversed = char + reversed;
  }
  return reversed;
}

flipOver('hey world') // 'dlrow yeh'



function makeListFromRange(array) {
    let res = [];
    for(let i = array[0]; i <= array[1]; i++) {
        res.push(i);
    } 
    return res;
}
makeListFromRange([a, d]) // [2, 3, 4, 5, 6, 7]


const actors = [
    { name: 'tommy', age: 36 },
    { name: 'lee', age: 28 }
];


  function getArrayOfKeys(array, key) {
    let output = [];
    for(let i = 0; i < array.length; i++) {
        if(array.hasOwnProperty(i)){
        let object = array[i];
        output.push(object[key]);
        }
    }  
    return output;
    
}

console.log(getArrayOfKeys(actors, 'name')); // ['tommy', 'lee']



const thirty = 30;
function substitute(arr) {
    let res = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < thirty) {
            res.push('*')
        } else {
            res.push(arr[i])
        }
    }  
    return res;
}

console.log(substitute([58, 14, 48, 2, 31, 29])); // [58, '*', 48, '*', 31, '*']




const date = new Date(2019, 0, 2); 

function getPastDay(date, minus) {

    let min = minus;
    let dayAgo = new Date(date.getTime()-1);
    dayAgo.setDate(date.getDate()-min);

    return dayAgo.getDate();
}

console.log(getPastDay(date, 1)); // 1, (1 Jan 2019)
console.log(getPastDay(date, 2)); // 31, (31 Dec 2018)
console.log(getPastDay(date, 365)); // 2, (2 Jan 2018)


function formatDate(data) {
    let day = new Date(data.getTime());
    return day.toLocaleString().slice(0, 15).replace(/-/g,'/');
}

console.log(formatDate(new Date('6/15/2018 09:15:00'))); // "2018/6/15 09:15"
console.log(formatDate(new Date())); // "2020/1/7 12:56" // gets current local time