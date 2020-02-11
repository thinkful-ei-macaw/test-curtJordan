function yearOfBirth(age) {
    if (age < 0) {
        throw new Error 'Age cannot be negative';
    }
    return 2020 - age;
}





function createGreeting(name, age) {
    const yob = yearOfBirth(age);
    return "Hi my name is ${name} and I am ${age}yrs old. I was born in ${yob}";
}

try {
    const greeting1 = createGreeting();
} catch (err) {
    console.log(err);
} finally {
console.log(greeting1);
}
