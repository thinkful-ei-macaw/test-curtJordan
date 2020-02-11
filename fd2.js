function jediName(firstName, lastName) {
   return  lastName.slice(0,3) + firstName.slice(0, 2);
}


function beyond (num) {
    if (num === 0) {
        console.log('Staying Home');
    } else if ( num === Infinity) {
       console.log('And Beyond');
    } else if (num > 0 && Number.isFinite(num)) {
        console.log('To Infinity');
    } else if (num < 0 && Number.isFinite(num)) {
        console.log('To Negative Infinity');
    }
}

