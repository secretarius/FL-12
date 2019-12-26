// Your code goes here
const askMail = prompt('Please enter your e-mail:');
const validEmail = 5;
const validNewPass = 6;
const correctInput = {
    'user@gmail.com': 'UserPass',
    'admin@gmail.com': 'AdminPass'
}

let passWord;
let changePass;
let newPass;
let newPassTwo;

if (!askMail) {
    //If the input is an empty line or Esc
    alert('Canceled.');
} else if (askMail.length < validEmail) {
    //If the input length less than 5 symbols
    alert('I don\'t know any emails having name length less than 5 symbols');
} else if (Object.keys(correctInput).includes(askMail)) {
    //If the input email is correct
    passWord = prompt('Please enter your password');
  if (!passWord) { 
    //If the input is an empty string or canceled input
    alert('Canceled.');
} else if (passWord !== correctInput[askMail]) {
    //if user enter wrong password
    alert('Wrong password');
} else {
    //when correct password and user want change password
    changePass = confirm('Do you want to change your password?');
    if(changePass) {
        //When user confirmed change password
        passWord = prompt('Please enter the old password');
        if (!passWord) { 
            alert('Canceled.');
        } else if (passWord !== correctInput[askMail]) {
            //If the input is an empty string or canceled input
            alert('Wrong password');
        } else {
            newPass = prompt('Please enter the new password');
            if (!newPass) { 
                alert('Canceled.');
            } else if (newPass.length < validNewPass) {
                alert('It’s too short password. Sorry.');
            } else {
                //when new password is correct
                newPassTwo = prompt('Please enter the new password again');
            if(newPass === newPassTwo) {
                //whed new password is correct again
                alert('You have successfully changed your password.');
               correctInput[askMail] = newPassTwo;
            } else {
                alert('You wrote the wrong password.');
            }
            } 
        }
    } else {
        //when user clicks the 'Cancel' button
        alert('You have failed the change.');
    } 
}
} else {
    //when user enter wrong email
    alert('I don’t know you');
}