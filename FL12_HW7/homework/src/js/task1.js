// Your code goes here
const ask = prompt('Please enter your e-mail:');
const validEmail = 5;
let passWord;
let changePass;
let newPass;
let newPassTwo;
const validNewPass = 6;


const correctInput = {
    'user@gmail.com': 'UserPass',
    'admin@gmail.com': 'AdminPass'
}


if (ask === null || typeof ask === 'undefined' || ask === '') {
    alert('Canceled.');
} else if (ask.length < validEmail) {
    alert('I don\'t know any emails having name length less than 5 symbols');
} else if (correctInput['user@gmail.com']) {
    passWord = prompt('Please enter your password');
  if (!passWord) { 
    alert('Canceled.');
} else if (passWord !== correctInput['user@gmail.com']) {
    alert('Wrong password')
} else {
    changePass = confirm('Do you want to change your password?');
    if(changePass) {
        passWord = prompt('Please enter the old password');
        if (!passWord) { 
            alert('Canceled.');
        } else if (passWord !== correctInput['user@gmail.com']) {
            alert('Wrong password');
        } else {
            newPass = prompt('Please enter the new password');
            if (!newPass) { 
                alert('Canceled.');
            } else if (newPass.length < validNewPass) {
                alert('It’s too short password. Sorry.');
            } else {
                newPassTwo = prompt('Please enter the new password again');
            if(newPass === newPassTwo) {
                alert('You have successfully changed your password.');
               correctInput['user@gmail.com'] = newPassTwo;
            } else {
                alert('You wrote the wrong password.');
            }
            } 
        }
    } else {
        alert('You have failed the change.');
    } 
}
} else {
    alert('I don’t know you');
}