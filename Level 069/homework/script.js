// Homework 1

function analyzeRandom() {
    let randomnum = Math.floor(Math.random() * 200 - 100)

    console.log(Math.round(randomnum), Math.floor(randomnum), Math.ceil(randomnum), Math.sign(randomnum), Math.trunc(randomnum), Math.abs(randomnum), Math.sqrt(randomnum), Math.pow(randomnum, 3), )
}



// Homework 2

function calculate(num) {
    console.log('Square:', Math.pow(num, 2));
    console.log('Cube:', Math.pow(num, 3));
    console.log('Square Root:', Math.sqrt(num));
}




// Homework 3

function diceGame() {
    let num = Math.floor(Math.random() * 6) + 1;

    console.log('Dice:', num);

    if (num === 1 || num === 2) {
        console.log('Lose');
    } 
    
    else if (num === 3 || num === 4) {
        console.log('Try Again');
    } 
    
    else {
        console.log('Win');
    }
}




// Homework 4

function powerMath(a, b) {
    let result = Math.pow(a, b);

    console.log('Power:', result);
    console.log('Square Root:', Math.sqrt(result));
    console.log('Rounded:', Math.round(result));
    console.log('Sign:', Math.sign(result));
}




// Homework 5

function checkSign(num) {
    let sign = Math.sign(num);

    if (sign === 1) {
        console.log('Positive');
    } 
    
    else if (sign === -1) {
        console.log('Negative');
    } 
    
    else {
        console.log('Zero');
    }
}




// Homework 6

function battle() {
    let playerHP = Math.floor(Math.random() * 100) + 1;
    let enemyHP = Math.floor(Math.random() * 100) + 1;

    console.log('Player HP:', playerHP);
    console.log('Enemy HP:', enemyHP);

    if (playerHP > enemyHP) {
        console.log('Player Wins');
    } 
    
    else if (enemyHP > playerHP) {
        console.log('Enemy Wins');
    } 
    
    else {
        console.log('Draw');
    }
}




// Homework 7

function ultimateMath(a, b, c) {
    let max = Math.max(a, b, c);
    let min = Math.min(a, b, c);

    let maxSquare = Math.pow(max, 2);
    let minRoot = Math.sqrt(min);

    console.log('Max:', max);
    console.log('Min:', min);
    console.log('Max Square:', maxSquare);
    console.log('Min Root:', minRoot);
    console.log('Difference:', maxSquare - minRoot);
}




// Homework 8

function jackpot(a, b, c) {
    if (a === b && b === c) {
        console.log('JACKPOT');
    } 
    
    else if (a === b || a === c || b === c) {
        console.log('SMALL WIN');
    } 
    
    else {
        console.log('LOSE');
    }
}