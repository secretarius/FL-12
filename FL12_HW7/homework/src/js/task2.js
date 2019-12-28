const playerAttemptsNumber = 3;
const attemptPriceOne = 100;
const attemptPriceTwo = 200;
const rangNumForAttemptOne = 8;
const rangNumForAttemptTwo = 12;
const dividePrice = 2;

let game = confirm('Do you want to play a game?');
let rangeNumber = 8;
let randomNumber;
let playerChoise;
let playerAttempts;
let amoungPrice;
let playerPrice;

    if (!game) {
        //when player clicked cancel button
        alert('You did not become a billionaire, but can.');
    } else {
        //when player clicked ok button
        randomNumber = Math.floor(Math.random() * (rangeNumber + 1));
        playerAttempts = playerAttemptsNumber;
        playerPrice = 0;
        amoungPrice = attemptPriceOne;
        while(playerAttempts > 0) {
            console.log(`random number: ${randomNumber}`);
            playerChoise = +prompt(`
            Choose a roulette pocket number from 0 to ${rangeNumber}
            Attempts left: ${playerAttempts}
            Total prize: ${playerPrice}$
            Possible prize: ${amoungPrice}$
            `);
            console.log(`User Choice: ${playerChoise}`);

            if(playerChoise !== randomNumber) {
                //when the player hasn't guessed
                playerAttempts = playerAttempts - 1;
                amoungPrice = amoungPrice/dividePrice;
                console.log('Did not guess');
                console.log(playerAttempts);
            } else {
                //when the player guessed
                playerPrice = playerPrice + amoungPrice;
                game = confirm(`Congratulation, you won! Your prize is: ${playerPrice} $. Do you want to continue?`);
                if(game) {
                    playerAttempts = playerAttemptsNumber;
                    rangeNumber = rangNumForAttemptTwo;
                    amoungPrice = attemptPriceTwo;
                    randomNumber = Math.floor(Math.random() * (rangeNumber + 1));
                } else {
                    //when the player want continue guesse the number
                    game = confirm(`Thank you for your participation. Your prize is: ${playerPrice} $ \n 
                    Do you want to play again?`);
                    if(game) {
                        playerAttempts = playerAttemptsNumber;
                        playerPrice = 0;
                        amoungPrice = attemptPriceOne;
                        rangeNumber = rangNumForAttemptOne;
                        randomNumber = Math.floor(Math.random() * (rangeNumber + 1));
                    } else {
                        break;
                    }
                }
            }

            if(playerAttempts === 0) {
                //when the player hasn't guessed
                game = confirm(`Thank you for your participation. Your prize is: ${playerPrice} $ \n 
                Do you want to play again?`);
                if(game) {
                    //when the player want play one more
                    playerAttempts = playerAttemptsNumber;
                        playerPrice = 0;
                        amoungPrice = attemptPriceOne;
                        rangeNumber = rangNumForAttemptOne;
                        randomNumber = Math.floor(Math.random() * (rangeNumber + 1));
                    } else {
                        break;
                } 
            }
        }
    }


