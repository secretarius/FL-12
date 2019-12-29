function makeNumber(str) {
  let arr = str.split('');
  let output = [];

  for (let i = 0; i < arr.length; i++) {
    if (!isNaN(arr[i])) {
      output.push(arr[i]);
    }
  }
  return output.join('');
}

makeNumber('erer384jjjfd123');
makeNumber('123098h76gfdd');
makeNumber('ijifjgdj');
