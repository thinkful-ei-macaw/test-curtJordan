
function jediName(firstName, lastName) {
  return `${lastName.slice(0, 3)}${firstName(0, 1)}`;

}
 

// Beyond infinity 


function beyond(num) {
  if (num === 0) {
    return 'Staying home';
  } if (num === Infinity) {
    return 'and beyond';
  } else if (num > 0) {
    return 'to infinity ';
  }
  if (num < 0) {
    return 'to negative infinity';
  }
}

console.log(beyond(5));


//Cracking the code



function getLetter(word) {
  // decode each word
  let firstLetter = word.charAt(0);
  if (firstLetter === 'a') {
    return word.charAt(1);
  } else if (firstLetter === 'b') {
    return word.charAt(2);
  } else if (firstLetter === 'c') {
    return word.charAt(3);
  } else if (firstLetter === 'd') {
    return word.charAt(4);
  } else {
    return ' ';
  }
}

function decode(code) {
  let answer = '';
  code = code.split(' ');
  for (let i = 0; i < code.length; i++) {
    answer = answer + getLetter(code[i]);
  } return answer;
}

// How many days in a month 

function daysInAMonth(month, leapYear) {
  if (month === 'February' && leapYear) {
    return 28;
  }
  if (month === 'February' && !leapYear) {
    return 29;
  }

  switch (month) {
  case 'January':
  case 'March':
  case 'May':
  case 'July':
  case 'August':
  case 'October':
  case 'December':
    return `There are 31 days in ${month}`
    break;
  }

  switch (month) {
  case 'April':
  case 'June':
  case 'September':
  case 'November':
    return `There are 30 days in ${month}`
    break;
  }
  throw ('You must enter a month with capitalization!');
}


// Max and Min

const numbers = [1,2,3,4,5,6];

function max (numbers) {
  let i=0; 
  let biggest = numbers[0];
  while (i < numbers.length) {
    if (numbers[i] > biggest) {
      biggest = numbers[i];
    }
    i++;
  }
  return biggest;
}

function min(numbers) {
  let i = 0;
  let smallest = numbers[0];
  while (i < numbers.length) {
    if (numbers[i] < smallest) {
      smallest = numbers[i];
    }
    i++;
  }
  return smallest;
}


console.log(max(numbers));
console.log(min(numbers));



// RPC

function computerPlay() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(player) {
  const opponent = computerPlay();
  console.log(`Player chooses ${player}, Opponent chooses ${opponent}`)
  if (player == 'rock') {
    if (opponent == 'rock') {
      return 'Tie';
    } else if (opponent == 'scissors') {
      return 'You Win!';
    } else if (opponent == 'paper') {
      return 'You Lose!';
    } else {
      return 'error';
    }
  } else if (player == 'scissors') {
    if (opponent == 'rock') {
      return 'You Lose!';
    } else if (opponent == 'scissors') {
      return 'Tie';
    } else if (opponent == 'paper') {
      return 'You Win!';
    } else {
      return 'error';
    }
  } else if (player == 'paper') {
    if (opponent == 'rock') {
      return 'You Win!';
    } else if (opponent == 'scissors') {
      return 'You Lose!';
    } else if (opponent == 'paper') {
      return 'Tie';
    }
  } else {
    return 'error';
  }
}