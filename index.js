
// Arrow functions:
// traditional functions
// export default function DoSomething() {

// };

// modern method, better for callback functions
// export const DoSomething = () => {

// };

// Ternary operators
// traditional
let age = 10;
let name = 'North';

if (age > 10) {
    name = 'North';
}
else {
    name = 'Jack';
}

// ternary
name = age > 10 ? 'North' : 'Jack';

// Objects
// JS objects are like dictionaries/hashmaps
const person = {
    firstName: 'North',
    // if key matches value variable name
    age,
    isMarried: false
};
// destructuring
const {firstName, age2, isMarried} = person;

// ... spread operator, inherits values of object
// specify key, value difference
const person2 = {...person, firstName: 'Jack'};
const names = ['North', 'Jack', 'Kayla', 'North'];
const names2 = [...names, 'Other'];

// common array functions, .map(), .filter(), .reduce()
const changedNames = names.map((nameChange) => {
    console.log(nameChange);
    return nameChange + '1';
});

const filteredNames = names.filter((nameFilter) => {
    return nameFilter != 'North';
});

// Async, Await, Fetch, Promises
let newName = 'North';
console.log(newName);
newName = 'John';
console.log(newName);

const event = new Promise((resolve, reject) => {
    let name1 = 'North';
    if (name1 == 'North') {
        resolve(name3);
    }
    else {
        reject('Name was not North, name was: '+ name1);
    }
});

// then is the resolve
// catch is the reject
// finally is no matter what
event.then(() => {
    console.log(name3);
}).catch((err) => {
    console.log(err);
}).finally(() => {
    console.log('PROMISE FINISHED');
});

// async await does same thing as promises
// cleaner code
const fetchData = async () => {
    try {
        const data = await fetch('randomwebsite');
        console.log(data);
    }
    catch (err) {
        console.log(err);
    }
    finally {
        console.log('Always logged')
    }
};