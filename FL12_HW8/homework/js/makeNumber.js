function makeNumber(str) {
    let numEl = '';

    for(let idx in str) {
        if(parseInt(str[idx])) {
            numEl += str[idx];
        } 
    }
    return parseInt(numEl);
}

// makeNumber('erer384jjjfd123');
// makeNumber('123098h76gfdd');
console.log(makeNumber('ijifjgdj'));
