const a = 2;
const b = 3;
const c = 8;
const d = 7;
const e = 2;
const f = 3;
const g = 58;
const h = 14;
const i = 48;
const j = 31;
const k = 29;
const l = 0;
const m = 1;
const year = 2019;
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
        output.push(array[i][key]);
        }
    return output;
    
}
getArrayOfKeys(actors, 'name'); // ['tommy', 'lee']



const minNumb = 30;
function substitute(arr) {
    let res = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < minNumb) {
            res.push('*')
        } else {
            res.push(arr[i])
        }
    }  
    return res;
}

console.log(substitute([g, h, i, a, j, k])); // [58, '*', 48, '*', 31, '*']



const date = new Date(year, l, a); 

function getPastDay(date, days) {
    let dayAgo = new Date(date.getTime());
    dayAgo.setDate(dayAgo.getDate()-days);
    return dayAgo.getDate();
}

console.log(getPastDay(date, m)); // 1, (1 Jan 2019)
console.log(getPastDay(date, a)); // 31, (31 Dec 2018)
console.log(getPastDay(date, days)); // 2, (2 Jan 2018)



function formatDate(date) {
    const min = date.getMinutes();
    const hours = date.getHours();
    const day = date.getDate();
    const month = date.getMonth();
    const fullYear = date.getFullYear();
    const twoChar = 10;
    return (
      `${fullYear}/${month + 1}/${day} ` +
      `${hours < twoChar ? '0' : ''}${hours}:` +
      `${min < twoChar ? '0' : ''}${min}`
    );
}

console.log(formatDate(new Date('6/15/2018 09:15:00'))); // "2018/6/15 09:15"
console.log(formatDate(new Date())); // "2020/1/7 12:56" // gets current local time