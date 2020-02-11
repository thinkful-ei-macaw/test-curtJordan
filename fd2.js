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

let s = 'craft block argon meter bells brown croon droop';
console.log(decode(s));
