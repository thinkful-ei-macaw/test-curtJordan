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

