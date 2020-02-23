function filter (arr, fn) {
    let newArray = [];
    for (let i=0; i < arr.length; i++) {
        if (fn(arr[i]) == true) {
          newArray.push(arr[i]);
        }
    }
    return newArray;
}

const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

// We use your `filter` function here, capturing a new array into `filteredNames`
// comprised of names that only begin with 'R'
const filteredNames = filter(myNames, function (name) {
    // This is known as a "predicate function" - it's a function that 
    // only returns a boolean
    return name[0] === 'R';
});

console.log(filteredNames) // => ['Rich', 'Ray']
// <---- DO NOT EDIT BETWEEN THESE LINES

return filteredNames;