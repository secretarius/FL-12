function countNumbers(str) {
  let arr = str.split('');
  let res = {};
  let output = [];

  for (let i = 0; i < arr.length; i++) {
    if (!isNaN(arr[i])) {
      output.push(arr[i]);
    }
  }

  output.forEach(el => {
    res[el] = res[el] + 1 || 1;
  });
  return res;
}

countNumbers('erer384jj4444666888jfd123');
countNumbers('jdjjka000466588kkkfs662555');
countNumbers('');