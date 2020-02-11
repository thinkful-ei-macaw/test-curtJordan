let name = Jordan;

console.log(`Hi, my name is ${name} and I'm old.1`)

function createGreeting(name, age){
   if (name  === undefined || age  === undefined) {
    throw new Error ('Not valid');
   }

   if (age < 0) {
       throw new Error('Age cannot be negative')
   }

   if (typeof age !== 'number') {
       throw new TypeError('Age must be a number');
   }
}

try {
    const greeting1 = createGreeting('Jordan', 29)
    console.log(greeting1);
} catch(e) {
    console.error(e.message);
}


const greeting1 = createGreeting();
console.log(greeting1);

function getYearOfBirth (age) {
    if (age < 0) {
        throw new Error("age cannot be negative")
    }
    return yearOfBirth;
}


function creatGreeting(name, age) {
    const yearOfBirth = 16 - age;
}






