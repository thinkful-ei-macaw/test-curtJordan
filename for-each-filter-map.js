/**Filter*/

function move (arr) {
  let newArr = arr.filter(element => {
    return element[0] >= 0 && element[1] >= 0;
  });

  /** Map */

  let totalSteps = newArr.map(element => element[0] + element[1]);

  /**ForEach */

  let counter = 0;

  totalSteps.array.forEach(element => {
    counter++;});

    console.log(`Movement #${counter}: ${element} ${element == 0 || element > 1 ? 'steps' : 'step'} `);

}
move([[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]]);

// reduce *******
function decode(message){
  let reducer = (value, word) => {
    let char = (word.length == 3) ? ' ' : word[word.length - 1].toUpperCase();
    return value + char;
  }

  let words = message.split(' ');
  let output = words.reduce(reducer, '');

  console.log(output);
}

decode('noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest');
