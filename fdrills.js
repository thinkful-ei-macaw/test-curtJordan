let name = Jordan;

console.log(`Hi, my name is ${name} and I'm old.1`)

function createGreeting(name, age){
    const yearOfBirth = 16 - age;
    return `Hi, I was born ${yearOfBirth}`;
}

const greeting1 = createGreeting();
console.log(greeting1);

function getYearOfBirth (age) {
    if (age < 0) {
        throw new Error("age cannot be nevative")
    }
    return yearOfBirth;
}

function creatGreeting(name, age) {
    const yearOfBirth = 16 - age;
}




