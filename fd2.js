'use strict'

function jediName(firstName, lastName) {
   return  lastName.slice(0,3) + firstName.slice(0, 2);
}


function beyond (num) {
    if (num === 0) {
        console.log('Staying Home');
    } else if (num === Infinity) {
       console.log('And Beyond');
    } else if (num > 0 && Number.isFinite(num)) {
        console.log('To Infinity');
    } else if (num < 0 && Number.isFinite(num)) {
        console.log('To Negative Infinity');
    }
}

const letterCheck = {
    a: 2,
    b: 3,
    c: 4,
    d: 5
}
const getChar = input => {
    const firstLtr = input[0];
    return !letterCheck[firstLtr] ? " " : input[letterCheck[firstLtr] - 1];
}
const decode = input => input.split(" ").map(getChar).join('');
console.log(decode('craft block argon meter bells brown croon droop'))


function daysInMonth(month, leapYear) {
    switch(month) {
        case 'September':
        case 'April':
        case 'June':
        case 'November':
            return '${month} has 30 Days';
            break;
        case 'February':
            if(!leapYear) {
                return 'February has 28 Days';
                } else {
                return 'February has 29 Days';
                }
            break;
        case 'January':
        case 'March':
        case 'May':
        case 'July':
        case 'August':
        case 'October':
        case 'December':
            return '${month} has 31 Days';
            break;
        default:
             return 'Must provide a valid month.';   
    
}

function rockPaperScissor = num => {
    const cpu = Math.floor(Math.random() * 3) + 1;

        if (num === cpu) {
            console.log('It  is a tie!');
        }
        try ( num < 0 || num > 3) {
            throw new Error 'You must choose ROCK! PAPER! or SCISSORS!';
        } catch (e) {
            console.error(e.message);
        }

        if (num === 1) {
            if (cpu ===2 ){
                console.log('Paper covers Rock! YOU LOSE.');
        } else if (cpu ===3) {
            console.log('Rock beats Scissors. YOU Win.');
        }

        if (num === 2) {
            if (cpu === 1){
                console.log('Paper covers Rock! YOU Win.');
        } else if (cpu === 3) {
            console.log('Scissors cut Paper. YOU LOSE.');
        }

        if (num === 3) {
            if (cpu ===2 ){
                console.log('Scissors cut Paper. You Win.');
        } else if (cpu ===3) {
            console.log('Rock beats Scissors. YOU LOSE.');
        }
} 
