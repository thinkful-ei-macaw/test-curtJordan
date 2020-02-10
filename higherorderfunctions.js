function getYearOfBirth(age) {
    return 2020 - age;
}





function createGreeting(name, age) {
    const yob = getYearOfBirth(age);
    return "Hi my name is ${name} and I am ${age}yrs old. I was born in ${yob}";
}

const greeting1 = createGreeting();
console.log(greeting1);
