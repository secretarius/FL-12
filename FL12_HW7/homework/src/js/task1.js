// Your code goes here
const ask = prompt('Please enter your e-mail:');
const magicFive = 5;
let passWord;
let changePass;


const correctInput = {
    'user@gmail.com': 'UserPass',
    'admin@gmail.com': 'AdminPass'
}


if (ask === null || typeof ask === 'undefined' || ask === '') {
    alert('Canceled.');
} else if (ask.length < magicFive) {
    alert('I don\'t know any emails having name length less than 5 symbols');
} else if (correctInput['user@gmail.com'] || correctInput['admin@gmail.com']) {
    passWord = prompt('Please enter your password');
  if (!passWord) { 
    alert('Canceled.');
} else if (passWord !== correctInput['user@gmail.com']) {
    alert('Wrong password')
} else {
    changePass = confirm('Do you want to change your password?');
    if(!confirm) {
        alert('You have failed the change.')
    }
}
}