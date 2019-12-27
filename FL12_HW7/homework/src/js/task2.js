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
        alert('You did not become a billionaire, but can.');
    } else {
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
                playerAttempts = playerAttempts - 1;
                amoungPrice = amoungPrice/dividePrice;
                console.log('Did not guess');
                console.log(playerAttempts);
            } else {
                playerPrice = playerPrice + amoungPrice;
                game = confirm(`Congratulation, you won! Your prize is: ${playerPrice} $. Do you want to continue?`);
                if(game) {
                    playerAttempts = playerAttemptsNumber;
                    rangeNumber = rangNumForAttemptTwo;
                    amoungPrice = attemptPriceTwo;
                    randomNumber = Math.floor(Math.random() * (rangeNumber + 1));
                } else {
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
    }


